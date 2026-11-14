import type { ToolLists } from '../toolLists';

export const ko: ToolLists = {
  'base64-encoder': {
    features: [
      'IETF RFC 4648 규격에 따른 텍스트 인코딩과 디코딩',
      '파일은 기기 안에서만 처리해 개인정보를 지킵니다',
      '국제 텍스트를 위한 UTF-8 지원',
      '이미지를 Base64로, Base64를 파일로 저장',
      '서버 업로드 없음 — 인코딩 전부 브라우저에서 실행',
      'Windows, macOS, Linux, Android, iOS에서 즉시 결과 표시',
    ],
    useCases: [
      '표준 Base64로 CSS나 HTML에 이미지 삽입',
      'API 토큰과 이메일 첨부를 RFC 4648에 맞춰 인코딩',
      '웹 애플리케이션용 data URI 생성',
      '기기 밖으로 내보내지 않고 바이너리 데이터 전송',
    ],
  },
  'color-palette': {
    features: [
      '다양한 조화 규칙(보색, 유사색, 삼각 배색, 단색)',
      'W3C WCAG 2.2 AA 대비 검사(본문 4.5:1, 큰 텍스트 3:1)',
      'ADA와 Section 508 접근성 디자인 기준 제공',
      'CSS 변수, Tailwind 설정, Figma JSON, Adobe ASE로 내보내기',
      '팔레트 공유와 팀 협업',
      '색각 시뮬레이션과 그라디언트 생성',
    ],
    useCases: [
      '접근성 있는 색 체계로 브랜드 아이덴티티 디자인',
      'ADA와 Section 508을 만족하는 디자인 시스템 구축',
      '공공·민간 웹사이트의 접근성 검증',
      '마케팅 자료 색상과 그라디언트 배경 결정',
    ],
  },
  'css-grid-generator': {
    features: [
      'W3C CSS Grid Layout에 따른 시각적 그리드 빌더',
      '트랙 크기(fr, px, %, auto, minmax)와 깔끔한 코드 출력',
      '간격, 정렬, 이름 있는 영역 조정',
      '반응형 레이아웃 실시간 미리보기',
      '중첩 그리드와 폴백이 포함된 실무용 CSS',
      'Chrome, Safari, Firefox, Edge, Brave에서 즉시 동작',
    ],
    useCases: [
      '표준 CSS Grid로 대시보드와 글 레이아웃 구성',
      '사진 갤러리와 반응형 페이지 구조 제작',
      'W3C Grid 규격에 맞춘 폼과 디자인 시스템',
      '프런트엔드 교육과 빠른 프로토타이핑',
    ],
  },
  'image-compressor': {
    features: [
      '보이는 품질을 지키는 스마트 손실 압축',
      '최신 브라우저를 위한 JPEG, PNG, WebP, AVIF 지원',
      '브라우저 안 Canvas/WebP 압축 — 이미지가 기기 밖으로 나가지 않습니다',
      '이커머스와 웹 성능에 최적화',
      'LCP 2.5초 미만 목표를 충족하도록 도움',
      '여러 이미지를 한 번에 처리하는 흐름',
    ],
    useCases: [
      '모바일과 광랜에서 빠르게 뜨도록 사이트 이미지 최적화',
      'Shopify, Etsy, Amazon 상품 이미지 압축',
      '발행 전 블로그와 콘텐츠 이미지 용량 줄이기',
      'CDN 대역폭 절약과 페이지 로딩 속도 개선',
    ],
  },
  'json-formatter': {
    features: [
      '줄 번호가 포함된 오류 감지와 구문 강조',
      'IETF RFC 8259에 따른 JSON 검증',
      '큰 API 응답을 위한 접기 트리 보기',
      '운영과 개발을 위한 압축·정리 전환',
      '브라우저 안 처리 — 업로드 없이 완전한 개인정보 보호',
      'Windows, macOS, Linux, Android, iOS의 최신 브라우저에서 즉시 동작',
    ],
    useCases: [
      'API 응답 디버깅과 설정 파일 정리',
      'IETF RFC 8259 준수 여부 JSON 검증',
      '학생과 신입 개발자에게 JSON 구조 설명',
      '민감한 데이터를 올리지 않고 기업 데이터 점검',
    ],
  },
  'markdown-editor': {
    features: [
      'CommonMark 규격 출력을 지원하는 실시간 미리보기',
      '코드 블록과 인라인 서식 구문 강조',
      '표, 할 일 목록, 각주, 수식 지원',
      'HTML, PDF, 순수 Markdown으로 내보내기',
      '콘텐츠 작성자를 위한 글자 수와 예상 읽기 시간',
      '첫 로딩 후 오프라인 사용 가능 — 가입 불필요',
    ],
    useCases: [
      '기술 문서와 README 작성',
      'CommonMark 규격에 맞춘 블로그 초안 작성',
      '개발자와 학생을 위한 API 문서 작성',
      '구독 없이 메모와 학술 글쓰기',
    ],
  },
  'meta-tag-generator': {
    features: [
      'Search Central 스니펫 지침에 맞춘 SEO 메타 태그',
      '정확한 SNS 미리보기를 위한 Open Graph 태그',
      '이미지, 제목, 설명을 지원하는 Twitter Card 태그',
      'Facebook, LinkedIn, X 미리보기 시뮬레이션',
      'canonical URL, viewport, robots 태그 지원',
      '바로 적용 가능한 HTML·JSON 내보내기',
    ],
    useCases: [
      '규격에 맞는 메타 태그로 사이트 SEO 개선',
      '대상 독자에 맞춰 SNS 공유 최적화',
      '블로그 글과 랜딩 페이지 메타 태그 설정',
      '검증된 Search Central 태그로 고객 프로젝트 인계',
    ],
  },
  'online-ruler': {
    features: [
      '인치(in)와 1/16, 1/8, 1/4, 1/2인치 눈금',
      '센티미터(cm), 밀리미터(mm), 픽셀(px)로 미터법 병기',
      '표준 신용카드·신분증으로 보정(ISO/IEC 7810 ID-1: 85.60 × 53.98 mm)',
      'NIST 정확한 정의 참조(1국제인치 = 25.4mm)',
      '설치 불필요 — Chrome, Safari, Firefox, Edge, Brave에서 즉시 동작',
      'Windows, macOS, Linux, Android, iOS에서 반응형으로 동작',
    ],
    useCases: [
      '화면에서 바로 UI 크기 측정',
      '인치와 픽셀 단위로 프런트엔드 개발',
      '표준 용지 크기로 인쇄 디자인 확인',
      '휴대폰과 PC에서 빠른 화면 측정',
    ],
  },
  'password-generator': {
    features: [
      '길이 조정 가능(4~128)',
      '문자 집합 선택',
      '헷갈리는 문자 제외',
      '엔트로피와 강도 표시',
      '여러 개 한 번에 생성',
      '패스프레이즈 모드',
      '브라우저 안에서만 생성',
    ],
    useCases: [
      '계정 생성',
      '비밀번호 주기적 변경',
      '팀 자격 증명 공유',
      'Wi-Fi 비밀번호',
      '암호화 키',
    ],
  },
  'qr-generator': {
    features: [
      '다양한 데이터 유형(URL, vCard, Wi-Fi, SMS, 이메일, 텍스트)',
      '색상 지정과 로고 없는 깔끔한 출력',
      '고해상도 PNG와 SVG 내보내기',
      '만료되지 않는 정적 코드',
      '가입 없음, 스캔 제한 없음, 유료 등급 없음',
      '전부 브라우저에서 동작하며 아무것도 업로드하지 않습니다',
    ],
    useCases: [
      '마케팅 캠페인',
      '명함',
      '행사 체크인',
      'Wi-Fi 공유',
      '비접촉 메뉴',
    ],
  },
  'regex-tester': {
    features: [
      '실시간 일치 항목 강조',
      '정규표현식 단계별 설명',
      '여러 방언 지원(JS, Python, PCRE, Go)',
      '참고용 치트시트',
      '캡처 그룹 상세 표시',
      '브라우저 안에서만 동작',
    ],
    useCases: [
      '폼 입력 검증 패턴',
      '로그 분석',
      '데이터 추출',
      'URL 라우팅',
      '입력값 정리',
    ],
  },
  'word-counter': {
    features: [
      '실시간 집계',
      '단어, 글자, 문장, 문단',
      '읽기·말하기 시간 예상',
      '키워드 밀도 분석',
      '오프라인에서도 동작',
      '광고와 추적 없음',
    ],
    useCases: [
      '블로그 글 최적화',
      '과제와 보고서 분량 확인',
      'SEO 콘텐츠 기획',
      'SNS 글자 수 제한 확인',
      '번역 비용 견적',
    ],
  },
};
