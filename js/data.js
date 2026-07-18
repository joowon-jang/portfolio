// 포트폴리오 콘텐츠 데이터 (ko / en / ja)

// 이미지 교체: 아래 IMAGES에 슬롯 id별 경로를 넣으면 플레이스홀더 대신 이미지가 표시됩니다.
// 예) 'photo': 'assets/profile.jpg', 'thumb-p1': 'assets/face-review-thumb.png'
const IMAGES = {
  'thumb-p1': 'assets/projects/facereview/logo.svg',
  'shot-p1-1': 'assets/projects/facereview/watch.png',
  'shot-p1-2': 'assets/projects/facereview/my.png'
};

const IMAGE_DIMENSIONS = {
  'thumb-p1': [224, 140],
  'shot-p1-1': [1400, 1081],
  'shot-p1-2': [1400, 1332]
};

const LINKS = {
  p1: [
    { icon: '🌐', key: 'live', url: 'https://facereview.net' },
    { icon: '🐙', key: 'repo', url: 'https://github.com/joowon-jang/facereview-front' },
    { icon: '🗄', key: 'backend', url: 'https://github.com/joowon-jang/facereview-refactor-back' }
  ],
  p2: [
    { icon: '🐙', key: 'code', url: 'https://github.com/FRONT-END-BOOTCAMP-PLUS-3/tododong' }
  ],
  p3: [
    { icon: '🌐', key: 'live', url: 'https://haemadi.netlify.app' },
    { icon: '🐙', key: 'code', url: 'https://github.com/FRONTENDSCHOOL10/Haemadi' }
  ]
};

const LINK_LABELS = {
  ko: { live: '배포 사이트', repo: '프론트엔드 저장소', backend: '백엔드 저장소', code: '프로젝트 저장소' },
  en: { live: 'Live Site', repo: 'Frontend Repo', backend: 'Backend Repo', code: 'Project Repo' },
  ja: { live: '公開サイト', repo: 'フロントエンド', backend: 'バックエンド', code: 'リポジトリ' }
};

const I18N = {
  ko: {
    nav: ['소개', '기술', '경력', '프로젝트', '블로그', '채널'],
    heroTag: '▶ 프론트엔드 개발자 포트폴리오',
    heroName: '장주원',
    heroLevel: '주니어 웹 개발자',
    heroIntro: '사용자 경험과 접근성 개선을 항상 고민합니다. 사용하는 기술의 동작 원리를 깊이 공부하고, AI를 적극 활용해 개발 프로세스를 개선합니다.',
    playerCaption: '장주원 · 프론트엔드 개발자',
    statLabels: ['UX·접근성', '동작 원리 탐구', 'AI 활용'],
    inventoryTitle: '■ 보유 기술',
    collab: '협업 도구: Git · GitHub · Notion · Figma',
    careerTitle: '■ 경력',
    careers: [
      {
        company: '(주)커리어넷',
        role: '풀스택 개발자',
        period: '2025.04 ~ 재직 중',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: '산업안전보건 관리 솔루션 · B2B 서비스 개발',
            contributions: [
              { date: '2026.04', title: 'WebView 인증/인가 프로세스 개선', desc: 'JWT를 HttpOnly Cookie 세션으로 전환, 인증 책임을 서버로 일원화' },
              { date: '2025.11', title: 'Rust(WASM) 사내 Excel 라이브러리 제작', desc: '영업 시연·고객사 유치에 기여' },
              { date: '2025.10', title: 'HTTP/2 적용 · nginx 최적화', desc: '평균 서버 응답 시간 약 20% 개선' },
              { date: '2025.06', title: '외부 SDK 모듈화 · 공통 컴포넌트화', desc: '리렌더링에도 편집 상태가 유지되는 래퍼 설계' },
              { date: '2025.05', title: 'SSO 인증 구현', desc: 'OAuth2.0 기반 서비스 간 인증 유지 구조 설계' }
            ]
          }
        ]
      }
    ],
    sideQuestTitle: '■ 프로젝트',
    sideQuestLabel: '프로젝트',
    achieveTitle: '■ 자격증 · 어학',
    certs: [
      { name: '정보처리기사', meta: '2023.06 · 한국산업인력공단' },
      { name: 'SQLD (SQL개발자)', meta: '2022.06 · 한국데이터산업진흥원' },
      { name: 'JLPT N2 (일본어)', meta: '2026.01 · 국제교류기금' }
    ],
    blogTitle: '■ 기술 블로그',
    contactTitle: '■ 채널 — 이메일 · 저장소 · 블로그 · Hugging Face',
    footer: '© 2026 장주원 · JOOWON.EXE',
    back: '돌아가기',
    prev: '이전 프로젝트',
    next: '다음 프로젝트',
    dOverview: '서비스가 하는 일',
    dFeatures: '핵심 사용자 경험',
    dRole: '개발 단계와 기여',
    dTrouble: '프론트엔드 핵심 해결',
    dStack: '기술 구성',
    dShots: '실제 서비스 화면',
    dOutcome: '검증된 결과',
    dTodo: '※ 스크린샷은 실제 서비스 화면 자료로 교체 예정입니다.',
    projects: [
      { id: 'p1', name: '페이스리뷰', badge: '🏆', desc: '웹캠 표정을 다섯 감정으로 분석해 시청 반응과 영상 추천으로 연결한 서비스', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: '최초 개발 4인 · 리팩터링 2인', verified: true,
        rolePhases: [
          { phase: '최초 개발', period: '2023.10 ~ 2023.12', role: ['프론트엔드 개발', '5종 감정 분류 모델 학습'], team: '프론트엔드 2명 · 백엔드 1명 · AI·백엔드 1명' },
          { phase: '1차 리팩터링', period: '2026.01 ~ 2026.04', role: ['프론트엔드 전담', '리팩터링 기획·기반 전환'], team: '프론트엔드 1명 · 백엔드 1명' },
          { phase: '2차 리팩터링', period: '2026.07', role: ['프론트엔드 전담', 'UI·기능 구현·배포'], team: '프론트엔드 1명 · 백엔드 1명' }
        ],
        list: {
          contribution: ['2023: 프론트엔드 개발·감정 분석 모델 직접 학습', '2026: 프론트엔드 리팩터링 전담'],
          implementation: ['감정 타임라인·영상 컨트롤', '검색·즐겨찾기', '반응형·접근성·SSG']
        },
        productSummary: [
          '시청 중 웹캠 프레임을 Socket.IO로 전송 — AI Hub 데이터셋으로 직접 학습한 TensorFlow 모델이 행복·놀람·분노·슬픔·무표정 5감정으로 분류',
          '구간·영상 단위로 누적한 감정 데이터로 현재 구간의 시청자 반응, 감정 타임라인, 개인 통계를 제공',
          '비슷한 감정 분포를 가진 영상을 추천'
        ],
        flow: ['재생 중 0.5초마다 프레임 전송', 'OpenCV 얼굴 영역 추출', 'TensorFlow 모델로 5감정 분류', '100개 진행 구간·영상 단위 집계', '타임라인·통계·추천에 활용'],
        features: [
          { name: '현재 구간의 감정 비교', desc: '나의 분석 결과와 현재 재생 구간에 누적된 시청자 감정 분포를 함께 표시' },
          { name: '감정 타임라인과 시킹', desc: '과거 시청 반응을 100개 진행 구간으로 시각화하고 그래프를 드래그해 해당 시점으로 이동' },
          { name: '2단계 감정 기반 추천', desc: '기본 점수로 후보를 구성한 뒤 최근 감정 벡터 유사도·선호 장르·최근 카테고리로 재정렬' },
          { name: '개인 감정 기록', desc: '최근 영상별 감정 변화와 전체 시청 시간의 감정 분포를 라인·도넛 차트로 제공' }
        ],
        roles: [
          { title: '2023 · 최초 개발 (4인)', points: [
            '프론트엔드 2인 중 1인으로 React 서비스 화면 구현',
            '행복·놀람·분노·슬픔·무표정 5감정 분류 모델 직접 학습'
          ] },
          { title: '2026.01 ~ 04 · 1차 리팩터링 (2인)', points: [
            '프론트엔드 전담 — 개선 방향·신규 기능·디자인 기획',
            'CRA·Yarn Classic → Vite 7·Yarn Berry, React 19·TypeScript 5.9 전환',
            '리프레시 토큰 기반 인증 개편'
          ] },
          { title: '2026.07 · 2차 리팩터링 (2인)', points: [
            '디자인 시스템 정립 · 전 페이지 플랫 리디자인 · 3단계 반응형',
            '감정 타임라인 라인 차트 + 드래그 시킹 · 커스텀 영상 컨트롤',
            '검색·즐겨찾기 신설 · 접근성·TanStack Query·SSG·영상별 OG·ErrorBoundary 정비',
            '프론트엔드 Vercel 이전'
          ] },
          { title: 'AI 에이전트 활용', points: [
            'Claude Code · OpenAI Codex 병행 사용',
            'AGENTS.md·DESIGN.md·API 레퍼런스 스킬로 작업 기준 문서화',
            '수행 결과를 커밋 단위로 직접 검수 — AI에 의존이 아닌 활용'
          ] }
        ],
        troubles: [
          { problem: 'SPA 특성상 모든 경로가 같은 메타데이터를 반환해 검색 노출과 링크 미리보기가 불리한 문제', solution: '빌드 타임에 정적 라우트를 SSG로 프리렌더링하고 영상 상세는 영상별 OG 메타데이터를 생성했습니다. 썸네일은 고화질 실패 시 표준 화질로 폴백하고, 새로고침 404는 Vercel catch-all rewrite로 해결했습니다.' },
          { problem: '빌드 최적화를 위해 vendor 라이브러리를 청크로 분리하자 배포 후 TDZ·ReferenceError 런타임 크래시가 발생하는 문제', solution: '청크 간 모듈 초기화 순서 문제로 진단하고, 초기화 순서에 민감한 라이브러리를 수동 청크에서 제외해 번들러 기본 분할에 맡기는 것으로 해결했습니다.' },
          { problem: 'hover 미리보기용 YouTube iframe을 목록의 모든 영상 카드가 항상 마운트해 불필요한 네트워크 요청이 쏟아지는 문제', solution: 'iframe을 hover 시점에만 마운트하고 이탈 시 언마운트하도록 변경해, 목록 진입 시 발생하던 불필요한 요청을 제거했습니다.' },
          { problem: '터치 디바이스에서 탭 이후 hover 스타일이 남아 버튼이 눌린 상태처럼 보이는 문제', solution: 'hover를 지원하는 포인터 환경에서만 hover 스타일이 적용되도록 @media (hover: hover) 미디어쿼리 가드를 일괄 적용했습니다.' },
          { problem: '여러 API가 동시에 401을 받으면 토큰 재발급 요청이 중복되고 인증 상태가 꼬이는 문제', solution: '재발급 요청은 하나만 실행하고 나머지 요청은 대기시킨 뒤, 갱신된 토큰으로 함께 재시도하도록 axios interceptor를 구성했습니다.' }
        ],
        stack: ['React 19', 'TypeScript 5.9', 'Vite 7', 'TanStack Query v5', 'Zustand', 'Socket.IO', 'Nivo', 'SCSS', 'Vitest', 'Vercel', 'Flask 3', 'TensorFlow · OpenCV', 'Redis · MongoDB'],
        stackGroups: [
          { name: '프론트엔드 · 직접 담당', items: ['React 19', 'TypeScript 5.9', 'Vite 7', 'Yarn Berry', 'TanStack Query v5', 'Zustand', 'Axios', 'Socket.IO Client', 'Nivo', 'Swiper', 'SCSS (7-1)', 'Vitest', 'Vercel'] },
          { name: '백엔드 · AI 파이프라인', items: ['Flask 3', 'flask-smorest', 'Flask-SocketIO', 'Celery', 'APScheduler', 'TensorFlow', 'OpenCV', 'JWT · bcrypt'] },
          { name: '데이터 · 인프라', items: ['MariaDB', 'MongoDB', 'Redis', 'Docker', 'Gunicorn', 'nginx', 'GitHub Actions'] }
        ],
        outcome: [
          '2023 세종대학교 제16회 창의설계경진대회 대상 수상',
          '2026 리팩터링 프론트엔드를 facereview.net(Vercel)에 배포 · 백엔드는 온프레미스 Docker 운영',
          '배포 인프라를 AWS → 온프레미스(Docker·nginx·GitHub Actions) → Vercel로 직접 이전'
        ] },
      { id: 'p2', name: '토도동', badge: '🏀', desc: 'NBA 경기의 실시간 문자 중계와 경기별 채팅을 함께 제공하는 플랫폼', period: '2025.02 ~ 2025.05', team: '팀 프로젝트 (4인)',
        role: ['실시간 중계/채팅 UI', 'SSR 전략 설계', '백엔드 Clean Architecture 계층 분리'],
        list: { contribution: ['실시간 중계/채팅 UI', 'SSR 전략 설계', '백엔드 Clean Architecture 계층 분리'], implementation: ['페이지별 SSR 메타데이터', '백엔드 계층 분리'] },
        bullets: ['NBA 경기를 실시간 문자 중계로 보여주고, 같은 경기를 보는 팬들과 채팅할 수 있는 플랫폼입니다.', '경기 일정·팀 순위·선수 기록까지 한곳에서 확인할 수 있어 하이라이트가 아닌 "진행 중인 경기"를 함께 즐기는 경험에 집중했습니다.', '검색 노출과 SNS 공유가 필요한 페이지는 SSR로 처리해 페이지별 메타데이터를 제공했습니다.', '백엔드는 UI와 DB가 바뀌어도 비즈니스 로직이 보호되도록 Clean Architecture 기반으로 계층을 분리했습니다.'],
        flow: ['NBA 경기 데이터 수신', '실시간 문자 중계', '경기별 채팅', '일정·순위·기록 제공'],
        features: [
          { name: '실시간 문자 중계', desc: '경기 이벤트(득점·파울·교체)를 실시간으로 수신해 타임라인 형태로 표시' },
          { name: '경기별 실시간 채팅', desc: 'Socket.IO 기반 경기방 채팅 — 같은 경기를 보는 팬들과 실시간 소통' },
          { name: '일정 · 순위 · 기록', desc: '경기 일정과 팀 순위, 선수 스탯을 종합 제공' },
          { name: 'SSR 메타데이터', desc: '경기·팀 페이지를 SSR로 렌더링해 검색 노출과 SNS 공유 미리보기 최적화' }
        ],
        roles: ['백엔드 아키텍처 설계 — Clean Architecture 기반 계층 분리(entities/use-cases/adapters)로 UI·DB 변경에서 비즈니스 로직 보호', 'SSR 렌더링 전략 수립 — 페이지 특성에 따라 SSR/CSR을 구분 적용하고 페이지별 메타데이터 생성', '실시간 채팅 UI 및 중계 타임라인 구현'],
        troubles: [
          { problem: '실시간 중계 데이터와 채팅 메시지가 동시에 쏟아질 때 리렌더링이 폭증하는 문제', solution: '상태를 중계/채팅 스토어로 분리하고 메시지 배치 업데이트를 적용해 렌더링 횟수를 크게 줄였습니다.' },
          { problem: '아키텍처 계층을 나누자 초기 개발 속도가 느려지고 팀원들의 진입 장벽이 생긴 문제', solution: '계층별 책임과 의존 방향을 문서화하고 보일러플레이트 템플릿을 만들어, 구조의 이점은 유지하면서 개발 속도를 회복했습니다.' }
        ],
        stack: ['Next.js', 'TypeScript', 'SCSS', 'Prisma', 'Socket.IO', 'Clean Architecture'],
        outcome: ['백엔드 Clean Architecture 계층 분리·SSR 렌더링 전략 설계', '실시간 문자 중계·경기별 채팅 UI 구현'] },
      { id: 'p3', name: '해마디', badge: '📔', desc: '하루의 감정을 기록하고 그 흐름을 시각화해 돌아보는 일기 서비스', period: '2024.08 ~ 2024.11', team: '팀 프로젝트 (3인)',
        role: ['일기 작성 흐름·감정 시각화 UI', '상태/모션 시스템 설계', '스크럼 마스터'],
        list: { contribution: ['일기 작성 흐름·감정 시각화 UI', 'Zustand 상태 구조 설계'], implementation: ['반응형 분기 일원화', '공통 모션 variants'] },
        bullets: ['하루의 감정을 기록하고 돌아볼 수 있는 감정 관리 일기 서비스입니다.', '일기를 쓰면 감정이 바다의 "마디"로 시각화되어, 시간이 지날수록 나만의 감정 지도가 만들어집니다.', 'Zustand와 CSS 미디어 쿼리를 활용해 유지보수 가능한 반응형 UI를 구현했습니다.', 'Framer Motion으로 사용자 상호작용 모션을 구현해 기록하는 경험 자체가 즐겁도록 만들었습니다.'],
        flow: ['감정 태그 선택', '하루 기록 작성', '색·형태로 감정 시각화', '월간 감정 흐름 회고'],
        features: [
          { name: '감정 일기 작성', desc: '감정 태그와 함께 하루를 기록 — 작성 과정에 맞춘 단계별 모션' },
          { name: '감정 시각화', desc: '기록된 감정을 색과 형태로 시각화해 한 달의 감정 흐름을 한눈에' },
          { name: 'AI 감정 답장', desc: '작성한 일기에 Google Gemini 기반 AI가 답장을 보내고, 사용자 간 답장도 주고받는 구조' },
          { name: '인터랙션 모션', desc: 'Framer Motion 기반 페이지 전환·제스처 반응 모션' }
        ],
        roles: ['프론트엔드 구현 — 일기 작성 흐름, 감정 시각화 UI', 'Zustand 상태 설계 — 화면 크기별 분기 로직을 스토어로 통합해 유지보수성 확보', 'Framer Motion 모션 시스템 구축 — 공통 트랜지션 변형(variants) 정의로 일관된 모션 언어 적용'],
        troubles: [
          { problem: '화면 크기별 분기가 컴포넌트마다 흩어져 반응형 코드가 유지보수하기 어려워진 문제', solution: '미디어 쿼리 기준을 토큰화하고 Zustand 스토어에서 뷰포트 상태를 일원 관리해, 분기 로직 중복을 제거했습니다.' },
          { problem: '페이지 전환 모션이 컴포넌트 언마운트와 충돌해 뚝 끊기는 문제', solution: 'AnimatePresence로 exit 모션을 보장하고 공통 variants를 정의해 전환이 자연스럽게 이어지도록 했습니다.' }
        ],
        stack: ['React', 'TanStack Query', 'Zustand', 'Framer Motion', 'Google Gemini', 'PocketBase'],
        outcome: ['일기 작성 흐름·감정 시각화 UI 구현', '반응형 상태 구조·공통 모션 시스템 정리'] }
    ]
  },
  en: {
    nav: ['Overview', 'Skills', 'Career', 'Projects', 'Blog', 'Channels'],
    heroTag: '▶ FRONTEND DEVELOPER PORTFOLIO',
    heroName: 'Jang Joowon',
    heroLevel: 'Junior Web Developer',
    heroIntro: 'I care deeply about user experience and accessibility, dig into how the tech I use actually works, and actively use AI to improve my development process.',
    playerCaption: 'Jang Joowon · Frontend Developer',
    statLabels: ['UX · Accessibility', 'Deep Understanding', 'AI Leverage'],
    inventoryTitle: '■ SKILLS',
    collab: 'Collaboration: Git · GitHub · Notion · Figma',
    careerTitle: '■ CAREER',
    careers: [
      {
        company: 'CareerNet Inc.',
        role: 'Fullstack Developer',
        period: '2025.04 ~ present',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: 'B2B industrial safety & health management solution',
            contributions: [
              { date: '2026.04', title: 'Improved WebView auth flow', desc: 'Moved JWT to HttpOnly cookie sessions, centralized auth on the server' },
              { date: '2025.11', title: 'In-house Excel library in Rust (WASM)', desc: 'Enabled key features for sales demos and client acquisition' },
              { date: '2025.10', title: 'HTTP/2 + nginx optimization', desc: '~20% faster average server response time' },
              { date: '2025.06', title: 'External SDK modularization', desc: 'Wrapper components that keep editor state across re-renders' },
              { date: '2025.05', title: 'SSO authentication', desc: 'OAuth2.0-based cross-service auth architecture' }
            ]
          }
        ]
      }
    ],
    sideQuestTitle: '■ PROJECTS',
    sideQuestLabel: 'PROJECT',
    achieveTitle: '■ LICENSE & LANGUAGE',
    certs: [
      { name: 'Engineer Information Processing (정보처리기사)', meta: '2023.06 · HRDK (한국산업인력공단)' },
      { name: 'SQLD (SQL개발자)', meta: '2022.06 · K-DATA (한국데이터산업진흥원)' },
      { name: 'JLPT N2 (Japanese)', meta: '2026.01 · Japan Foundation' }
    ],
    blogTitle: '■ TECH BLOG',
    contactTitle: '■ CHANNELS — EMAIL · REPOS · BLOG · HUGGING FACE',
    footer: '© 2026 Jang Joowon · JOOWON.EXE',
    back: 'BACK',
    prev: 'PREV PROJECT',
    next: 'NEXT PROJECT',
    dOverview: 'HOW THE SERVICE WORKS',
    dFeatures: 'CORE EXPERIENCE',
    dRole: 'PHASES & CONTRIBUTIONS',
    dTrouble: 'FRONTEND DECISIONS',
    dStack: 'TECHNICAL MAKEUP',
    dShots: 'LIVE PRODUCT SCREENS',
    dOutcome: 'VERIFIED RESULTS',
    dTodo: '※ Screenshots will be replaced with actual product screens.',
    projects: [
      { id: 'p1', name: 'Face Review', badge: '🏆', desc: 'A service that turns five emotions inferred from webcam expressions into viewing reactions and video recommendations', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: 'Original team of 4 · Refactoring team of 2', verified: true,
        rolePhases: [
          { phase: 'Original build', period: '2023.10 – 2023.12', role: ['Frontend development', 'Five-emotion classifier training'], team: 'Frontend 2 · Backend 1 · AI & Backend 1' },
          { phase: '1st refactoring', period: '2026.01 – 2026.04', role: ['Sole frontend owner', 'Planning · foundation migration'], team: 'Frontend 1 · Backend 1' },
          { phase: '2nd refactoring', period: '2026.07', role: ['Sole frontend owner', 'UI & feature delivery · deployment'], team: 'Frontend 1 · Backend 1' }
        ],
        list: {
          contribution: ['2023: frontend development · trained the emotion classifier', '2026: sole frontend owner of the refactoring'],
          implementation: ['Emotion timeline · video controls', 'Search · bookmarks', 'Responsive · accessibility · SSG']
        },
        productSummary: [
          'Webcam frames stream over Socket.IO while watching — a TensorFlow model trained directly on the AI Hub dataset classifies five emotions: happy, surprise, angry, sad, neutral',
          'Emotion data accumulated per segment and video powers the current audience reaction, the emotion timeline, and personal statistics',
          'Videos with similar emotion distributions are recommended'
        ],
        flow: ['Frame every 0.5 seconds during playback', 'OpenCV face extraction', 'Five-emotion classification with TensorFlow', 'Aggregate into 100 progress bins and per-video data', 'Use in timelines, statistics, and recommendations'],
        features: [
          { name: 'Emotion at the current segment', desc: "Shows the viewer's analysis alongside the accumulated audience distribution for the current progress bin" },
          { name: 'Emotion timeline and seeking', desc: 'Visualizes past reactions across 100 progress bins and lets viewers drag the graph to seek' },
          { name: 'Two-stage emotion recommendation', desc: 'Builds a scored candidate pool, then reranks it by recent emotion-vector similarity, preferred genres, and recent categories' },
          { name: 'Personal emotion history', desc: 'Shows emotion changes by recent video and overall watch-time distribution with line and donut charts' }
        ],
        roles: [
          { title: '2023 · Original build (team of 4)', points: [
            'One of two frontend developers building the React service screens',
            'Personally trained the five-emotion classifier used by the service'
          ] },
          { title: '2026.01–04 · First refactoring (team of 2)', points: [
            'Sole frontend owner — planned improvements, new features, and design direction',
            'Migrated CRA and Yarn Classic to Vite 7, Yarn Berry, React 19, TypeScript 5.9',
            'Rebuilt authentication around refresh tokens'
          ] },
          { title: '2026.07 · Second refactoring (team of 2)', points: [
            'Design system, flat redesign of every page, three-breakpoint responsive UI',
            'Emotion timeline line chart with drag seeking, custom video controls',
            'New search and bookmarks · accessibility, TanStack Query, SSG with per-video OG, ErrorBoundary',
            'Moved the frontend to Vercel'
          ] },
          { title: 'Working with AI agents', points: [
            'Used Claude Code and OpenAI Codex side by side',
            'Documented agent constraints in AGENTS.md, DESIGN.md, and an API-reference skill',
            'Reviewed every result commit by commit — leveraging AI, not depending on it'
          ] }
        ],
        troubles: [
          { problem: 'As an SPA, every route returned identical metadata, hurting search visibility and link previews', solution: 'Prerendered static routes with SSG at build time and generated per-video OG metadata for video pages, with thumbnail fallback from high to standard quality; refresh 404s were fixed with a Vercel catch-all rewrite.' },
          { problem: 'Splitting vendor libraries into manual chunks for build optimization caused TDZ and ReferenceError crashes right after deploys', solution: 'Diagnosed it as a module-initialization-order issue between chunks and excluded the order-sensitive libraries from manual chunking, leaving their splitting to the bundler.' },
          { problem: 'Every video card in a list mounted its hover-preview YouTube iframe up front, flooding the network with player requests', solution: 'Changed the iframe to mount only on hover and unmount on leave, eliminating the unnecessary requests on list pages.' },
          { problem: 'On touch devices, hover styles lingered after a tap, leaving buttons looking pressed', solution: 'Guarded hover styles with the @media (hover: hover) media query so they only apply in environments with real pointer hover.' },
          { problem: 'Concurrent 401 responses caused duplicate token refreshes and inconsistent auth state', solution: 'Built the axios interceptor to allow only one refresh request, queue the rest, and retry them together with the renewed token.' }
        ],
        stack: ['React 19', 'TypeScript 5.9', 'Vite 7', 'TanStack Query v5', 'Zustand', 'Socket.IO', 'Nivo', 'SCSS', 'Vitest', 'Vercel', 'Flask 3', 'TensorFlow · OpenCV', 'Redis · MongoDB'],
        stackGroups: [
          { name: 'Frontend · my responsibility', items: ['React 19', 'TypeScript 5.9', 'Vite 7', 'Yarn Berry', 'TanStack Query v5', 'Zustand', 'Axios', 'Socket.IO Client', 'Nivo', 'Swiper', 'SCSS (7-1)', 'Vitest', 'Vercel'] },
          { name: 'Backend · AI pipeline', items: ['Flask 3', 'flask-smorest', 'Flask-SocketIO', 'Celery', 'APScheduler', 'TensorFlow', 'OpenCV', 'JWT · bcrypt'] },
          { name: 'Data · infrastructure', items: ['MariaDB', 'MongoDB', 'Redis', 'Docker', 'Gunicorn', 'nginx', 'GitHub Actions'] }
        ],
        outcome: [
          'Grand prize at Sejong University’s 16th Creative Design Contest (2023)',
          '2026 refactored frontend live at facereview.net on Vercel · backend on an on-premises Docker server',
          'Migrated deployment hands-on: AWS → on-premises (Docker, nginx, GitHub Actions) → Vercel'
        ] },
      { id: 'p2', name: 'Tododong', badge: '🏀', desc: 'A platform combining live NBA text play-by-play with per-game chat', period: '2025.02 ~ 2025.05', team: 'Team of 4',
        role: ['Live play-by-play & chat UI', 'SSR strategy', 'Backend Clean Architecture layering'],
        list: { contribution: ['Live play-by-play & chat UI', 'SSR strategy', 'Backend Clean Architecture layering'], implementation: ['Per-page SSR metadata', 'Backend layer separation'] },
        bullets: ['A platform for following NBA games through live text play-by-play and chatting with fans watching the same game.', 'Schedules, standings, and player stats in one place — focused on enjoying games as they happen, not just highlights.', 'Pages needing search visibility and SNS sharing are server-rendered with per-page metadata.', 'The backend is layered with Clean Architecture so business logic survives UI and DB changes.'],
        flow: ['Receive NBA game data', 'Live play-by-play', 'Per-game chat', 'Schedules, standings, and stats'],
        features: [
          { name: 'Live play-by-play', desc: 'Receives game events (scores, fouls, substitutions) in real time and renders them as a timeline' },
          { name: 'Per-game live chat', desc: 'Socket.IO game rooms — chat with fans watching the same game' },
          { name: 'Schedule · standings · stats', desc: 'Game schedules, team standings, and player stats in one view' },
          { name: 'SSR metadata', desc: 'Server-rendered game/team pages optimized for SEO and SNS link previews' }
        ],
        roles: ['Designed the backend architecture — Clean Architecture layering (entities/use-cases/adapters) shielding business logic from UI/DB changes', 'Defined the rendering strategy — SSR/CSR split by page type with per-page metadata generation', 'Built the live chat UI and play-by-play timeline'],
        troubles: [
          { problem: 'Simultaneous bursts of play-by-play data and chat messages caused re-render storms', solution: 'Split state into separate broadcast/chat stores and batched message updates, sharply reducing render counts.' },
          { problem: 'Architecture layering slowed initial development and raised the entry barrier for teammates', solution: 'Documented layer responsibilities and dependency direction, and provided boilerplate templates — keeping the structural benefits while recovering velocity.' }
        ],
        stack: ['Next.js', 'TypeScript', 'SCSS', 'Prisma', 'Socket.IO', 'Clean Architecture'],
        outcome: ['Designed the backend Clean Architecture layering and SSR strategy', 'Implemented live play-by-play and per-game chat interfaces'] },
      { id: 'p3', name: 'Haemadi', badge: '📔', desc: 'A journal for recording daily emotions and reflecting on their visualized flow', period: '2024.08 ~ 2024.11', team: 'Team of 3',
        role: ['Journaling flow & emotion visualization UI', 'State & motion systems', 'Scrum master'],
        list: { contribution: ['Journaling flow & emotion-visualization UI', 'Zustand state structure'], implementation: ['Centralized responsive branching', 'Shared motion variants'] },
        bullets: ['A diary service for recording and reflecting on daily emotions.', 'Each entry becomes a visual "node" in your sea of emotions, building a personal emotional map over time.', 'Maintainable responsive UI built with Zustand and CSS media queries.', 'Framer Motion effects make the act of journaling itself enjoyable.'],
        flow: ['Choose an emotion tag', 'Write the day', 'Visualize emotion in color and form', 'Review the monthly emotional flow'],
        features: [
          { name: 'Emotion journaling', desc: 'Record your day with emotion tags — step-by-step motion guides the journaling flow' },
          { name: 'Emotion visualization', desc: 'Entries visualized by color and shape — a month of feelings at a glance' },
          { name: 'AI emotion replies', desc: 'Google Gemini writes AI replies to diary entries, alongside user-to-user replies' },
          { name: 'Interaction motion', desc: 'Framer Motion page transitions and gesture-reactive motion' }
        ],
        roles: ['Built the frontend — journaling flow and emotion visualization UI', 'Designed Zustand state — centralized viewport logic in the store for maintainability', 'Built the motion system — shared Framer Motion variants for a consistent motion language'],
        troubles: [
          { problem: 'Viewport branching scattered across components made responsive code hard to maintain', solution: 'Tokenized media query breakpoints and centralized viewport state in Zustand, removing duplicated branching.' },
          { problem: 'Page transition motion clashed with component unmounting, cutting transitions off abruptly', solution: 'Guaranteed exit motion with AnimatePresence and defined shared variants for seamless transitions.' }
        ],
        stack: ['React', 'TanStack Query', 'Zustand', 'Framer Motion', 'Google Gemini', 'PocketBase'],
        outcome: ['Implemented the journaling flow and emotion-visualization UI', 'Organized responsive state and a shared motion system'] }
    ]
  },
  ja: {
    nav: ['紹介', 'スキル', 'キャリア', 'プロジェクト', 'ブログ', 'チャンネル'],
    heroTag: '▶ フロントエンド開発者ポートフォリオ',
    heroName: 'チャン・ジュウォン',
    heroLevel: 'ジュニアWeb開発者',
    heroIntro: 'ユーザー体験とアクセシビリティの改善を常に考えています。使う技術の動作原理を深く学び、AIを積極的に活用して開発プロセスを改善します。',
    playerCaption: 'チャン・ジュウォン · フロントエンド開発者',
    statLabels: ['UX・アクセシビリティ', '動作原理の探求', 'AI活用'],
    inventoryTitle: '■ 保有スキル',
    collab: '協業ツール: Git · GitHub · Notion · Figma',
    careerTitle: '■ キャリア',
    careers: [
      {
        company: 'CareerNet',
        role: 'フルスタック開発者',
        period: '2025.04 ~ 在職中',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: '産業安全保健管理ソリューション · B2Bサービス開発',
            contributions: [
              { date: '2026.04', title: 'WebView認証プロセスの改善', desc: 'JWTをHttpOnly Cookieセッションへ移行、認証責任をサーバーに一元化' },
              { date: '2025.11', title: 'Rust(WASM)社内Excelライブラリ制作', desc: '営業デモ・顧客獲得に貢献' },
              { date: '2025.10', title: 'HTTP/2適用 · nginx最適化', desc: '平均サーバー応答時間を約20%改善' },
              { date: '2025.06', title: '外部SDKのモジュール化', desc: '再レンダリングでも編集状態を保持するラッパー設計' },
              { date: '2025.05', title: 'SSO認証の実装', desc: 'OAuth2.0ベースのサービス間認証構造を設計' }
            ]
          }
        ]
      }
    ],
    sideQuestTitle: '■ プロジェクト',
    sideQuestLabel: 'プロジェクト',
    achieveTitle: '■ 資格 · 語学',
    certs: [
      { name: '情報処理技師 (정보처리기사)', meta: '2023.06 · 韓国産業人力公団' },
      { name: 'SQLD (SQL개발자)', meta: '2022.06 · 韓国データ産業振興院' },
      { name: 'JLPT N2 (日本語)', meta: '2026.01 · 国際交流基金' }
    ],
    blogTitle: '■ 技術ブログ',
    contactTitle: '■ チャンネル — メール · リポジトリ · ブログ · Hugging Face',
    footer: '© 2026 チャン・ジュウォン · JOOWON.EXE',
    back: '戻る',
    prev: '前のプロジェクト',
    next: '次のプロジェクト',
    dOverview: 'サービスの仕組み',
    dFeatures: '主要な体験',
    dRole: '開発段階と貢献',
    dTrouble: 'フロントエンドの主要な解決',
    dStack: '技術構成',
    dShots: '実サービス画面',
    dOutcome: '確認済みの成果',
    dTodo: '※ スクリーンショットは実際のサービス画面に差し替え予定です。',
    projects: [
      { id: 'p1', name: 'フェイスレビュー', badge: '🏆', desc: 'Webカメラの表情を5感情に分類し、視聴反応と動画推薦につなげるサービス', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: '初期開発4人 · リファクタリング2人', verified: true,
        rolePhases: [
          { phase: '初期開発', period: '2023.10 ~ 2023.12', role: ['フロントエンド開発', '5感情分類モデル学習'], team: 'フロントエンド2人 · バックエンド1人 · AI・バックエンド1人' },
          { phase: '1次リファクタリング', period: '2026.01 ~ 2026.04', role: ['フロントエンド専任', 'リファクタリング企画・基盤移行'], team: 'フロントエンド1人 · バックエンド1人' },
          { phase: '2次リファクタリング', period: '2026.07', role: ['フロントエンド専任', 'UI・機能実装・デプロイ'], team: 'フロントエンド1人 · バックエンド1人' }
        ],
        list: {
          contribution: ['2023: フロントエンド開発・感情分析モデルを直接学習', '2026: フロントエンドリファクタリング専任'],
          implementation: ['感情タイムライン・動画操作', '検索・お気に入り', 'レスポンシブ・アクセシビリティ・SSG']
        },
        productSummary: [
          '視聴中のWebカメラフレームをSocket.IOで送信 — AI Hubデータセットで直接学習したTensorFlowモデルが「喜び・驚き・怒り・悲しみ・無表情」の5感情に分類',
          '区間・動画単位で蓄積した感情データで、現在区間の視聴者反応・感情タイムライン・個人統計を提供',
          '似た感情分布を持つ動画を推薦'
        ],
        flow: ['再生中0.5秒ごとにフレーム送信', 'OpenCVで顔領域を抽出', 'TensorFlowモデルで5感情を分類', '100進行区間・動画単位で集計', 'タイムライン・統計・推薦に利用'],
        features: [
          { name: '現在区間の感情比較', desc: '自分の分析結果と、現在の再生区間に蓄積された視聴者の感情分布を同時に表示' },
          { name: '感情タイムラインとシーク', desc: '過去の視聴反応を100進行区間で可視化し、グラフをドラッグして該当時点へ移動' },
          { name: '2段階の感情ベース推薦', desc: '基本スコアで候補を作り、直近の感情ベクトル類似度・好みのジャンル・最近のカテゴリで再順位付け' },
          { name: '個人感情履歴', desc: '最近見た動画ごとの感情変化と総視聴時間の感情分布をライン・ドーナツチャートで表示' }
        ],
        roles: [
          { title: '2023 · 初期開発（4人）', points: [
            'フロントエンド2人のうちの1人としてReactのサービス画面を実装',
            '「喜び・驚き・怒り・悲しみ・無表情」の5感情分類モデルを直接学習'
          ] },
          { title: '2026.01〜04 · 1次リファクタリング（2人）', points: [
            'フロントエンド専任 — 改善方針・新機能・デザインを企画',
            'CRA・Yarn Classic → Vite 7・Yarn Berry、React 19・TypeScript 5.9へ移行',
            'リフレッシュトークンベースの認証刷新'
          ] },
          { title: '2026.07 · 2次リファクタリング（2人）', points: [
            'デザインシステム定立 · 全ページのフラットリデザイン · 3段階レスポンシブ',
            '感情タイムラインのラインチャート + ドラッグシーク · カスタム動画操作',
            '検索・お気に入りを新設 · アクセシビリティ・TanStack Query・SSG・動画別OG・ErrorBoundaryを整備',
            'フロントエンドをVercelへ移行'
          ] },
          { title: 'AIエージェント活用', points: [
            'Claude Code · OpenAI Codexを併用',
            'AGENTS.md・DESIGN.md・APIスキルで作業基準を文書化',
            '成果物をコミット単位で直接検証 — AIへの依存ではなく活用'
          ] }
        ],
        troubles: [
          { problem: 'SPAの特性上、全ルートが同じメタデータを返し、検索露出とリンクプレビューで不利になる問題', solution: 'ビルド時に静的ルートをSSGでプリレンダリングし、動画詳細は動画別のOGメタデータを生成。サムネイルは高画質失敗時に標準画質へフォールバックし、リロード時の404はVercelのcatch-all rewriteで解決しました。' },
          { problem: 'ビルド最適化のためvendorライブラリを手動チャンクに分割したところ、デプロイ直後にTDZ・ReferenceErrorのランタイムクラッシュが発生する問題', solution: 'チャンク間のモジュール初期化順序の問題と診断し、順序に敏感なライブラリを手動チャンクから除外してバンドラーの既定分割に任せることで解決しました。' },
          { problem: 'hoverプレビュー用のYouTube iframeをリストの全カードが常時マウントし、不要なネットワークリクエストが大量発生する問題', solution: 'iframeをhover時のみマウントし、離脱時にアンマウントするよう変更して、リスト表示時の不要なリクエストを排除しました。' },
          { problem: 'タッチデバイスでタップ後にhoverスタイルが残り、ボタンが押されたままに見える問題', solution: 'hoverをサポートするポインター環境でのみ適用されるよう、@media (hover: hover)のメディアクエリガードを一括適用しました。' },
          { problem: '複数APIが同時に401を受けるとトークン再発行が重複し、認証状態が競合する問題', solution: '再発行は1件だけ実行し、残りのリクエストを待機させた後、更新済みトークンでまとめて再試行するようaxios interceptorを構成しました。' }
        ],
        stack: ['React 19', 'TypeScript 5.9', 'Vite 7', 'TanStack Query v5', 'Zustand', 'Socket.IO', 'Nivo', 'SCSS', 'Vitest', 'Vercel', 'Flask 3', 'TensorFlow · OpenCV', 'Redis · MongoDB'],
        stackGroups: [
          { name: 'フロントエンド · 直接担当', items: ['React 19', 'TypeScript 5.9', 'Vite 7', 'Yarn Berry', 'TanStack Query v5', 'Zustand', 'Axios', 'Socket.IO Client', 'Nivo', 'Swiper', 'SCSS (7-1)', 'Vitest', 'Vercel'] },
          { name: 'バックエンド · AIパイプライン', items: ['Flask 3', 'flask-smorest', 'Flask-SocketIO', 'Celery', 'APScheduler', 'TensorFlow', 'OpenCV', 'JWT · bcrypt'] },
          { name: 'データ · インフラ', items: ['MariaDB', 'MongoDB', 'Redis', 'Docker', 'Gunicorn', 'nginx', 'GitHub Actions'] }
        ],
        outcome: [
          '2023年 世宗大学第16回創意設計コンテスト大賞',
          '2026年リファクタリングのフロントエンドをfacereview.net（Vercel）で公開 · バックエンドはオンプレミスDockerで運用',
          'デプロイインフラをAWS → オンプレミス（Docker・nginx・GitHub Actions）→ Vercelへ自ら移行'
        ] },
      { id: 'p2', name: 'トドドン', badge: '🏀', desc: 'NBAのリアルタイム文字中継と試合別チャットを一緒に提供するプラットフォーム', period: '2025.02 ~ 2025.05', team: 'チーム (4人)',
        role: ['リアルタイム中継/チャットUI', 'SSR戦略の設計', 'バックエンドClean Architecture層分離'],
        list: { contribution: ['リアルタイム中継/チャットUI', 'SSR戦略の設計', 'バックエンドClean Architecture層分離'], implementation: ['ページ別SSRメタデータ', 'バックエンド層分離'] },
        bullets: ['NBAの試合をリアルタイムのテキスト中継で追いながら、同じ試合を見るファンとチャットできるプラットフォームです。', '日程・順位・選手成績を一箇所で確認でき、ハイライトではなく「進行中の試合」を一緒に楽しむ体験に注力しました。', '検索露出とSNS共有が必要なページはSSRで処理し、ページ別メタデータを提供しました。', 'バックエンドはUIとDBが変わってもビジネスロジックが守られるよう、Clean Architectureベースで層を分離しました。'],
        flow: ['NBA試合データを受信', 'リアルタイム文字中継', '試合別チャット', '日程・順位・成績を提供'],
        features: [
          { name: 'リアルタイムテキスト中継', desc: '試合イベント（得点・ファウル・交代）をリアルタイムに受信しタイムライン形式で表示' },
          { name: '試合別ライブチャット', desc: 'Socket.IOベースの試合ルーム — 同じ試合を見るファンとリアルタイム交流' },
          { name: '日程 · 順位 · 成績', desc: '試合日程、チーム順位、選手スタッツを総合提供' },
          { name: 'SSRメタデータ', desc: '試合・チームページをSSRでレンダリングし、検索露出とSNSプレビューを最適化' }
        ],
        roles: ['バックエンドアーキテクチャ設計 — Clean Architectureの層分離（entities/use-cases/adapters）でビジネスロジックを保護', 'レンダリング戦略の策定 — ページ特性に応じたSSR/CSRの使い分けとページ別メタデータ生成', 'ライブチャットUIと中継タイムラインの実装'],
        troubles: [
          { problem: '中継データとチャットメッセージが同時に殺到すると再レンダリングが激増する問題', solution: '状態を中継/チャットのストアに分離し、メッセージのバッチ更新を適用してレンダリング回数を大幅に削減しました。' },
          { problem: '層の分離により初期開発速度が落ち、チームメンバーの参入障壁が生じた問題', solution: '層ごとの責務と依存方向をドキュメント化し、ボイラープレートを用意して、構造の利点を保ちつつ開発速度を回復しました。' }
        ],
        stack: ['Next.js', 'TypeScript', 'SCSS', 'Prisma', 'Socket.IO', 'Clean Architecture'],
        outcome: ['バックエンドClean Architecture層分離・SSR戦略を設計', 'リアルタイム文字中継・試合別チャットUIを実装'] },
      { id: 'p3', name: 'ヘマディ', badge: '📔', desc: '一日の感情を記録し、その流れを可視化して振り返る日記サービス', period: '2024.08 ~ 2024.11', team: 'チーム (3人)',
        role: ['日記作成フロー・感情可視化UI', '状態/モーション設計', 'スクラムマスター'],
        list: { contribution: ['日記作成フロー・感情可視化UI', 'Zustand状態設計'], implementation: ['レスポンシブ分岐の一元化', '共通モーションvariants'] },
        bullets: ['一日の感情を記録し、振り返ることができる感情管理日記サービスです。', '日記を書くと感情が海の「節目」として可視化され、時間とともに自分だけの感情マップが作られます。', 'ZustandとCSSメディアクエリで保守可能なレスポンシブUIを実装しました。', 'Framer Motionでユーザー操作に応じたモーションを実装し、記録する体験自体が楽しくなるようにしました。'],
        flow: ['感情タグを選択', '一日を記録', '色と形で感情を可視化', '月間の感情推移を振り返る'],
        features: [
          { name: '感情日記の作成', desc: '感情タグと共に一日を記録 — 日記作成フローに合わせた段階別モーション' },
          { name: '感情の可視化', desc: '記録された感情を色と形で可視化し、一ヶ月の感情の流れを一目で確認' },
          { name: 'AI感情返信', desc: '書いた日記にGoogle GeminiベースのAIが返信し、ユーザー同士の返信もやり取りできる構造' },
          { name: 'インタラクションモーション', desc: 'Framer Motionによるページ遷移・ジェスチャー反応モーション' }
        ],
        roles: ['フロントエンド実装 — 日記作成フロー、感情可視化UI', 'Zustand状態設計 — ビューポート分岐ロジックをストアに一元化し保守性を確保', 'モーションシステム構築 — 共通variantsの定義で一貫したモーション言語を適用'],
        troubles: [
          { problem: '画面サイズの分岐が各コンポーネントに散在し、レスポンシブコードの保守が困難になった問題', solution: 'メディアクエリの基準をトークン化し、Zustandストアでビューポート状態を一元管理して分岐の重複を排除しました。' },
          { problem: 'ページ遷移モーションがアンマウントと衝突し途切れる問題', solution: 'AnimatePresenceでexitモーションを保証し、共通variantsを定義して遷移が自然に繋がるようにしました。' }
        ],
        stack: ['React', 'TanStack Query', 'Zustand', 'Framer Motion', 'Google Gemini', 'PocketBase'],
        outcome: ['日記作成フロー・感情可視化UIを実装', 'レスポンシブ状態構造・共通モーションシステムを整理'] }
    ]
  }
};

const SKILLS = {
  main: ['TypeScript', 'React', 'Next.js'],
  sub: ['TanStack Query', 'Zustand', 'Sass', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'nginx', 'Socket.IO', 'MCP · Agent Skills'],
  special: 'Rust/WASM ★'
};

const UI_COPY = {
  ko: {
    skip: '본문으로 건너뛰기', menu: '메뉴', navLabel: '주요 메뉴', langLabel: '언어 선택',
    careerChapter: 'CHAPTER · 회사', careerMission: 'MISSION · 프로젝트', careerLog: 'LOG · 기여 기록',
    missionFile: 'MISSION FILE', projectContribution: '핵심 기여', projectImplementation: '대표 구현', projectLoadout: '핵심 기술', openLog: 'LOG 열기',
    projectGuide: '최근 작업일 순 · 핵심 기여와 대표 구현 기준', flowTitle: '서비스 작동 흐름',
    blogEmptyTitle: '아직 공개한 글을 연결하지 않았습니다.',
    blogEmptyDesc: '준비되지 않은 제목 대신, 작성한 글이 생기면 이곳에 추가합니다.',
    visitBlog: 'Velog에서 글 확인하기',
    hudTitle: '미션 브리핑', hudLabels: ['문제', '기여', '성과'],
    statusTitle: '기본 정보', statusLabels: { period: '기간', team: '팀 구성', links: '링크' },
    roleLabel: '역할',
    imageLabels: {
      photo: '장주원 프로필을 표현한 픽셀 아바타',
      p1: '페이스리뷰 공식 로고',
      p2: '농구 코트와 실시간 중계를 표현한 토도동 픽셀 장면',
      p3: '달빛 바다와 감정 일기를 표현한 해마디 픽셀 장면'
    },
    shotLabels: {
      p1: ['영상 위 감정 타임라인 그래프와 커스텀 재생 컨트롤이 표시된 페이스리뷰 시청 화면', '감정 분포 도넛 차트와 최근 시청 영상별 그래프가 표시된 페이스리뷰 마이페이지']
    },
    hud: {
      p1: ['클릭·시청 기록만으로는 영상 구간별 감정 반응을 알기 어려움', ['2023: 프론트엔드 개발·감정 분석 모델 직접 학습', '2026: 프론트엔드 리팩터링 전담'], ['창의설계경진대회 대상', 'facereview.net 배포']],
      p2: ['중계·채팅의 동시 업데이트', ['백엔드 Clean Architecture 계층 분리', 'SSR 전략·실시간 UI'], ['실시간 문자 중계·경기별 채팅 구현', 'SSR 페이지 구현']],
      p3: ['흩어진 반응형·모션 로직', ['일기 작성 흐름·감정 시각화 UI', '상태·모션 시스템 설계'], ['감정 일기·시각화 구현', '반응형 UI 구현']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsPending: '실제 화면 자료 준비 중', screenshotsReady: '실제 서비스 화면 · 2026.07'
  },
  en: {
    skip: 'Skip to main content', menu: 'Menu', navLabel: 'Primary', langLabel: 'Language',
    careerChapter: 'CHAPTER · COMPANY', careerMission: 'MISSION · PROJECT', careerLog: 'LOG · CONTRIBUTIONS',
    missionFile: 'MISSION FILE', projectContribution: 'CORE CONTRIBUTION', projectImplementation: 'KEY IMPLEMENTATION', projectLoadout: 'CORE STACK', openLog: 'OPEN LOG',
    projectGuide: 'Latest work first · compared by contribution and implementation', flowTitle: 'SERVICE FLOW',
    blogEmptyTitle: 'No published posts are linked yet.',
    blogEmptyDesc: 'New writing will appear here when it is ready to share.',
    visitBlog: 'Visit Velog',
    hudTitle: 'MISSION BRIEF', hudLabels: ['Problem', 'Contribution', 'Outcome'],
    statusTitle: 'PROJECT INFO', statusLabels: { period: 'PERIOD', team: 'TEAM', links: 'LINKS' },
    roleLabel: 'ROLE',
    imageLabels: {
      photo: 'Pixel avatar representing Jang Joowon',
      p1: 'Official Face Review logo',
      p2: 'Pixel scene of Tododong basketball court and live updates',
      p3: 'Pixel scene of Haemadi moonlit sea and emotion journal'
    },
    shotLabels: {
      p1: ['Face Review watch screen with an emotion timeline over the video and custom playback controls', 'Face Review profile screen with an emotion-distribution donut and graphs for recently watched videos']
    },
    hud: {
      p1: ['Click and watch history alone cannot show emotional reactions by video segment', ['2023: frontend development · trained the emotion classifier', '2026: sole frontend owner of the refactoring'], ['Creative Design grand prize', 'facereview.net deployed']],
      p2: ['Concurrent live feed and chat updates', ['Backend Clean Architecture layering', 'SSR strategy · real-time UI'], ['Live play-by-play & per-game chat', 'SSR pages']],
      p3: ['Scattered responsive and motion logic', ['Journaling flow · emotion visualization UI', 'State & motion systems'], ['Emotion journal & visualization', 'Responsive UI']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsPending: 'Actual screen material coming soon', screenshotsReady: 'Live product screens · 2026.07'
  },
  ja: {
    skip: '本文へスキップ', menu: 'メニュー', navLabel: 'メインメニュー', langLabel: '言語選択',
    careerChapter: 'CHAPTER · 会社', careerMission: 'MISSION · プロジェクト', careerLog: 'LOG · 貢献記録',
    missionFile: 'MISSION FILE', projectContribution: '主要な貢献', projectImplementation: '代表実装', projectLoadout: '主要技術', openLog: 'LOGを開く',
    projectGuide: '最近の作業順 · 貢献と代表実装で比較', flowTitle: 'サービスの動作フロー',
    blogEmptyTitle: '公開記事はまだ連携していません。',
    blogEmptyDesc: '公開できる記事ができ次第、ここに追加します。',
    visitBlog: 'Velogで記事を見る',
    hudTitle: 'ミッションブリーフィング', hudLabels: ['課題', '貢献', '成果'],
    statusTitle: '基本情報', statusLabels: { period: '期間', team: 'チーム構成', links: 'リンク' },
    roleLabel: '担当',
    imageLabels: {
      photo: 'チャン・ジュウォンを表すピクセルアバター',
      p1: 'フェイスレビューの公式ロゴ',
      p2: 'トドドンのバスケットコートと実況を表すピクセルシーン',
      p3: 'ヘマディの月夜の海と感情日記を表すピクセルシーン'
    },
    shotLabels: {
      p1: ['動画上の感情タイムラインとカスタム再生コントロールを表示するフェイスレビューの視聴画面', '感情分布ドーナツと最近見た動画別グラフを表示するフェイスレビューのマイページ']
    },
    hud: {
      p1: ['クリック・視聴履歴だけでは動画区間ごとの感情反応が分からない', ['2023: フロントエンド開発・感情分析モデルを直接学習', '2026: フロントエンドリファクタリング専任'], ['創意設計コンテスト大賞', 'facereview.net公開']],
      p2: ['実況とチャットの同時更新', ['バックエンドClean Architecture層分離', 'SSR戦略・リアルタイムUI'], ['文字中継・試合別チャットを実装', 'SSRページを実装']],
      p3: ['分散したレスポンシブ・モーション処理', ['日記作成フロー・感情可視化UI', '状態・モーション設計'], ['感情日記・可視化を実装', 'レスポンシブUIを実装']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsPending: '実際の画面資料を準備中', screenshotsReady: '実サービス画面 · 2026.07'
  }
};

const CONTACT = {
  email: 'mac52485@gmail.com',
  github: { label: 'github.com/joowon-jang', url: 'https://github.com/joowon-jang' },
  blog: { label: 'velog.io/@juwon98', url: 'https://velog.io/@juwon98/posts' },
  huggingface: { label: 'huggingface.co/wonone', url: 'https://huggingface.co/wonone' }
};
