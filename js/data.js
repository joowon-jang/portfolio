// 포트폴리오 콘텐츠 데이터 (ko / en / ja)

// 이미지 교체: 아래 IMAGES에 슬롯 id별 경로를 넣으면 플레이스홀더 대신 이미지가 표시됩니다.
// 예) 'photo': 'assets/profile.jpg', 'thumb-p1': 'assets/face-review-thumb.png'
const IMAGES = {
  'thumb-p1': 'assets/projects/facereview/logo.svg',
  'shot-p1-1': 'assets/projects/facereview/watch.png',
  'shot-p1-2': 'assets/projects/facereview/my.png',
  'thumb-p2': 'assets/projects/tododong/schedule-poster.png',
  'shot-p2-1': 'assets/projects/tododong/schedule.gif',
  'shot-p2-2': 'assets/projects/tododong/chat.gif',
  'thumb-p3': 'assets/projects/haemadi/reply-method-poster.png',
  'shot-p3-1': 'assets/projects/haemadi/reply-method.mov',
  'shot-p3-2': 'assets/projects/haemadi/monthly-stats.mov'
};

const IMAGE_DIMENSIONS = {
  'thumb-p1': [224, 140],
  'shot-p1-1': [1400, 1081],
  'shot-p1-2': [1400, 1332],
  'thumb-p2': [700, 393],
  'shot-p2-1': [1920, 1080],
  'shot-p2-2': [1920, 1080],
  'thumb-p3': [700, 336]
};

const VIDEO_POSTERS = {
  'shot-p3-1': 'assets/projects/haemadi/reply-method-poster.png',
  'shot-p3-2': 'assets/projects/haemadi/monthly-stats-poster.png'
};

const LINKS = {
  p1: [
    { icon: '🌐', key: 'live', url: 'https://facereview.net' },
    { icon: '🐙', key: 'repo', url: 'https://github.com/joowon-jang/facereview-front' },
    { icon: '🗄', key: 'backend', url: 'https://github.com/joowon-jang/facereview-refactor-back' }
  ],
  p2: [
    { icon: '🐙', key: 'repo', url: 'https://github.com/FRONT-END-BOOTCAMP-PLUS-3/tododong' },
    { icon: '🗄', key: 'backend', url: 'https://github.com/FRONT-END-BOOTCAMP-PLUS-3/tododong-background' }
  ],
  p3: [
    { icon: '🐙', key: 'code', url: 'https://github.com/FRONTENDSCHOOL10/Haemadi' }
  ]
};

const LINK_LABELS = {
  ko: { live: '배포 사이트', repo: '프론트엔드 저장소', backend: '백엔드 저장소', code: '프로젝트 저장소' },
  en: { live: 'Live Site', repo: 'Frontend Repo', backend: 'Backend Repo', code: 'Project Repo' },
  ja: { live: '公開サイト', repo: 'フロントエンドリポジトリ', backend: 'バックエンドリポジトリ', code: 'プロジェクトリポジトリ' }
};

const BLOG_POSTS = [
  { id: 'b1', date: '2025.10.27', url: 'https://velog.io/@juwon98/HTTP1.1-to-HTTP2' },
  { id: 'b2', date: '2025.09.21', url: 'https://velog.io/@juwon98/createPortal사용과-FocusTrap으로-모달창-개선' },
  { id: 'b3', date: '2024.11.07', url: 'https://velog.io/@juwon98/React-createPortal-SplashScreen' }
];

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
    blogPosts: [
      { id: 'b1', title: 'HTTP2로 성능향상 (1.1 -> 2)', desc: 'HTTP/1.1 → HTTP/2 전환으로 응답 속도를 개선한 실무 경험', tags: ['HTTP', 'Nginx'] },
      { id: 'b2', title: '[React] FocusTrap으로 모달창 개선하기', desc: '키보드 포커스를 모달 안에 가두는 Focus Trap 구현기', tags: ['React', '접근성'] },
      { id: 'b3', title: '[React] [웹 접근성] createPortal을 사용한 SplashScreen', desc: 'createPortal로 스플래시 스크린을 구현하며 접근성까지 고려', tags: ['React', '웹 접근성'] }
    ],
    contactTitle: '■ 채널 — 이메일 · 저장소 · 블로그 · Hugging Face',
    footer: '© 2026 장주원 · JOOWON.EXE',
    back: '돌아가기',
    prev: '이전 프로젝트',
    next: '다음 프로젝트',
    dOverview: '서비스가 하는 일',
    dFeatures: '핵심 사용자 경험',
    dRole: '개발 단계와 기여',
    dTrouble: '핵심 문제 해결',
    dStack: '기술 구성',
    dShots: '실제 서비스 화면',
    dOutcome: '검증된 결과',
    dTodo: '※ 스크린샷은 실제 서비스 화면 자료로 교체 예정입니다.',
    projects: [
      { id: 'p1', name: '페이스리뷰', badge: '🏆', desc: '웹캠 표정을 다섯 감정으로 분석해 시청 반응과 영상 추천으로 연결한 서비스', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: '최초 개발 4인 · 리팩터링 2인', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
        flow: [
          { name: '시청 중 · 실시간 분석 파이프라인', steps: ['재생 중 0.5초마다 프레임 전송', 'OpenCV 얼굴 영역 추출', 'TensorFlow 모델로 5감정 분류', '100개 진행 구간·영상 단위 집계'] },
          { name: '집계 데이터 활용', steps: ['현재 구간 반응·감정 타임라인 표시', '개인 통계 시각화', '감정 유사도 기반 추천'] }
        ],
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
      { id: 'p2', name: '토도동', badge: '🏀', desc: 'NBA 경기의 실시간 문자 중계와 경기별 채팅을 함께 제공하는 플랫폼', period: '2025.02 ~ 2025.05', team: '팀 프로젝트 4인 · 전원 풀스택', verified: true,
        role: ['기술 선정 · SSR/CSR 구조 설계', '인증·채팅 서버·DB 동기화 구현'],
        list: { contribution: ['기술 선정 · SSR/CSR 구조 설계', '코드 리뷰로 접근성·SEO·렌더링 개선'], implementation: ['Socket.IO 채팅 서버 호스팅', 'NBA API 동기화 cron(Express.js)'] },
        productSummary: [
          'NBA 경기 일정을 캘린더로 조회하고, 경기별 영상·선수 기록·실시간 문자 중계·채팅을 제공합니다.',
          '실시간 문자 중계는 일정 시간 간격으로 쿼터별 진행 상황을 갱신하고, 별도로 호스팅한 Socket.IO 서버가 경기별 채팅방과 최근 50개 메시지 조회를 담당합니다.',
          '경기 데이터는 NBA 공식 API를 사용하는 cron 작업(Express.js)이 로컬 DB에 주기적으로 동기화하고, 회원 기능은 JWT·쿠키 기반 인증과 이메일 인증코드로 제공합니다.'
        ],
        flow: [
          { name: '사용자 흐름', steps: ['캘린더에서 경기 일정 확인', '경기 상세로 이동 — 영상·선수 기록 조회', '실시간 문자 중계·채팅 참여'] },
          { name: '실시간 채팅 · 별도 Socket.IO 서버', steps: ['경기방 입장 시 최근 50개 메시지 조회', '메시지를 같은 경기방에 실시간 브로드캐스트'] },
          { name: '백그라운드 · cron(Express.js)', steps: ['NBA 공식 API 주기 호출', '로컬 DB 동기화', '일정·기록·중계 데이터 최신화'] }
        ],
        features: [
          { name: '경기 일정 캘린더', desc: 'react-calendar·Swiper로 날짜를 선택하고, 날짜별 경기 수를 캘린더에 표시' },
          { name: '경기 정보 조회', desc: 'YouTube Data API로 경기 영상을, NBA 공식 데이터로 선수 기록을 컬럼별 정렬해 제공' },
          { name: '실시간 문자 중계', desc: '일정 시간 간격으로 쿼터별 진행 상황을 타임라인으로 표시' },
          { name: '경기별 실시간 채팅', desc: '별도로 호스팅한 Socket.IO 서버로 경기방 채팅을 지원하고 최근 50개 메시지를 DB에서 조회' }
        ],
        roles: [
          { title: '기술 고문 역할', points: [
            '성능·개발 편의성·npm 패키지 최신 현황을 고려한 기술 선택 결정 및 피드백',
            'SSR/CSR로 처리할 영역을 분리해 앱 전체 구조 설계',
            '코드 리뷰로 웹 접근성·SEO·렌더링 속도·가독성 등 UX/DX 개선'
          ] },
          { title: '프론트엔드 구현', points: [
            'JWT·쿠키 기반 로그인/회원가입 UI 및 인증 관리, nodemailer 이메일 인증',
            'focus trapping·외부 스크롤 방지 등 접근성 가이드를 준수한 모달 구현',
            'mixin·색상 변수 등 Sass 유틸로 스타일 구조화'
          ] },
          { title: '백엔드 구현', points: [
            'Socket.IO 채팅 서버를 별도로 호스팅·운영',
            'NBA 공식 API로 로컬 DB를 동기화하는 cron 작업 구축(Express.js)',
            'DB 구조 설계 참여'
          ] }
        ],
        troubles: [
          { problem: '팀 프로젝트에서 여러 페이지에 모달을 사용해야 했는데, 키보드 포커스가 배경 요소로 빠져나가 접근성 가이드를 위반하는 문제', solution: 'focus trapping과 외부 스크롤 방지를 구현해 모달이 열려 있는 동안 포커스와 스크롤을 모달 내부로 제한했습니다.' },
          { problem: '여러 인원이 함께 스타일을 작성하면서 색상·간격 값이 중복되고 유지보수가 어려워지는 문제', solution: 'Sass의 mixin과 색상 변수 등 utils를 구조화해 재사용 가능한 스타일 체계를 구축했습니다.' }
        ],
        stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar', 'Prisma', 'Socket.IO'],
        stackGroups: [
          { name: 'Frontend', items: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar'] },
          { name: 'Backend', items: ['Prisma', 'Socket.IO', 'Express.js'] },
          { name: 'Development', items: ['pnpm', 'Figma', 'Notion', 'GitHub', 'Discord'] }
        ],
        outcome: [
          '경기 일정·실시간 중계·채팅·인증을 갖춘 서비스를 기획부터 배포까지 완료',
          'Socket.IO 채팅 서버와 NBA 데이터 동기화 cron을 별도 저장소로 분리해 직접 호스팅·운영'
        ] },
      { id: 'p3', name: '해마디', badge: '📔', desc: '하루의 감정을 기록하고 그 흐름을 시각화해 돌아보는 일기 서비스', period: '2024.08 ~ 2024.11', team: '팀 프로젝트 3인 · 개발 2인 + 디자인·개발 보조 1인', testAccount: 'joowon11 / joowon11!', verified: true,
        role: ['DB·컴포넌트 구조 설계', '코드 리뷰 · 개발 일정 관리'],
        list: { contribution: ['PocketBase DB·컴포넌트 구조 설계', '코드 리뷰로 접근성·성능 개선'], implementation: ['Lighthouse 성능 대폭 개선', 'SVGIcon sprite 컴포넌트'] },
        productSummary: [
          '오늘의 감정을 선택해 일기를 쓰면, AI(Google Gemini) 또는 다른 사용자 중 원하는 방식으로 답장을 받을 수 있습니다.',
          'AI 답장을 선택하면 노래·영화·책 등 콘텐츠를 함께 추천받고, 마디 유리병 편지함에서 답장을 확인합니다.',
          '나의 기록 캘린더에서 과거 일기와 답장을 다시 보고, 나의 섬에서는 월간 통계로 감정 흐름을 종합 분석합니다.'
        ],
        flow: ['오늘의 감정 선택 후 일기 작성', '답장 방식 선택', { branch: ['AI — Gemini 답장·콘텐츠 추천', '익명 — 다른 사용자의 답장'] }, '유리병 편지함에서 답장 확인', '기록이 쌓이면 캘린더·월간 통계로 회고'],
        features: [
          { name: '감정 일기 작성', desc: '오늘의 감정을 선택하고 일기를 작성 — 저장 시 답장 방식(AI/익명)을 선택' },
          { name: 'AI·유저 답장', desc: 'Google Gemini로 답장과 노래·영화·책 추천을 받거나, 다른 사용자로부터 익명 답장을 받음' },
          { name: '유리병 편지함', desc: '5개의 편지 중 하나를 골라 확인하고 답장을 보낼 수 있는 마디 유리병 편지함' },
          { name: '나의 기록 · 나의 섬', desc: '캘린더로 과거 일기·답장을 다시 보고, 월간 통계로 감정 흐름을 종합 분석' }
        ],
        roles: [
          { title: '기술 고문 역할', points: [
            '코드 리뷰로 팀원들에게 접근성·SEO·렌더링 속도·가독성 등 UX/DX 향상 피드백',
            '개발 일정 관리'
          ] },
          { title: '주요 구현', points: [
            'PocketBase 데이터베이스·컴포넌트 구조 설계',
            '<symbol>/<use>를 활용한 SVGIcon 스프라이트 컴포넌트 구현',
            'TanStack Query 상태 관리, Framer Motion 애니메이션 구현',
            'Zustand로 로그인 상태(authStore) 및 뷰포트·시간대별 배경 상태(mediaStore, sunStore) 관리',
            'Router 구성 — lazy + Suspense 지연 로딩, 전역 상태 기반 redirect 처리'
          ] }
        ],
        troubles: [
          { problem: 'Lighthouse로 측정한 성능 점수가 기대보다 낮아 모바일 대응에 불리했던 문제 — 이미지 로딩 시간과 PocketBase DB 응답 대기가 주요 원인으로 확인됨', solution: '모든 이미지를 webp로 변환하고, 서버 응답이 성공했을 때만 컴포넌트를 렌더링하도록 상태 처리를 개선(조건부 렌더링으로 로딩·에러 상태 분리)했습니다. 그 결과 모바일 50~60점대 → 80~90점대, 데스크톱 70~80점대 → 90점대 후반으로 성능 점수가 상승했습니다.' },
          { problem: 'SVG sprite로 아이콘을 구현했는데 일부 아이콘 크기가 작아지고, iOS에서는 SVG filter를 사용한 아이콘이 아예 표시되지 않는 문제', solution: 'Figma 디자인에 적용된 shadow 효과를 CSS로 옮겨 이미지 자체에서 제거하고, iOS에서 filter가 깨지는 아이콘은 디자인을 일부 수정하거나 PNG로 대체했습니다.' }
        ],
        stack: ['React', 'React Router', 'Swiper', 'Framer Motion', 'Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'],
        stackGroups: [
          { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Router', 'Swiper', 'Framer Motion'] },
          { name: '상태관리 · API', items: ['Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'] },
          { name: 'Development', items: ['Vite', 'pnpm', 'ESLint', 'Prettier', 'Netlify', 'Figma', 'Notion', 'Discord', 'GitHub'] }
        ],
        outcome: [
          'Lighthouse 성능 점수 개선 — 모바일 50~60점대 → 80~90점대, 데스크톱 70~80점대 → 90점대 후반',
          'AI 답장·콘텐츠 추천을 포함한 일기 서비스를 기획부터 배포까지 완료'
        ] }
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
              { date: '2025.11', title: 'In-house Excel library in Rust (WASM)', desc: 'Contributed to sales demos and client acquisition' },
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
    blogPosts: [
      { id: 'b1', title: 'Improving Performance with HTTP/2 (1.1 → 2)', desc: 'Upgrading a production service from HTTP/1.1 to HTTP/2 for faster responses', tags: ['HTTP', 'Nginx'] },
      { id: 'b2', title: '[React] Improving Modals with Focus Trap', desc: 'Trapping keyboard focus inside a modal for better accessibility', tags: ['React', 'Accessibility'] },
      { id: 'b3', title: '[React] Accessible Splash Screen with createPortal', desc: 'Building a splash screen with createPortal, accessibility included', tags: ['React', 'Accessibility'] }
    ],
    contactTitle: '■ CHANNELS — EMAIL · REPOS · BLOG · HUGGING FACE',
    footer: '© 2026 Jang Joowon · JOOWON.EXE',
    back: 'BACK',
    prev: 'PREV PROJECT',
    next: 'NEXT PROJECT',
    dOverview: 'HOW THE SERVICE WORKS',
    dFeatures: 'CORE EXPERIENCE',
    dRole: 'PHASES & CONTRIBUTIONS',
    dTrouble: 'KEY PROBLEM SOLVING',
    dStack: 'TECHNICAL MAKEUP',
    dShots: 'LIVE PRODUCT SCREENS',
    dOutcome: 'VERIFIED RESULTS',
    dTodo: '※ Screenshots will be replaced with actual product screens.',
    projects: [
      { id: 'p1', name: 'Face Review', badge: '🏆', desc: 'A service that turns five emotions inferred from webcam expressions into viewing reactions and video recommendations', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: 'Original team of 4 · Refactoring team of 2', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
        flow: [
          { name: 'While watching · real-time analysis pipeline', steps: ['Frame every 0.5 seconds during playback', 'OpenCV face extraction', 'Five-emotion classification with TensorFlow', 'Aggregate into 100 progress bins and per-video data'] },
          { name: 'Aggregated data in use', steps: ['Current-segment reactions & emotion timeline', 'Personal stats visualization', 'Recommendations by emotion similarity'] }
        ],
        features: [
          { name: 'Emotion at the current segment', desc: "Shows the viewer's analysis alongside the accumulated audience distribution for the current progress bin" },
          { name: 'Emotion timeline and seeking', desc: 'Visualizes past reactions across 100 progress bins and lets viewers drag the graph to seek' },
          { name: 'Two-stage emotion recommendation', desc: 'Builds a scored candidate pool, then reranks it by recent emotion-vector similarity, preferred genres, and recent categories' },
          { name: 'Personal emotion history', desc: 'Shows emotion changes by recent video and overall watch-time distribution with line and donut charts' }
        ],
        roles: [
          { title: '2023 · Original build (team of 4)', points: [
            'One of two frontend developers building the React service screens',
            'Personally trained the five-emotion classifier (happy, surprise, angry, sad, neutral) used by the service'
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
      { id: 'p2', name: 'Tododong', badge: '🏀', desc: 'A platform combining live NBA text play-by-play with per-game chat', period: '2025.02 ~ 2025.05', team: 'Team of 4 · all full-stack', verified: true,
        role: ['Tech choices · SSR/CSR structure design', 'Auth, chat server & DB sync implementation'],
        list: { contribution: ['Tech choices · SSR/CSR structure design', 'A11y, SEO & rendering via code review'], implementation: ['Hosted the Socket.IO chat server', 'NBA API sync cron (Express.js)'] },
        productSummary: [
          "Browse the NBA schedule on a calendar, with each game offering video, player stats, live text play-by-play, and chat.",
          'Live play-by-play refreshes quarter-by-quarter on an interval, while a separately hosted Socket.IO server handles per-game chat rooms and loads the most recent 50 messages.',
          'A cron job (Express.js) keeps the local DB in sync with the official NBA API, and member features run on JWT + cookie auth with email verification.'
        ],
        flow: [
          { name: 'User flow', steps: ['Check the schedule on the calendar', 'Open a game — video and player stats', 'Follow the live play-by-play and chat'] },
          { name: 'Live chat · separate Socket.IO server', steps: ['Load the 50 most recent messages on entering a game room', 'Broadcast messages to the room in real time'] },
          { name: 'Background · cron (Express.js)', steps: ['Poll the official NBA API on a schedule', 'Sync the local DB', 'Keep schedules, stats, and play-by-play fresh'] }
        ],
        features: [
          { name: 'Schedule calendar', desc: 'Pick a date with react-calendar and Swiper; the calendar shows how many games are on each day' },
          { name: 'Game info', desc: 'Game video via the YouTube Data API and player stats from official NBA data, sortable by column' },
          { name: 'Live play-by-play', desc: 'Quarter-by-quarter updates rendered as a timeline on a set interval' },
          { name: 'Per-game live chat', desc: 'A separately hosted Socket.IO server powers game-room chat and loads the most recent 50 messages from the DB' }
        ],
        roles: [
          { title: 'Tech advisor role', points: [
            'Decided on and gave feedback on tech choices, weighing performance, DX, and how current each npm package was',
            'Designed the overall app structure by splitting what should be SSR vs. CSR',
            'Improved UX/DX through code review — accessibility, SEO, render speed, readability'
          ] },
          { title: 'Frontend work', points: [
            'JWT + cookie-based login/sign-up UI and auth, with nodemailer email verification',
            'Built modals that follow accessibility guidelines — focus trapping, blocking background scroll',
            'Structured Sass with mixins and color variables'
          ] },
          { title: 'Backend work', points: [
            'Hosted and ran the Socket.IO chat server separately',
            'Built the cron job that syncs the local DB from the official NBA API (Express.js)',
            'Helped design the DB schema'
          ] }
        ],
        troubles: [
          { problem: 'The project needed modals on several pages, and keyboard focus kept leaking out to elements behind them, violating accessibility guidelines', solution: 'Implemented focus trapping and blocked background scroll so focus and scrolling stayed inside the modal while it was open.' },
          { problem: 'With several people writing styles together, colors and spacing values kept duplicating and became hard to maintain', solution: 'Structured Sass mixins and color variables into a reusable set of utils.' }
        ],
        stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar', 'Prisma', 'Socket.IO'],
        stackGroups: [
          { name: 'Frontend', items: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar'] },
          { name: 'Backend', items: ['Prisma', 'Socket.IO', 'Express.js'] },
          { name: 'Development', items: ['pnpm', 'Figma', 'Notion', 'GitHub', 'Discord'] }
        ],
        outcome: [
          'Took a service with schedules, live play-by-play, chat, and auth from planning to deployment',
          'Hosted and ran the Socket.IO chat server and the NBA data sync cron in a separate repo'
        ] },
      { id: 'p3', name: 'Haemadi', badge: '📔', desc: 'A journal for recording daily emotions and reflecting on their visualized flow', period: '2024.08 ~ 2024.11', team: 'Team of 3 · 2 devs + 1 design/dev support', testAccount: 'joowon11 / joowon11!', verified: true,
        role: ['DB & component structure design', 'Code review · schedule management'],
        list: { contribution: ['PocketBase DB & component structure', 'A11y & performance via code review'], implementation: ['Major Lighthouse performance gains', 'SVGIcon sprite component'] },
        productSummary: [
          'Pick an emotion for the day and write a diary entry, then choose to get a reply from AI (Google Gemini) or from another user.',
          'Choosing an AI reply also recommends a song, movie, or book, and you check the reply in the Madi message-bottle inbox.',
          'The My Records calendar brings back past entries and replies, and My Island gives a monthly stats view of your emotional flow.'
        ],
        flow: ["Pick today's emotion and write the entry", 'Choose a reply mode', { branch: ['AI — Gemini reply + content picks', 'Anonymous — reply from another user'] }, 'Check the reply in the message-bottle inbox', 'As records build up, look back via calendar and monthly stats'],
        features: [
          { name: 'Emotion diary', desc: "Pick today's emotion and write an entry — choose a reply mode (AI/anonymous) on save" },
          { name: 'AI & user replies', desc: 'Get a Google Gemini reply plus a song/movie/book recommendation, or an anonymous reply from another user' },
          { name: 'Message-bottle inbox', desc: 'Pick one of five bottles to open and reply to' },
          { name: 'My Records · My Island', desc: 'Revisit past entries and replies on a calendar, and review monthly stats of your emotional flow' }
        ],
        roles: [
          { title: 'Tech advisor role', points: [
            'Gave feedback through code review on accessibility, SEO, render speed, and readability',
            'Managed the development schedule'
          ] },
          { title: 'Key implementation', points: [
            'Designed the PocketBase database and component structure',
            'Built an SVGIcon sprite component using <symbol>/<use>',
            'Managed state with TanStack Query and built animations with Framer Motion',
            'Used Zustand for login state (authStore) and for viewport/time-of-day background state (mediaStore, sunStore)',
            'Set up routing — lazy + Suspense for code splitting, redirects driven by global state'
          ] }
        ],
        troubles: [
          { problem: 'Lighthouse scores came in lower than expected, which mattered since the app needed to work well on mobile — image load time and waiting on PocketBase responses turned out to be the main causes', solution: 'Converted every image to webp and reworked state so components only render after a successful server response (conditional rendering to separate loading/error states). Scores rose from the 50s–60s to the 80s–90s on mobile, and from the 70s–80s to the high 90s on desktop.' },
          { problem: 'Icons built as an SVG sprite sometimes rendered too small, and icons using an SVG filter did not show up at all on iOS', solution: 'Removed a shadow effect baked into the Figma source images by moving it to CSS instead, and fixed the iOS filter issue by tweaking a few icon designs or swapping them for PNGs.' }
        ],
        stack: ['React', 'React Router', 'Swiper', 'Framer Motion', 'Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'],
        stackGroups: [
          { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Router', 'Swiper', 'Framer Motion'] },
          { name: 'State · APIs', items: ['Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'] },
          { name: 'Development', items: ['Vite', 'pnpm', 'ESLint', 'Prettier', 'Netlify', 'Figma', 'Notion', 'Discord', 'GitHub'] }
        ],
        outcome: [
          'Lighthouse score gains — mobile 50s–60s → 80s–90s, desktop 70s–80s → high 90s',
          'Took a diary service with AI replies and content recommendations from planning to deployment'
        ] }
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
    blogPosts: [
      { id: 'b1', title: 'HTTP2でパフォーマンス向上（1.1→2）', desc: 'HTTP/1.1からHTTP/2へ移行し応答速度を改善した実務記録', tags: ['HTTP', 'Nginx'] },
      { id: 'b2', title: '[React] FocusTrapでモーダルを改善', desc: 'モーダル内にキーボードフォーカスを閉じ込める実装記録', tags: ['React', 'アクセシビリティ'] },
      { id: 'b3', title: '[React][アクセシビリティ] createPortalで作るSplashScreen', desc: 'createPortalでスプラッシュスクリーンを実装しアクセシビリティも考慮', tags: ['React', 'アクセシビリティ'] }
    ],
    contactTitle: '■ チャンネル — メール · リポジトリ · ブログ · Hugging Face',
    footer: '© 2026 チャン・ジュウォン · JOOWON.EXE',
    back: '戻る',
    prev: '前のプロジェクト',
    next: '次のプロジェクト',
    dOverview: 'サービスの仕組み',
    dFeatures: '主要な体験',
    dRole: '開発段階と貢献',
    dTrouble: '主要な問題解決',
    dStack: '技術構成',
    dShots: '実サービス画面',
    dOutcome: '確認済みの成果',
    dTodo: '※ スクリーンショットは実際のサービス画面に差し替え予定です。',
    projects: [
      { id: 'p1', name: 'フェイスレビュー', badge: '🏆', desc: 'Webカメラの表情を5感情に分類し、視聴反応と動画推薦につなげるサービス', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: '初期開発4人 · リファクタリング2人', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
        flow: [
          { name: '視聴中 · リアルタイム分析パイプライン', steps: ['再生中0.5秒ごとにフレーム送信', 'OpenCVで顔領域を抽出', 'TensorFlowモデルで5感情を分類', '100進行区間・動画単位で集計'] },
          { name: '集計データの活用', steps: ['現在区間の反応・感情タイムライン表示', '個人統計の可視化', '感情類似度ベースの推薦'] }
        ],
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
      { id: 'p2', name: 'トドドン', badge: '🏀', desc: 'NBAのリアルタイム文字中継と試合別チャットを一緒に提供するプラットフォーム', period: '2025.02 ~ 2025.05', team: 'チーム4人 · 全員フルスタック', verified: true,
        role: ['技術選定 · SSR/CSR構成設計', '認証・チャットサーバー・DB同期の実装'],
        list: { contribution: ['技術選定 · SSR/CSR構成設計', 'コードレビューでアクセシビリティ・SEO改善'], implementation: ['Socket.IOチャットサーバーのホスティング', 'NBA API同期cron(Express.js)'] },
        productSummary: [
          'NBAの試合日程をカレンダーで確認でき、試合ごとに動画・選手記録・リアルタイム文字中継・チャットを提供します。',
          'リアルタイム文字中継は一定間隔でクォーターごとの進行状況を更新し、別途ホスティングしたSocket.IOサーバーが試合別チャットルームと直近50件のメッセージ取得を担当します。',
          '試合データはNBA公式APIを使うcron作業（Express.js）がローカルDBへ定期的に同期し、会員機能はJWT・Cookieベースの認証とメール認証コードで提供します。'
        ],
        flow: [
          { name: 'ユーザーフロー', steps: ['カレンダーで試合日程を確認', '試合詳細へ移動 — 動画・選手記録を確認', 'リアルタイム文字中継・チャットに参加'] },
          { name: 'リアルタイムチャット · 別途Socket.IOサーバー', steps: ['試合ルーム入場時に直近50件のメッセージを取得', 'メッセージを同じルームへリアルタイム配信'] },
          { name: 'バックグラウンド · cron（Express.js）', steps: ['NBA公式APIを定期呼び出し', 'ローカルDBを同期', '日程・記録・中継データを最新化'] }
        ],
        features: [
          { name: '試合日程カレンダー', desc: 'react-calendar・Swiperで日付を選択し、日付別の試合数をカレンダーに表示' },
          { name: '試合情報の確認', desc: 'YouTube Data APIで試合動画を、NBA公式データで選手記録をカラム別に並べ替えて提供' },
          { name: 'リアルタイム文字中継', desc: '一定間隔でクォーターごとの進行状況をタイムライン形式で表示' },
          { name: '試合別ライブチャット', desc: '別途ホスティングしたSocket.IOサーバーで試合ルームのチャットを支え、直近50件のメッセージをDBから取得' }
        ],
        roles: [
          { title: '技術顧問の役割', points: [
            '性能・開発の利便性・npmパッケージの更新状況などを考慮した技術選定の決定とフィードバック',
            'SSR/CSRで処理する範囲を分離し、アプリ全体の構造を設計',
            'コードレビューでウェブアクセシビリティ・SEO・描画速度・可読性などUX/DXを改善'
          ] },
          { title: 'フロントエンド実装', points: [
            'JWT・Cookieベースのログイン/会員登録UIと認証管理、nodemailerによるメール認証',
            'focus trapping・背景スクロール防止などアクセシビリティガイドラインに沿ったモーダル実装',
            'mixin・カラー変数などSassのutilsでスタイルを構造化'
          ] },
          { title: 'バックエンド実装', points: [
            'Socket.IOチャットサーバーを別途ホスティング・運用',
            'NBA公式APIでローカルDBを同期するcron作業を構築（Express.js）',
            'DB構造設計への参加'
          ] }
        ],
        troubles: [
          { problem: 'チームプロジェクトで複数ページにモーダルを使う必要があったが、キーボードフォーカスが背景要素に抜けてアクセシビリティガイドラインに違反する問題', solution: 'focus trappingと背景スクロール防止を実装し、モーダルが開いている間はフォーカスとスクロールをモーダル内部に制限しました。' },
          { problem: '複数人で同時にスタイルを書く中で色・余白の値が重複し、保守が難しくなる問題', solution: 'Sassのmixinとカラー変数などutilsを構造化し、再利用可能なスタイル体系を構築しました。' }
        ],
        stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar', 'Prisma', 'Socket.IO'],
        stackGroups: [
          { name: 'フロントエンド', items: ['Next.js', 'TypeScript', 'CSS Modules', 'Sass', 'Swiper', 'Day.js', 'React Calendar'] },
          { name: 'バックエンド', items: ['Prisma', 'Socket.IO', 'Express.js'] },
          { name: '開発環境', items: ['pnpm', 'Figma', 'Notion', 'GitHub', 'Discord'] }
        ],
        outcome: [
          '試合日程・リアルタイム中継・チャット・認証を備えたサービスを企画からデプロイまで完了',
          'Socket.IOチャットサーバーとNBAデータ同期cronを別リポジトリに分離し自らホスティング・運用'
        ] },
      { id: 'p3', name: 'ヘマディ', badge: '📔', desc: '一日の感情を記録し、その流れを可視化して振り返る日記サービス', period: '2024.08 ~ 2024.11', team: 'チーム3人 · 開発2人 + デザイン・開発補助1人', testAccount: 'joowon11 / joowon11!', verified: true,
        role: ['DB・コンポーネント構造設計', 'コードレビュー · 開発スケジュール管理'],
        list: { contribution: ['PocketBase DB・コンポーネント構造設計', 'コードレビューでアクセシビリティ・性能改善'], implementation: ['Lighthouseパフォーマンスの大幅改善', 'SVGIconスプライトコンポーネント'] },
        productSummary: [
          '今日の感情を選んで日記を書くと、AI（Google Gemini）か他のユーザーか、好きな方法で返信を受け取れます。',
          'AI返信を選ぶと歌・映画・本などのコンテンツもあわせて推薦され、マディのガラス瓶の郵便受けで返信を確認します。',
          'マイ記録カレンダーで過去の日記と返信を見返し、マイアイランドでは月間統計で感情の流れを総合的に分析します。'
        ],
        flow: ['今日の感情を選んで日記を書く', '返信方法を選択', { branch: ['AI — Gemini返信・コンテンツ推薦', '匿名 — 他のユーザーの返信'] }, 'ガラス瓶の郵便受けで返信を確認', '記録が溜まったらカレンダー・月間統計で振り返る'],
        features: [
          { name: '感情日記の作成', desc: '今日の感情を選んで日記を作成 — 保存時に返信方法（AI/匿名）を選択' },
          { name: 'AI・ユーザー返信', desc: 'Google Geminiによる返信と歌・映画・本のおすすめを受け取るか、他のユーザーから匿名の返信を受け取る' },
          { name: 'ガラス瓶の郵便受け', desc: '5通の手紙から1つを選んで確認し、返信できるマディのガラス瓶郵便受け' },
          { name: 'マイ記録・マイアイランド', desc: 'カレンダーで過去の日記・返信を見返し、月間統計で感情の流れを総合的に分析' }
        ],
        roles: [
          { title: '技術顧問の役割', points: [
            'コードレビューでチームメンバーにアクセシビリティ・SEO・描画速度・可読性などUX/DX向上のフィードバック',
            '開発スケジュール管理'
          ] },
          { title: '主な実装', points: [
            'PocketBaseのデータベース・コンポーネント構造設計',
            '<symbol>/<use>を活用したSVGIconスプライトコンポーネントの実装',
            'TanStack Queryによる状態管理、Framer Motionによるアニメーション実装',
            'Zustandでログイン状態（authStore）およびビューポート・時間帯別の背景状態（mediaStore、sunStore）を管理',
            'Router構成 — lazy + Suspenseによる遅延読み込み、グローバル状態に基づくredirect処理'
          ] }
        ],
        troubles: [
          { problem: 'Lighthouseで測定した性能スコアが期待より低く、モバイル対応に不利だった問題 — 画像の読み込み時間とPocketBaseのDB応答待ちが主な原因と判明', solution: '全ての画像をwebp形式に変換し、サーバー応答が成功した場合のみコンポーネントを描画するよう状態処理を改善（条件付きレンダリングでローディング・エラー状態を分離）。その結果、モバイルは50〜60点台→80〜90点台、デスクトップは70〜80点台→90点台後半までスコアが上昇しました。' },
          { problem: 'SVGスプライトでアイコンを実装したところ、一部アイコンのサイズが小さくなり、iOSではSVG filterを使ったアイコンが全く表示されない問題', solution: 'Figmaデザインに適用されていたshadow効果をCSS側に移して画像自体から取り除き、iOSでfilterが崩れるアイコンはデザインを一部修正するかPNGに置き換えました。' }
        ],
        stack: ['React', 'React Router', 'Swiper', 'Framer Motion', 'Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'],
        stackGroups: [
          { name: 'フロントエンド', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Router', 'Swiper', 'Framer Motion'] },
          { name: '状態管理 · API', items: ['Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'] },
          { name: '開発環境', items: ['Vite', 'pnpm', 'ESLint', 'Prettier', 'Netlify', 'Figma', 'Notion', 'Discord', 'GitHub'] }
        ],
        outcome: [
          'Lighthouseスコア改善 — モバイル50〜60点台→80〜90点台、デスクトップ70〜80点台→90点台後半',
          'AI返信・コンテンツ推薦を含む日記サービスを企画からデプロイまで完了'
        ] }
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
    projectGuide: '최근 작업일 순 · 핵심 기여와 대표 구현 기준', flowTitle: '서비스 작동 흐름', flowOr: '또는',
    visitBlog: 'Velog에서 전체 글 보기',
    blogLogLabel: 'DEV LOG', blogOpen: '읽기',
    hudTitle: '미션 브리핑', hudLabels: ['문제', '기여', '성과'],
    statusTitle: '기본 정보', statusLabels: { period: '기간', team: '팀 구성', links: '링크', testAccount: '테스트 계정' },
    roleLabel: '역할',
    imageLabels: {
      photo: '장주원 프로필을 표현한 픽셀 아바타',
      p1: '페이스리뷰 공식 로고',
      p2: 'NBA 경기 일정과 팀별 점수가 표시된 토도동 서비스 화면',
      p3: '답장 방식 선택 화면을 모바일과 데스크톱으로 보여주는 해마디 서비스 화면'
    },
    shotLabels: {
      p1: ['영상 위 감정 타임라인 그래프와 커스텀 재생 컨트롤이 표시된 페이스리뷰 시청 화면', '감정 분포 도넛 차트와 최근 시청 영상별 그래프가 표시된 페이스리뷰 마이페이지'],
      p2: ['날짜별 NBA 경기 일정과 팀별 점수를 조회하는 토도동 화면', '실시간 문자 중계와 경기별 채팅을 함께 제공하는 토도동 경기 화면'],
      p3: ['AI 또는 익명 사용자 중 일기 답장 방식을 선택하는 해마디 화면', '월간 감정 분포와 일기 통계를 확인하는 해마디 나의 섬 화면']
    },
    hud: {
      p1: ['클릭·시청 기록만으로는 영상 구간별 감정 반응을 알기 어려움', ['2023: 프론트엔드 개발·감정 분석 모델 직접 학습', '2026: 프론트엔드 리팩터링 전담'], ['창의설계경진대회 대상', 'facereview.net 배포']],
      p2: ['NBA 경기를 보며 팬들과 실시간으로 소통할 공간이 없는 문제', ['기술 선정·SSR/CSR 구조 설계', '인증·채팅 서버·DB 동기화 구현'], ['실시간 중계·경기별 채팅 배포', 'NBA 데이터 자동 동기화 구축']],
      p3: ['감정 기록이 쌓여도 흐름을 돌아보기 어려운 문제', ['PocketBase DB·컴포넌트 구조 설계', '코드 리뷰·성능 개선'], ['Lighthouse 모바일 50~60 → 80~90점대', 'AI 답장 일기 서비스 배포']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsPending: '실제 화면 자료 준비 중', screenshotsReady: '실제 서비스 화면 · 2026.07'
  },
  en: {
    skip: 'Skip to main content', menu: 'Menu', navLabel: 'Primary', langLabel: 'Language',
    careerChapter: 'CHAPTER · COMPANY', careerMission: 'MISSION · PROJECT', careerLog: 'LOG · CONTRIBUTIONS',
    missionFile: 'MISSION FILE', projectContribution: 'CORE CONTRIBUTION', projectImplementation: 'KEY IMPLEMENTATION', projectLoadout: 'CORE STACK', openLog: 'OPEN LOG',
    projectGuide: 'Latest work first · compared by contribution and implementation', flowTitle: 'SERVICE FLOW', flowOr: 'OR',
    visitBlog: 'See all posts on Velog',
    blogLogLabel: 'DEV LOG', blogOpen: 'Read',
    hudTitle: 'MISSION BRIEF', hudLabels: ['Problem', 'Contribution', 'Outcome'],
    statusTitle: 'PROJECT INFO', statusLabels: { period: 'PERIOD', team: 'TEAM', links: 'LINKS', testAccount: 'TEST ACCOUNT' },
    roleLabel: 'ROLE',
    imageLabels: {
      photo: 'Pixel avatar representing Jang Joowon',
      p1: 'Official Face Review logo',
      p2: 'Tododong screen showing the NBA schedule and team scores',
      p3: 'Haemadi reply-method screen shown on mobile and desktop'
    },
    shotLabels: {
      p1: ['Face Review watch screen with an emotion timeline over the video and custom playback controls', 'Face Review profile screen with an emotion-distribution donut and graphs for recently watched videos'],
      p2: ['Tododong schedule screen for browsing NBA games and scores by date', 'Tododong game screen combining live text play-by-play with per-game chat'],
      p3: ['Haemadi screen for choosing an AI or anonymous-user reply to a journal entry', 'Haemadi My Island screen showing monthly emotion distribution and journal statistics']
    },
    hud: {
      p1: ['Click and watch history alone cannot show emotional reactions by video segment', ['2023: frontend development · trained the emotion classifier', '2026: sole frontend owner of the refactoring'], ['Creative Design grand prize', 'facereview.net deployed']],
      p2: ['No place to follow an NBA game live while talking with fellow fans', ['Tech choices · SSR/CSR structure design', 'Auth, chat server & DB sync'], ['Shipped live play-by-play & per-game chat', 'Automated NBA data sync']],
      p3: ['Hard to look back on emotional flow as diary entries pile up', ['PocketBase DB & component structure', 'Code review · performance work'], ['Lighthouse mobile 50s–60s → 80s–90s', 'Shipped the AI-reply diary service']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsPending: 'Actual screen material coming soon', screenshotsReady: 'Live product screens · 2026.07'
  },
  ja: {
    skip: '本文へスキップ', menu: 'メニュー', navLabel: 'メインメニュー', langLabel: '言語選択',
    careerChapter: 'CHAPTER · 会社', careerMission: 'MISSION · プロジェクト', careerLog: 'LOG · 貢献記録',
    missionFile: 'MISSION FILE', projectContribution: '主要な貢献', projectImplementation: '代表実装', projectLoadout: '主要技術', openLog: 'LOGを開く',
    projectGuide: '最近の作業順 · 貢献と代表実装で比較', flowTitle: 'サービスの動作フロー', flowOr: 'または',
    visitBlog: 'Velogで全ての記事を見る',
    blogLogLabel: 'DEV LOG', blogOpen: '読む',
    hudTitle: 'ミッションブリーフィング', hudLabels: ['課題', '貢献', '成果'],
    statusTitle: '基本情報', statusLabels: { period: '期間', team: 'チーム構成', links: 'リンク', testAccount: 'テストアカウント' },
    roleLabel: '担当',
    imageLabels: {
      photo: 'チャン・ジュウォンを表すピクセルアバター',
      p1: 'フェイスレビューの公式ロゴ',
      p2: 'NBAの日程とチーム別スコアを表示するトドドンのサービス画面',
      p3: '返信方法の選択画面をモバイルとデスクトップで示すヘマディのサービス画面'
    },
    shotLabels: {
      p1: ['動画上の感情タイムラインとカスタム再生コントロールを表示するフェイスレビューの視聴画面', '感情分布ドーナツと最近見た動画別グラフを表示するフェイスレビューのマイページ'],
      p2: ['日付別にNBAの試合日程とスコアを確認するトドドンの画面', 'リアルタイム文字中継と試合別チャットを同時に提供するトドドンの試合画面'],
      p3: ['AIまたは匿名ユーザーからの日記返信方法を選ぶヘマディの画面', '月間の感情分布と日記統計を確認するヘマディの「私の島」画面']
    },
    hud: {
      p1: ['クリック・視聴履歴だけでは動画区間ごとの感情反応が分からない', ['2023: フロントエンド開発・感情分析モデルを直接学習', '2026: フロントエンドリファクタリング専任'], ['創意設計コンテスト大賞', 'facereview.net公開']],
      p2: ['NBAの試合を見ながらファン同士でリアルタイムに交流できる場がない課題', ['技術選定 · SSR/CSR構成設計', '認証・チャットサーバー・DB同期を実装'], ['リアルタイム中継・試合別チャットを公開', 'NBAデータの自動同期を構築']],
      p3: ['感情の記録が溜まっても流れを振り返りにくい課題', ['PocketBase DB・コンポーネント構造設計', 'コードレビュー・性能改善'], ['Lighthouseモバイル50〜60→80〜90点台', 'AI返信付き日記サービスを公開']]
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
