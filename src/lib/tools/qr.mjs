/**
 * QR code encoder — apna, zero dependency (Rule 1: koi naya package nahi).
 *
 * Byte mode only (URL, text, Wi-Fi, vCard — sab UTF-8 bytes), error
 * correction level M. Version 1–20 (~666 bytes tak), jo in tools ke liye
 * kaafi zyada hai.
 *
 * Sab kuch pure JS: matrix banao, component usko canvas/SVG mein draw karta hai.
 */

/* version -> [ecPerBlock, blocksG1, dataCodewordsG1, blocksG2, dataCodewordsG2] (level M) */
const BLOCKS_M = [
  null,
  [10, 1, 16, 0, 0],
  [16, 1, 28, 0, 0],
  [26, 1, 44, 0, 0],
  [18, 2, 32, 0, 0],
  [24, 2, 43, 0, 0],
  [16, 4, 27, 0, 0],
  [18, 4, 31, 0, 0],
  [22, 2, 38, 2, 39],
  [22, 3, 36, 2, 37],
  [26, 4, 43, 1, 44],
  [30, 1, 50, 4, 51],
  [22, 6, 36, 2, 37],
  [22, 8, 37, 1, 38],
  [24, 4, 40, 5, 41],
  [24, 5, 41, 5, 42],
  [28, 7, 45, 3, 46],
  [28, 10, 46, 1, 47],
  [26, 9, 43, 4, 44],
  [26, 3, 44, 11, 45],
  [26, 3, 41, 13, 42],
];

/* version -> alignment pattern centre coordinates */
const ALIGN = [
  null,
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
];

const MAX_VERSION = 20;

/* ---------- Galois field (GF(256), primitive 0x11D) ---------- */
const EXP = new Uint8Array(512);
const LOG = new Uint8Array(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();

const gfMul = (a, b) => (a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]]);

const rsGenerator = (degree) => {
  let poly = [1];
  for (let i = 0; i < degree; i++) {
    const next = new Array(poly.length + 1).fill(0);
    for (let j = 0; j < poly.length; j++) {
      next[j] ^= poly[j];
      next[j + 1] ^= gfMul(poly[j], EXP[i]);
    }
    poly = next;
  }
  return poly;
};

const rsEncode = (data, ecCount) => {
  const gen = rsGenerator(ecCount);
  const remainder = new Array(ecCount).fill(0);
  for (const byte of data) {
    const factor = byte ^ remainder[0];
    remainder.shift();
    remainder.push(0);
    for (let i = 0; i < ecCount; i++) remainder[i] ^= gfMul(gen[i + 1], factor);
  }
  return remainder;
};

/* ---------- helpers ---------- */
const dataCodewordCount = (version) => {
  const [, g1, d1, g2, d2] = BLOCKS_M[version];
  return g1 * d1 + g2 * d2;
};

const utf8Bytes = (text) => {
  const encoded = unescape(encodeURIComponent(text));
  const bytes = new Uint8Array(encoded.length);
  for (let i = 0; i < encoded.length; i++) bytes[i] = encoded.charCodeAt(i);
  return bytes;
};

const chooseVersion = (byteLength) => {
  for (let version = 1; version <= MAX_VERSION; version++) {
    const countBits = version < 10 ? 8 : 16;
    const needed = 4 + countBits + byteLength * 8;
    if (needed <= dataCodewordCount(version) * 8) return version;
  }
  return null;
};

/* ---------- data stream ---------- */
const buildCodewords = (text, version) => {
  const bytes = utf8Bytes(text);
  const capacityBits = dataCodewordCount(version) * 8;
  const bits = [];
  const push = (value, length) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >> i) & 1);
  };

  push(0b0100, 4); // byte mode
  push(bytes.length, version < 10 ? 8 : 16);
  for (const byte of bytes) push(byte, 8);

  // terminator + byte align
  const terminator = Math.min(4, capacityBits - bits.length);
  push(0, terminator);
  while (bits.length % 8 !== 0) bits.push(0);

  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) {
    let value = 0;
    for (let j = 0; j < 8; j++) value = (value << 1) | bits[i + j];
    codewords.push(value);
  }
  const padBytes = [0xec, 0x11];
  let index = 0;
  while (codewords.length < capacityBits / 8) {
    codewords.push(padBytes[index % 2]);
    index++;
  }
  return codewords;
};

const interleave = (codewords, version) => {
  const [ecPerBlock, g1, d1, g2, d2] = BLOCKS_M[version];
  const blocks = [];
  let offset = 0;
  for (let i = 0; i < g1; i++) {
    blocks.push(codewords.slice(offset, offset + d1));
    offset += d1;
  }
  for (let i = 0; i < g2; i++) {
    blocks.push(codewords.slice(offset, offset + d2));
    offset += d2;
  }
  const eccBlocks = blocks.map((block) => rsEncode(block, ecPerBlock));

  const result = [];
  const maxData = Math.max(d1, g2 ? d2 : d1);
  for (let i = 0; i < maxData; i++) {
    for (const block of blocks) if (i < block.length) result.push(block[i]);
  }
  for (let i = 0; i < ecPerBlock; i++) {
    for (const ecc of eccBlocks) result.push(ecc[i]);
  }
  return result;
};

/* ---------- matrix ---------- */
const makeMatrix = (version) => {
  const size = version * 4 + 17;
  const modules = Array.from({ length: size }, () => new Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => new Array(size).fill(false));

  const setFunction = (row, col, dark) => {
    if (row < 0 || col < 0 || row >= size || col >= size) return;
    modules[row][col] = dark;
    reserved[row][col] = true;
  };

  // finder patterns + separators
  for (const [r, c] of [
    [0, 0],
    [0, size - 7],
    [size - 7, 0],
  ]) {
    for (let dr = -1; dr <= 7; dr++) {
      for (let dc = -1; dc <= 7; dc++) {
        const row = r + dr;
        const col = c + dc;
        if (row < 0 || col < 0 || row >= size || col >= size) continue;
        const insideFinder = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
        const inRing = insideFinder && (dr === 0 || dr === 6 || dc === 0 || dc === 6);
        const inCore = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
        setFunction(row, col, inRing || inCore);
      }
    }
  }

  // timing patterns
  for (let i = 8; i < size - 8; i++) {
    setFunction(6, i, i % 2 === 0);
    setFunction(i, 6, i % 2 === 0);
  }

  // alignment patterns
  const centres = ALIGN[version];
  for (const row of centres) {
    for (const col of centres) {
      if ((row === 6 && col === 6) || (row === 6 && col === size - 7) || (row === size - 7 && col === 6)) continue;
      for (let dr = -2; dr <= 2; dr++) {
        for (let dc = -2; dc <= 2; dc++) {
          const isEdge = Math.abs(dr) === 2 || Math.abs(dc) === 2;
          const isCentre = dr === 0 && dc === 0;
          setFunction(row + dr, col + dc, isEdge || isCentre);
        }
      }
    }
  }

  // dark module
  setFunction(size - 8, 8, true);

  // format info ke liye jagah reserve karo (copy 1 + copy 2 + dark module)
  for (let i = 0; i <= 8; i++) {
    if (i !== 6) setFunction(8, i, false);
    if (i !== 6) setFunction(i, 8, false);
  }
  for (let i = 0; i < 8; i++) {
    setFunction(size - 1 - i, 8, false);
    setFunction(8, size - 1 - i, false);
  }

  // version info (v >= 7): 18 bits, do jagah
  if (version >= 7) {
    const bits = versionInfoBits(version);
    for (let i = 0; i < 18; i++) {
      const dark = ((bits >> i) & 1) === 1;
      const a = size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      setFunction(b, a, dark);
      setFunction(a, b, dark);
    }
  }

  return { size, modules, reserved };
};

export const versionInfoBits = (version) => {
  // BCH(18,6) — generator 0x1F25, 12 shift steps
  let remainder = version;
  for (let i = 0; i < 12; i++) {
    remainder = (remainder << 1) ^ ((remainder >>> 11) * 0x1f25);
  }
  return (version << 12) | (remainder & 0xfff);
};

export const formatInfoBits = (mask) => {
  const data = (0b00 << 3) | mask; // level M = 00
  // BCH(15,5) — generator 0x537, 10 shift steps
  let remainder = data;
  for (let i = 0; i < 10; i++) {
    remainder = (remainder << 1) ^ ((remainder >>> 9) * 0x537);
  }
  return ((data << 10) | (remainder & 0x3ff)) ^ 0x5412;
};

const maskFn = (mask, row, col) => {
  switch (mask) {
    case 0:
      return (row + col) % 2 === 0;
    case 1:
      return row % 2 === 0;
    case 2:
      return col % 3 === 0;
    case 3:
      return (row + col) % 3 === 0;
    case 4:
      return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0;
    case 5:
      return ((row * col) % 2) + ((row * col) % 3) === 0;
    case 6:
      return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0;
    default:
      return (((row + col) % 2) + ((row * col) % 3)) % 2 === 0;
  }
};

const placeData = (matrix, codewords, mask) => {
  const { size, modules, reserved } = matrix;
  const bits = [];
  for (const codeword of codewords) for (let i = 7; i >= 0; i--) bits.push((codeword >> i) & 1);

  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right > 0; right -= 2) {
    if (right === 6) right = 5; // skip vertical timing column
    for (let step = 0; step < size; step++) {
      const row = upward ? size - 1 - step : step;
      for (const col of [right, right - 1]) {
        if (reserved[row][col]) continue;
        let dark = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
        bitIndex++;
        if (maskFn(mask, row, col)) dark = !dark;
        modules[row][col] = dark;
      }
    }
    upward = !upward;
  }
};

const drawFormat = (matrix, mask) => {
  const { size, modules } = matrix;
  const bits = formatInfoBits(mask);
  const bit = (i) => ((bits >> i) & 1) === 1;

  // copy 1 — top-left ke around
  for (let i = 0; i <= 5; i++) modules[8][i] = bit(14 - i);
  modules[8][7] = bit(8);
  modules[8][8] = bit(7);
  modules[7][8] = bit(6);
  for (let i = 0; i <= 5; i++) modules[i][8] = bit(i);

  // copy 2 — bottom-left (7 modules) + top-right (8 modules)
  for (let i = 0; i <= 6; i++) modules[size - 1 - i][8] = bit(14 - i);
  for (let i = 0; i <= 7; i++) modules[8][size - 1 - i] = bit(i);

  // dark module
  modules[size - 8][8] = true;
};

const penalty = (modules, size) => {
  const N1 = 3;
  const N2 = 3;
  const N3 = 40;
  const N4 = 10;
  let score = 0;

  // spec ke run-length tarike se hisaab (initial/end light border included)
  const addHistory = (runLength, history) => {
    let length = runLength;
    if (history[0] === 0) length += size;
    history.pop();
    history.unshift(length);
  };
  const countPatterns = (history) => {
    const n = history[1];
    const core = n > 0 && history[2] === n && history[3] === n * 3 && history[4] === n && history[5] === n;
    return (
      (core && history[0] >= n * 4 && history[6] >= n ? 1 : 0) +
      (core && history[6] >= n * 4 && history[0] >= n ? 1 : 0)
    );
  };
  const terminateAndCount = (runColor, runLength, history) => {
    let length = runLength;
    if (runColor) {
      addHistory(length, history);
      length = 0;
    }
    length += size;
    addHistory(length, history);
    return countPatterns(history);
  };

  for (let y = 0; y < size; y++) {
    let runColor = false;
    let runLength = 0;
    const history = [0, 0, 0, 0, 0, 0, 0];
    for (let x = 0; x < size; x++) {
      if (modules[y][x] === runColor) {
        runLength++;
        if (runLength === 5) score += N1;
        else if (runLength > 5) score++;
      } else {
        addHistory(runLength, history);
        if (!runColor) score += countPatterns(history) * N3;
        runColor = modules[y][x];
        runLength = 1;
      }
    }
    score += terminateAndCount(runColor, runLength, history) * N3;
  }

  for (let x = 0; x < size; x++) {
    let runColor = false;
    let runLength = 0;
    const history = [0, 0, 0, 0, 0, 0, 0];
    for (let y = 0; y < size; y++) {
      if (modules[y][x] === runColor) {
        runLength++;
        if (runLength === 5) score += N1;
        else if (runLength > 5) score++;
      } else {
        addHistory(runLength, history);
        if (!runColor) score += countPatterns(history) * N3;
        runColor = modules[y][x];
        runLength = 1;
      }
    }
    score += terminateAndCount(runColor, runLength, history) * N3;
  }

  // 2x2 same-colour blocks
  for (let y = 0; y < size - 1; y++) {
    for (let x = 0; x < size - 1; x++) {
      const value = modules[y][x];
      if (
        value === modules[y][x + 1] &&
        value === modules[y + 1][x] &&
        value === modules[y + 1][x + 1]
      ) {
        score += N2;
      }
    }
  }

  // dark module balance
  let dark = 0;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (modules[y][x]) dark++;
  const total = size * size;
  const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
  score += k * N4;

  return score;
};

/**
 * @param {string} text
 * @param {{mask?: number}} [options] mask fix karna ho to (tests ke liye)
 * @returns {{size:number, modules:boolean[][], version:number, mask:number} | {error:string}}
 */
export const qrMatrix = (text, options = {}) => {
  if (typeof text !== 'string' || text.length === 0) return { error: 'QR ke liye koi data nahi hai.' };
  const byteLength = utf8Bytes(text).length;
  const version = chooseVersion(byteLength);
  if (!version) {
    return { error: `Data bahut lamba hai (${byteLength} bytes) — QR version ${MAX_VERSION} tak hi support hai.` };
  }

  const codewords = interleave(buildCodewords(text, version), version);
  const variants = [];
  const maskOptions = options.mask === undefined ? [0, 1, 2, 3, 4, 5, 6, 7] : [options.mask];

  for (const mask of maskOptions) {
    const matrix = makeMatrix(version);
    placeData(matrix, codewords, mask);
    drawFormat(matrix, mask);
    variants.push({ mask, matrix, score: penalty(matrix.modules, matrix.size) });
  }
  variants.sort((a, b) => a.score - b.score);
  const best = variants[0];

  return {
    size: best.matrix.size,
    modules: best.matrix.modules,
    version,
    mask: best.mask,
  };
};

/** Matrix ko SVG path/rects ki list mein badalta hai (download ke liye). */
export const qrSvg = (text, { margin = 2, scale = 8 } = {}) => {
  const result = qrMatrix(text);
  if (result.error) return result;
  const { size, modules } = result;
  const total = (size + margin * 2) * scale;
  let path = '';
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!modules[row][col]) continue;
      const x = (col + margin) * scale;
      const y = (row + margin) * scale;
      path += `M${x} ${y}h${scale}v${scale}h${-scale}z`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="${total}" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges"><rect width="${total}" height="${total}" fill="#FFFFFF"/><path d="${path}" fill="#000000"/></svg>`;
  return { svg, size, version: result.version, mask: result.mask };
};
