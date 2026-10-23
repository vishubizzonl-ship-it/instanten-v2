export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function tokenize(value: string): string[] {
  const normalized = normalizeText(value);
  return normalized ? normalized.split(/\s+/) : [];
}

const SUFFIXES = ['ingly', 'edly', 'ers', 'ors', 'ing', 'ies', 'er', 'or', 'es', 'ed', 's'];

export function stemWord(word: string): string {
  let stem = word;
  for (const suffix of SUFFIXES) {
    if (stem.length >= suffix.length + 3 && stem.endsWith(suffix)) {
      stem = stem.slice(0, stem.length - suffix.length);
      break;
    }
  }
  return stem;
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  if (Math.abs(a.length - b.length) > 2) return 99;

  let prev: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i++) {
    const current: number[] = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(current[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = current;
  }

  return prev[b.length];
}

export function isSubsequence(needle: string, haystack: string): boolean {
  let index = 0;
  for (let i = 0; i < haystack.length && index < needle.length; i++) {
    if (haystack[i] === needle[index]) index++;
  }
  return index === needle.length;
}

export function tokenMatchScore(queryToken: string, targetToken: string): number {
  if (!queryToken || !targetToken) return 0;
  if (queryToken === targetToken) return 1;
  if (targetToken.startsWith(queryToken)) return 0.95;
  if (targetToken.includes(queryToken)) return 0.9;

  const queryStem = stemWord(queryToken);
  const targetStem = stemWord(targetToken);
  if (queryStem === targetStem) return 0.85;
  if (targetStem.startsWith(queryStem) || queryStem.startsWith(targetStem)) return 0.8;
  if (queryStem.length >= 3 && targetStem.includes(queryStem)) return 0.75;

  const distance = levenshtein(queryToken, targetToken);
  if (distance <= 1) return 0.8;
  if (distance <= 2 && queryToken.length >= 5) return 0.6;

  if (levenshtein(queryStem, targetStem) <= 1) return 0.7;

  if (queryToken.length >= 3 && isSubsequence(queryToken, targetToken)) return 0.5;

  return 0;
}

export interface FuzzyTarget {
  name: string;
  text: string;
}

export function fuzzyScore(query: string, target: FuzzyTarget): number {
  const queryTokens = tokenize(query);
  if (!queryTokens.length) return 0;

  const nameLower = normalizeText(target.name);
  const textLower = normalizeText(target.text);
  const nameTokens = tokenize(target.name);
  const targetTokens = tokenize(target.text);

  let score = 0;

  for (const queryToken of queryTokens) {
    let tokenScore = 0;

    if (nameLower.includes(queryToken)) tokenScore = 120;
    else if (textLower.includes(queryToken)) tokenScore = 85;
    else {
      for (const candidate of nameTokens) {
        tokenScore = Math.max(tokenScore, tokenMatchScore(queryToken, candidate) * 100);
      }
      for (const candidate of targetTokens) {
        tokenScore = Math.max(tokenScore, tokenMatchScore(queryToken, candidate) * 70);
      }
    }

    if (tokenScore === 0) return 0;
    score += tokenScore;
  }

  const phrase = normalizeText(query);
  if (phrase && nameLower.includes(phrase)) score += 150;
  else if (phrase && textLower.includes(phrase)) score += 60;

  score -= Math.min(20, nameLower.length / 20);

  return score;
}

export function fuzzyMatches(query: string, target: FuzzyTarget): boolean {
  return fuzzyScore(query, target) > 0;
}
