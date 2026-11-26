// 포트폴리오 콘텐츠 데이터 (ko / en / ja)

// 실제 프로필·프로젝트 미디어 경로입니다. 홈 이미지는 IMAGE_DIMENSIONS도 함께 갱신합니다.
const IMAGES = {
  'shot-p4-1': 'assets/projects/aiolm/web-overview.png',
  'shot-p4-2': 'assets/projects/aiolm/app-model-settings.png',
  'shot-p4-3': 'assets/projects/aiolm/app-discover.png',
  'shot-p4-4': 'assets/projects/aiolm/app-external-engine.png',
  'shot-p4-5': 'assets/projects/aiolm/app-chat.png',
  'shot-p4-6': 'assets/projects/aiolm/web-benchmark.png',
  photo: 'assets/profile.jpg',
  'thumb-p1': 'assets/projects/facereview/watch.png',
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
  'shot-p4-1': [1440, 1000],
  'shot-p4-2': [2560, 1782],
  'shot-p4-3': [2560, 1782],
  'shot-p4-4': [2560, 1782],
  'shot-p4-5': [2560, 1782],
  'shot-p4-6': [1440, 1000],
  photo: [660, 880],
  'thumb-p1': [1400, 1081],
  'shot-p1-1': [1400, 1081],
  'shot-p1-2': [1400, 1332],
  'thumb-p2': [700, 393],
  'shot-p2-1': [1920, 1080],
  'shot-p2-2': [1920, 1080],
  'thumb-p3': [700, 336],
  'shot-p3-1': [3200, 1538],
  'shot-p3-2': [3200, 1538]
};

const VIDEO_POSTERS = {
  'shot-p3-1': 'assets/projects/haemadi/reply-method-poster.png',
  'shot-p3-2': 'assets/projects/haemadi/monthly-stats-poster.png'
};

const LINKS = {
  p4: [
    { key: 'live', url: 'https://aiolm.vercel.app' },
    { key: 'desktop', url: 'https://github.com/aiolm/AioLM' },
    { key: 'web', url: 'https://github.com/aiolm/AioLm-Web' }
  ],
  p1: [
    { key: 'live', url: 'https://facereview.net' },
    { key: 'repo', url: 'https://github.com/joowon-jang/facereview-front' },
    { key: 'backend', url: 'https://github.com/joowon-jang/facereview-refactor-back' }
  ],
  p2: [
    { key: 'repo', url: 'https://github.com/FRONT-END-BOOTCAMP-PLUS-3/tododong' },
    { key: 'backend', url: 'https://github.com/FRONT-END-BOOTCAMP-PLUS-3/tododong-background' }
  ],
  p3: [
    { key: 'code', url: 'https://github.com/FRONTENDSCHOOL10/Haemadi' }
  ]
};

const LINK_LABELS = {
  ko: { live: '배포 사이트', repo: '프론트엔드 저장소', backend: '백엔드 저장소', code: '프로젝트 저장소', desktop: '데스크톱 앱 저장소', web: '웹사이트 저장소' },
  en: { live: 'Live Site', repo: 'Frontend Repo', backend: 'Backend Repo', code: 'Project Repo', desktop: 'Desktop App Repo', web: 'Website Repo' },
  ja: { live: '公開サイト', repo: 'フロントエンドリポジトリ', backend: 'バックエンドリポジトリ', code: 'プロジェクトリポジトリ', desktop: 'デスクトップアプリのリポジトリ', web: 'Webサイトのリポジトリ' }
};

const BLOG_POSTS = [
  { id: 'b1', date: '2025.10.27', url: 'https://velog.io/@juwon98/HTTP1.1-to-HTTP2' },
  { id: 'b2', date: '2025.09.21', url: 'https://velog.io/@juwon98/createPortal사용과-FocusTrap으로-모달창-개선' },
  { id: 'b3', date: '2024.11.07', url: 'https://velog.io/@juwon98/React-createPortal-SplashScreen' }
];

// 데스크톱 앱과 공개 벤치마크 웹을 하나의 개인 프로젝트로 소개합니다.
const AIOLM = {
  ko: {
    id: 'p4', name: 'AioLM', period: '2026.08 ~ 진행 중', team: '개인 프로젝트 · 1명',
    desc: 'llama.cpp·vLLM·MLX와 로컬 OpenAI 호환 외부 엔진을 하나의 작업 공간에서 실행·대화·벤치마크하고, Cold Prompt 8지표 실측 결과를 4개 언어 웹에서 검색·비교하는 로컬 LLM 데스크톱 앱·웹 서비스(v0.5.2)입니다.',
    role: ['기획 · 디자인 시스템 · 데스크톱 앱(Tauri 2·Rust·React) · 웹 풀스택(Next.js·PostgreSQL) · 배포'],
    screenshotsMeta: 'v0.5.2 기준 · 공개 웹 실제 캡처 2종 + 공식 네이티브 Windows 앱 캡처 4종',
    list: {
      contributionLabel: '개발 범위',
      contribution: [
        '멀티엔진 데스크톱 앱(React 19·Tauri 2·Rust) 및 로컬 API 서버',
        '4개 언어 제품·가이드 웹 및 검색 중심 벤치마크 탐색기(Next.js 15·PostgreSQL)',
        '앱–웹 공용 계약(@aiolm/benchmark-contracts) 및 Win·macOS·Linux 릴리스 자동화'
      ],
      implementation: [
        '엔진 중립 어댑터 · 3단계 외부 엔진 연결 · 실행 전 VRAM·RAM 예상',
        'Cold Prompt 8지표 서빙 벤치마크(openai-chat-serving@5) · 웹 프로필 재현',
        '스트리밍 채팅(PP·TG·TTFT) · 문서 검색 · MCP·AGENTS.md·스킬'
      ]
    },
    motivation: { title: '개발 배경과 목적', points: [
      'AI에 대한 관심으로 여러 기기를 자비로 구입하고, 다양한 환경에서 LLM의 추론과 파인튜닝을 배워왔습니다.',
      '근무처의 다른 팀과 기술 커뮤니티에서 성능 정보가 부족해 기기 구매나 설정에 어려움을 겪는 사람들을 보았습니다.',
      '실측 결과를 공유해 구매와 설정 판단을 돕고자 AioLM을 개발·공개했으며, 현재도 개선하고 있습니다.'
    ] },
    outcomeTitle: '배포 및 운영 현황',
    outcome: [
      '데스크톱 v0.5.2 크로스플랫폼 릴리스 및 SHA-256 체크섬 제공 — Windows x64(EXE/MSI), macOS 13.3+(Apple Silicon/Intel DMG), Linux x86_64(Ubuntu 24.04+ DEB/AppImage)',
      '4개 언어(한국어·영어·일본어·중국어) 제품·설치·엔진 가이드 및 계정 없는 공개 벤치마크 탐색기(aiolm.vercel.app) 운영',
      '앱–웹 단일 계약(@aiolm/benchmark-contracts 0.15.0, OpenAPI·JSON Schema) 기반 Vitest · Rust cargo test · PostgreSQL 통합 테스트 구축'
    ],
    productSummary: [
      '데스크톱 앱 (AioLM v0.5.2): 추론 엔진 자체를 구현하지 않고 llama.cpp·vLLM(vllm-metal)·MLX와 로컬 OpenAI 호환 외부 엔진을 하나의 작업 공간으로 연결하는 엔진 중립 GUI 어댑터입니다. Hugging Face 모델 탐색·다운로드부터 실행 전 메모리 예상, 스트리밍 채팅·문서 검색·MCP 도구, 독립 로컬 API 서버까지 제공합니다.',
      'Cold Prompt 벤치마크와 공개 비교 웹: 연결된 모든 엔진에 동일한 스트리밍 채팅 워크로드(openai-chat-serving@5, 최대 128토큰)로 TTFT·Prefill·Decode·TPOT 등 8개 지표를 측정합니다. 계정 없이 브라우저 인증(Turnstile)으로 공유한 결과를 aiolm.vercel.app에서 모델·엔진·하드웨어·측정 조건별로 검색하고 동일 동작점 기준 최대 3건을 비교합니다.',
      '앱–웹 계약과 설정 재현: 앱과 웹이 공용 패키지(@aiolm/benchmark-contracts)의 OpenAPI·JSON Schema를 공유해 측정 데이터와 검증 규칙을 일치시켰으며, 공개 벤치마크 결과의 실행 설정을 데스크톱 앱의 프로필로 바로 가져와 재현할 수 있습니다.'
    ],
    flow: [
      { name: '로컬 모델 탐색 · 실행 · 활용', steps: [
        'Hugging Face 전 형식 검색 · 분할 샤드/Safetensors 선택 다운로드',
        '런타임 → 프로필 → 옵션 설정 및 실행 전 VRAM·RAM 예상 확인',
        '내장(llama.cpp·vLLM·MLX) 또는 3단계 자동 연결 외부 엔진 실행',
        { branch: ['채팅 · 프로젝트 문서 검색 · MCP · 스킬 활용', '단일 루프백 로컬 API 서버(OpenAI · Anthropic) 연동'] }
      ] },
      { name: 'Cold Prompt 벤치마크 · 공개 비교', steps: [
        '실행 nonce·요청별 고유 접두부로 최대 128토큰 스트리밍 측정',
        'TTFT·Prefill·Decode·TPOT 등 8개 지표 기록 · CSV/Excel 내보내기',
        'Turnstile 인증 후 계정 없이 게시 · 복구 파일/앱 핸드오프로 소유자 관리',
        '웹에서 동일 동작점 기준 최대 3건 비교 · 앱 프로필로 실행 설정 가져오기'
      ] }
    ],
    features: [
      { name: '엔진 중립 모델 실행·리소스 예상', desc: 'llama.cpp, vLLM(vllm-metal), MLX 기본 지원과 로컬 OpenAI v1 외부 엔진 3단계 자동 연결(찾기 → 후보 검사 → 모델 사전 고정 없이 연결)을 제공합니다. 런타임 선택 → 프로필 선택 → 옵션 조정 흐름에서 GGUF 텐서 헤더 기반 VRAM·실행 보조 RAM·RAM/SSD 오프로드를 실행 전 계산합니다.' },
      { name: 'Hugging Face 탐색·통합 다운로드', desc: '모든 저장소 형식의 인기 급상승순 검색과 OS 저장 HF 토큰(제한 저장소)을 지원합니다. GGUF 분할 샤드와 HF/MLX Safetensors 가중치별 묶음 다운로드, 상단 다운로드 팝오버의 동시 전송 격리·일시중지/이어받기·SHA-256 검증, 파일 단위 증분 업데이트를 제공합니다.' },
      { name: '스트리밍 채팅·문서 검색·도구 연동', desc: '턴별 TTFT·PP·TG·캐시 토큰 지표 표시, 응답/로딩 중 후속 메시지 대기열·전환, 자동 펼침 추론 블록을 지원합니다. 프로젝트 단위 임베딩/키워드 문서 검색과 멀티모달 첨부(이미지·오디오 전사·비디오 프레임 샘플링), 개인 AGENTS.md·스킬·MCP 도구(네이티브 OS 승인)를 연결합니다.' },
      { name: '독립 로컬 API 서버', desc: '모델 로드와 독립적으로 동작하는 단일 루프백(127.0.0.1) 리스너에서 OpenAI 호환(/v1/models, chat/completions, completions, embeddings, responses, audio/*)과 Anthropic Messages(/v1/messages)를 동시 제공합니다. 재발급 가능한 영속 API 키, Host 검증(421), 64개 동시 연결 제한을 적용했습니다.' },
      { name: 'Cold Prompt 8지표 벤치마크', desc: 'openai-chat-serving@5 단일 방식으로 워밍업 없이 실행 nonce와 요청별 고유 접두부를 붙여 입력 재사용을 차단합니다. 입력 1K–1M UTF-8 바이트 × 동시성 1/2/4/8 조합에서 TTFT·Prefill·Decode·TPOT·토큰/바이트 처리량·E2E·소유 프로세스 최대 RAM 8개 지표를 기록하고 CSV/Excel/Markdown 내보내기를 지원합니다.' },
      { name: '4개 언어 웹·검색 중심 비교·설정 재현', desc: '한국어·영어·일본어·중국어 제품·설치 가이드와 검색 우선 벤치마크 탐색기를 제공합니다. 모델·엔진·하드웨어·측정 4개 그룹 상세 필터와 동일 (입력 바이트, 동시성, 출력 상한) 동작점 기준 최대 3건 비교, SHA-256 기반 Hugging Face 메타데이터 조회, 공개 결과의 앱 프로필 가져오기를 지원합니다.' }
    ],
    rolesTitle: '영역별 설계·구현',
    roles: [
      { title: '데스크톱 프론트엔드 · 디자인 시스템', points: [
        'React 19·TypeScript·Tailwind CSS 4로 채팅·프로젝트·라이브러리·찾아보기·추론 엔진 관리·벤치마크·API/MCP 서버·설정 작업 공간 구현',
        'Orchid Periwinkle 라이트/다크 디자인 시스템, 상단 다운로드·모델 로딩 팝오버, 최대화 반응형 레이아웃 및 4개 언어 i18n 구축'
      ] },
      { title: '네이티브 백엔드 · 엔진 어댑터 · 로컬 API (Tauri 2 · Rust)', points: [
        'llama.cpp·vLLM·MLX 프로세스 수명 주기 관리, 실행 파일 헤더·--help 파싱 기반 외부 엔진 3단계 자동 연결 및 네이티브 OS 승인 게이트 구현',
        'GGUF 텐서 헤더 기반 실행 전 메모리 추정기, OpenAI·Anthropic 통합 루프백 API 게이트웨이 및 헤드리스 CLI(aiolm-cli) 개발'
      ] },
      { title: '웹사이트 · 벤치마크 탐색기 · 데이터 계층 (Next.js 15 · PostgreSQL)', points: [
        'Next.js App Router 기반 4개 언어 정적 제품·가이드 페이지와 검색 우선 벤치마크 탐색기(FILTER_DEFINITIONS, 커서 페이지네이션, 3건 비교, SHA-256 HF 조회) 구현',
        'PostgreSQL 스키마·마이그레이션(016)·pg_cron 보존 정책 및 Cloudflare Turnstile·HMAC 기반 계정 없는 소유자 관리(/manage) 구축'
      ] },
      { title: '공용 계약 · 크로스플랫폼 배포 · 품질 검증', points: [
        '앱·웹 단일 계약 패키지(@aiolm/benchmark-contracts 0.15.0, OpenAPI·JSON Schema)로 스키마·검증·복구 인코딩 규칙 통합',
        'GitHub Actions로 Windows(EXE/MSI)·macOS(Apple Silicon/Intel DMG)·Linux(DEB/AppImage) 빌드와 SHA-256 체크섬 배포, Vitest·cargo test·PostgreSQL 통합 테스트 체계 구축'
      ] }
    ],
    troublesTitle: '핵심 설계 판단과 문제 해결',
    troubles: [
      { problem: '엔진마다 상이한 CLI 플래그·프로토콜과 외부 엔진 실행에 따른 보안·상태 경합 문제', solution: '실행 파일 바이너리 헤더를 검사해 실행 가능 후보만 선별하고 --help 출력에서 옵션 스키마를 동적 생성했습니다. 도움말·MCP·문서 접근 전 네이티브 OS 승인 게이트와 체크섬 검증을 두어 첫 실행 시 실제 채팅·스트리밍 응답을 확인한 뒤 연결하며, 다운로드·로딩·벤치마크 백그라운드 작업을 격리해 UI 블로킹을 방지했습니다.' },
      { problem: '모델 파일 크기만으로 실행 전 메모리 부족(OOM)과 GPU·RAM·SSD 오프로드를 판단하기 어려운 문제', solution: 'Rust에서 GGUF 텐서 헤더를 직접 파싱해 Full-Attention·MoE·Sliding-Window·하이브리드(Qwen3.5/Qwen4) 레이어별 KV 캐시·어텐션 마스크·순환 상태를 계산했습니다. VRAM·실행 보조 RAM·RAM 오프로드·SSD 오프로드를 정확도 등급과 함께 실행 전 실시간 표시하고, 통합 메모리 GPU의 물리 풀 중복 합산을 방지했습니다.' },
      { problem: '캐시 재사용·조건 불일치·토큰 미보고로 인한 벤치마크 왜곡과 앱–웹 스키마 불일치 문제', solution: '@aiolm/benchmark-contracts 패키지를 단일 원본으로 두고 openai-chat-serving@5 Cold Prompt 방식(실행 nonce + 요청별 고유 접두부, 워밍업 없음, 최대 128토큰)으로 일원화했습니다. 토큰 사용량은 첫 배치에서 선택 협상하고 미보고 지표는 추정·0 처리 대신 null로 유지하며, 웹에서는 동일한 (입력 바이트, 동시성, 출력 상한) 동작점 기준으로만 정렬·비교하도록 강제했습니다.' },
      { problem: '계정 체계 없이 벤치마크를 공개하면서도 스팸 차단과 작성자 수정·삭제 권한을 보장해야 하는 문제', solution: '업로드 세션에 Cloudflare Turnstile 검증과 HMAC 서명 토큰을 적용해 봇 제출을 차단하고, 게시 후에는 OS 자격 증명 저장소·복구 파일·일회성 앱 핸드오프(/manage)로 결과별 30분 관리 세션을 발급하도록 설계했습니다. 복사한 복구 코드는 60초 뒤 클립보드에서 자동 삭제됩니다.' }
    ],
    stack: ['React 19', 'Tauri 2 · Rust', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'Python', 'llama.cpp · vLLM · MLX', 'OpenAPI · JSON Schema'],
    stackGroups: [
      { name: '데스크톱 앱', items: ['React 19', 'TypeScript', 'Tauri 2 · Rust', 'Vite 7', 'Tailwind CSS 4', 'Vitest'] },
      { name: '추론 엔진 · 프로토콜', items: ['llama.cpp', 'vLLM · vllm-metal', 'MLX · mlx-vlm', 'Python', 'OpenAI · Anthropic API', 'MCP'] },
      { name: '웹사이트 · 데이터', items: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Cloudflare Turnstile', 'Vercel'] },
      { name: '공용 계약 · 배포', items: ['@aiolm/benchmark-contracts', 'OpenAPI · JSON Schema', 'GitHub Actions', 'SHA-256 Checksums'] }
    ],
  },
  en: {
    id: 'p4', name: 'AioLM', period: '2026.08 – Present', team: 'Solo project · 1 person',
    desc: 'An engine-neutral local LLM desktop GUI adapter (v0.5.2) and 4-language benchmark web service connecting llama.cpp, vLLM, MLX, and local OpenAI-compatible external engines across model execution, document chat, local API serving, and 8-metric Cold Prompt comparisons.',
    role: ['Product planning · design system · desktop app (Tauri 2 · Rust · React) · full-stack web (Next.js · PostgreSQL) · release'],
    screenshotsMeta: 'Based on v0.5.2 · 2 live public website captures + 4 official native Windows app captures',
    list: {
      contributionLabel: 'Development scope',
      contribution: [
        'Built the multi-engine desktop app (React 19 · Tauri 2 · Rust) & local API server',
        'Built the 4-language product/guide site & search-first benchmark explorer (Next.js 15 · PostgreSQL)',
        'Maintained shared app–web contracts (@aiolm/benchmark-contracts) & Win/macOS/Linux release pipelines'
      ],
      implementation: [
        'Engine-neutral adapter · 3-step external engine connect · pre-load VRAM/RAM estimates',
        'Cold Prompt 8-metric serving benchmark (openai-chat-serving@5) & profile import',
        'Streaming chat (PP · TG · TTFT) · document retrieval · MCP · AGENTS.md · skills'
      ]
    },
    motivation: { title: 'Why I built it', points: [
      'My interest in AI led me to purchase several devices myself and study LLM inference and fine-tuning across different environments.',
      'I saw people in other teams at work and in technical communities struggling to choose hardware and settings because performance information was scarce.',
      'I built and released AioLM to share measured results for hardware and setup decisions, and continue to improve it.'
    ] },
    outcomeTitle: 'Release & operation',
    outcome: [
      'Cross-platform v0.5.2 desktop releases with SHA-256 checksums: Windows x64 (EXE/MSI), macOS 13.3+ (Apple Silicon & Intel DMG), Linux x86_64 (Ubuntu 24.04+ DEB/AppImage)',
      '4-language (ko/en/ja/zh) product/install/engine guides and anonymous public benchmark explorer running at aiolm.vercel.app',
      'Unified app–web wire contract (@aiolm/benchmark-contracts 0.15.0, OpenAPI & JSON Schema) backed by Vitest, Rust cargo test, and PostgreSQL integration suites'
    ],
    productSummary: [
      'Desktop app (AioLM v0.5.2): An engine-neutral GUI adapter (not an inference engine itself) uniting llama.cpp, vLLM (vllm-metal), MLX, and external local OpenAI-compatible engines in one workspace—covering Hugging Face model discovery, pre-load memory estimation, streaming chat with document search and MCP tools, and an independent local API server.',
      'Cold Prompt benchmark & public web explorer: Measures eight client-observed and engine-reported metrics (including TTFT, Prefill, Decode, and TPOT) across connected engines using one capped streaming workload (openai-chat-serving@5, up to 128 output tokens). Anonymous Turnstile-verified results can be searched on aiolm.vercel.app by model, engine, hardware, and conditions, and compared up to three at a time at the same operating point.',
      'Shared app–web contracts & profile replay: Both repositories share OpenAPI and JSON Schema rules via @aiolm/benchmark-contracts, allowing users to import a public benchmark’s recorded launch settings directly into a desktop profile for local reproduction.'
    ],
    flow: [
      { name: 'Local discovery, execution & workspace', steps: [
        'Search all Hugging Face formats · download GGUF shards or Safetensors bundles',
        'Choose runtime → profile → options and inspect pre-load VRAM/RAM estimates',
        'Launch built-in (llama.cpp · vLLM · MLX) or 3-step auto-connected external engines',
        { branch: ['Chat · project document retrieval · MCP & skills', 'Loopback local API server (OpenAI & Anthropic)'] }
      ] },
      { name: 'Cold Prompt benchmark & public comparison', steps: [
        'Send 128-token capped streaming workload with run nonce & unique request prefixes',
        'Record 8 metrics (TTFT · Prefill · Decode · TPOT · E2E · RAM) & export CSV/Excel',
        'Publish without accounts via Turnstile · manage via recovery file or app handoff',
        'Compare up to 3 runs at the same operating point · import settings into app profile'
      ] }
    ],
    features: [
      { name: 'Engine-neutral execution & memory estimation', desc: 'Supports built-in llama.cpp, vLLM (vllm-metal), MLX, and 3-step automatic connection of local OpenAI v1 external engines (Find → Check → Connect without pre-binding a model). Parses GGUF tensor headers in Rust to preview VRAM, runtime RAM, and RAM/SSD offload across Choose runtime → Choose profile → Adjust options.' },
      { name: 'Hugging Face discovery & unified downloads', desc: 'Searches all repository formats sorted by Trending (with OS-stored HF tokens for gated repos). Downloads split GGUF shards and per-weight HF/MLX Safetensors bundles, manages concurrent transfers with pause/resume/SHA-256 verification in the header Downloads popover, and supports file-level incremental model updates.' },
      { name: 'Streaming chat, RAG & tool integration', desc: 'Displays per-turn TTFT, PP, TG, and cached-token metrics, supports message queueing/steering while streaming or loading, and auto-expands reasoning blocks. Connects project-scoped embedding/keyword document search, multimodal inputs (images, audio transcription, video frame sampling), personal AGENTS.md, skills, and OS-approved MCP tools.' },
      { name: 'Independent local API server', desc: 'Serves OpenAI-compatible (/v1/models, chat/completions, completions, embeddings, responses, audio/*) and Anthropic Messages (/v1/messages) routes over a single loopback (127.0.0.1) listener independent of model load state—with a persistent rotatable API key, Host validation (421), and a 64-connection cap.' },
      { name: 'Cold Prompt 8-metric serving benchmark', desc: 'Uses the single openai-chat-serving@5 method with no workload warmup, a fresh run nonce, and per-request prefixes to block input reuse. Measures 1K–1M UTF-8 input bytes × concurrency 1/2/4/8 across eight metrics (TTFT, Prefill, Decode, TPOT, token/byte throughput, E2E, owned-process peak RAM) with CSV/Excel/Markdown export.' },
      { name: '4-language web explorer & profile replay', desc: 'Provides Korean, English, Japanese, and Chinese guides alongside a search-first benchmark explorer. Supports 4-group detailed filters (Model, Inference engine, Hardware, Measurement), side-by-side comparison of up to 3 runs at matching (input_bytes, concurrency, cap) points, SHA-256 Hugging Face catalog lookup, and one-click app profile import.' }
    ],
    rolesTitle: 'Architecture & implementation',
    roles: [
      { title: 'Desktop frontend & design system', points: [
        'Built workspaces (Chat, Projects, Library, Discover, Inference engines, Benchmark, API/MCP servers, Settings) in React 19, TypeScript, and Tailwind CSS 4',
        'Implemented the Orchid Periwinkle light/dark design system, header Downloads and Model loading popovers, responsive maximized layouts, and 4-locale i18n'
      ] },
      { title: 'Native backend, engine adapters & local API (Tauri 2 · Rust)', points: [
        'Engineered engine process lifecycles, binary-header and --help parsing for 3-step external engine connection, and native OS approval gates for help, MCP, and documents',
        'Implemented the GGUF pre-load resource estimator, unified OpenAI/Anthropic loopback gateway, and headless CLI (aiolm-cli)'
      ] },
      { title: 'Website, benchmark explorer & data layer (Next.js 15 · PostgreSQL)', points: [
        'Built 4-language static product/guide pages and the search-first benchmark explorer (FILTER_DEFINITIONS, cursor pagination, 3-run comparison, SHA-256 HF lookup)',
        'Designed the PostgreSQL schema, migrations through 016, pg_cron retention jobs, and account-free owner management (/manage) with Turnstile and HMAC sessions'
      ] },
      { title: 'Shared contracts, cross-platform releases & testing', points: [
        'Unified app and website schemas, validation, and recovery-code encoding via @aiolm/benchmark-contracts 0.15.0 (OpenAPI & JSON Schema)',
        'Set up GitHub Actions cross-platform packaging (Windows EXE/MSI, macOS Apple Silicon/Intel DMG, Linux DEB/AppImage with SHA-256 checksums) plus Vitest, cargo test, and PostgreSQL integration tests'
      ] }
    ],
    troublesTitle: 'Key engineering decisions',
    troubles: [
      { problem: 'Diverse engine CLI flags, protocols, and OS security/locking risks when connecting arbitrary external engines', solution: 'Inspected executable binary headers to list only launchable binaries and dynamically generated option schemas from --help output. Enforced native OS approval gates and checksum checks before executing help, MCP, or document access, verified real chat/streaming before registering, and isolated download, load, and benchmark background jobs.' },
      { problem: 'File size alone cannot predict pre-load OOM or RAM/SSD offload across heterogeneous GPU and unified-memory hosts', solution: 'Parsed GGUF tensor headers in Rust to model KV caches, attention masks, and recurrent state across Full-Attention, MoE, Sliding-Window, and hybrid (Qwen3.5/Qwen4) architectures—reporting VRAM, runtime RAM, RAM offload, and SSD offload with accuracy grades without double-counting shared-memory pools.' },
      { problem: 'Benchmark distortion from prompt cache reuse, mismatched workloads, and missing usage counters across engines', solution: 'Standardized both app and web on @aiolm/benchmark-contracts and openai-chat-serving@5 Cold Prompt runs (fresh run nonce + unique per-request prefix, no warmup, max 128 output tokens). Negotiated stream usage on the first batch while keeping unreported token metrics null rather than guessing, and restricted web comparisons to exact (input_bytes, concurrency, cap) operating points.' },
      { problem: 'Preventing spam and allowing authors to edit or delete published benchmarks without requiring user accounts', solution: 'Protected upload sessions with Cloudflare Turnstile and HMAC-signed permits, and issued result-scoped 30-minute management sessions (/manage) via OS credential storage, recovery files, or a single-use app handoff (auto-clearing copied recovery codes from the clipboard after 60 seconds).' }
    ],
    stack: ['React 19', 'Tauri 2 · Rust', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'Python', 'llama.cpp · vLLM · MLX', 'OpenAPI · JSON Schema'],
    stackGroups: [
      { name: 'Desktop app', items: ['React 19', 'TypeScript', 'Tauri 2 · Rust', 'Vite 7', 'Tailwind CSS 4', 'Vitest'] },
      { name: 'Inference engines & protocols', items: ['llama.cpp', 'vLLM · vllm-metal', 'MLX · mlx-vlm', 'Python', 'OpenAI · Anthropic API', 'MCP'] },
      { name: 'Website & data', items: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Cloudflare Turnstile', 'Vercel'] },
      { name: 'Contracts & delivery', items: ['@aiolm/benchmark-contracts', 'OpenAPI · JSON Schema', 'GitHub Actions', 'SHA-256 Checksums'] }
    ],
  },
  ja: {
    id: 'p4', name: 'AioLM', period: '2026.08 ～ 継続開発中', team: '個人開発 · 1人',
    desc: 'llama.cpp・vLLM・MLXおよびローカルOpenAI互換の外部エンジンを一つの作業空間で実行・対話・計測し、Cold Prompt 8指標の実測結果を4言語Webで検索・比較できるローカルLLMデスクトップアプリ・Webサービス（v0.5.2）です。',
    role: ['企画・デザインシステム・デスクトップアプリ（Tauri 2・Rust・React）・Webフルスタック（Next.js・PostgreSQL）・公開運用'],
    screenshotsMeta: 'v0.5.2基準 · 公開Web実画面2点 + 公式ネイティブWindowsアプリ画面4点',
    list: {
      contributionLabel: '開発範囲',
      contribution: [
        'マルチエンジン対応デスクトップアプリ（React 19・Tauri 2・Rust）とローカルAPIサーバー',
        '4言語の製品・ガイドWebと検索中心のベンチマーク探索画面（Next.js 15・PostgreSQL）',
        'アプリ–Web共通契約（@aiolm/benchmark-contracts）とWin/macOS/Linuxリリース自動化'
      ],
      implementation: [
        'エンジン中立アダプター · 3段階の外部エンジン接続 · 起動前VRAM/RAM見積もり',
        'Cold Prompt 8指標ベンチマーク（openai-chat-serving@5）とWeb設定インポート',
        'ストリーミング対話（PP・TG・TTFT） · 文書検索 · MCP・AGENTS.md・スキル'
      ]
    },
    motivation: { title: '開発の背景と目的', points: [
      'AIへの関心から複数の機器を自費で購入し、さまざまな環境でLLMの推論とファインチューニングを学んできました。',
      '勤務先の他チームや技術コミュニティには、性能情報の不足から機器購入や設定に悩む人がいました。',
      '実測結果を共有し、購入・設定の判断に役立てられるようAioLMを開発・公開し、現在も改善しています。'
    ] },
    outcomeTitle: 'リリース・運用状況',
    outcome: [
      'デスクトップv0.5.2のクロスプラットフォーム配布とSHA-256チェックサム提供 — Windows x64（EXE/MSI）、macOS 13.3+（Apple Silicon/Intel DMG）、Linux x86_64（Ubuntu 24.04+ DEB/AppImage）',
      '4言語（韓国語・英語・日本語・中国語）の製品・導入・エンジンガイドおよびアカウント不要の公開ベンチマーク探索サイト（aiolm.vercel.app）を運用',
      'アプリ–Web共通契約（@aiolm/benchmark-contracts 0.15.0、OpenAPI・JSON Schema）とVitest・Rust cargo test・PostgreSQL統合テストを整備'
    ],
    productSummary: [
      'デスクトップアプリ（AioLM v0.5.2）：推論エンジン自体を実装するのではなく、llama.cpp・vLLM（vllm-metal）・MLXとローカルOpenAI互換の外部エンジンを一つの画面にまとめるエンジン中立のGUIアダプターです。Hugging Faceの探索・取得、起動前メモリー見積もり、文書検索やMCPツールを備えたチャット、独立ローカルAPIサーバーを提供します。',
      'Cold Promptベンチマークと公開比較Web：接続した全エンジンに同一のストリーミングチャット負荷（openai-chat-serving@5、最大128トークン）を送り、TTFT・Prefill・Decode・TPOTなど8指標を計測します。アカウント不要のTurnstile認証で共有された結果をaiolm.vercel.appでモデル・エンジン・ハードウェア・条件別に検索し、同一動作点で最大3件を比較できます。',
      'アプリ–Web契約と設定再現：@aiolm/benchmark-contractsを通じてOpenAPI・JSON Schemaを共有してデータ検証を統一し、公開ベンチマークの実行設定をデスクトップアプリのプロファイルへ直接取り込んで再現できるようにしました。'
    ],
    flow: [
      { name: 'ローカルモデルの探索・実行・活用', steps: [
        'Hugging Face全形式検索 · 分割GGUF/Safetensorsバンドルを選択取得',
        'ランタイム → プロファイル → オプション設定と起動前VRAM/RAM見積もり',
        '組み込み（llama.cpp・vLLM・MLX）または3段階自動接続の外部エンジンを起動',
        { branch: ['対話 · プロジェクト文書検索 · MCP・スキル活用', '単一ループバックのローカルAPI（OpenAI・Anthropic）連携'] }
      ] },
      { name: 'Cold Promptベンチマーク・公開比較', steps: [
        '実行nonce・リクエスト固有プレフィックス付きで最大128トークン計測',
        'TTFT・Prefill・Decode・TPOTなど8指標を記録 · CSV/Excel出力',
        'Turnstile認証でアカウント不要公開 · 復旧ファイル/アプリ連携で管理',
        'Webで同一動作点基準の最大3件比較 · アプリへ実行設定を取り込み'
      ] }
    ],
    features: [
      { name: 'エンジン中立のモデル実行・メモリー見積もり', desc: 'llama.cpp・vLLM（vllm-metal）・MLXの標準対応に加え、ローカルOpenAI v1外部エンジンの3段階自動接続（検索 → 候補確認 → モデル事前固定なしで接続）に対応。「ランタイム → プロファイル → オプション調整」の中でGGUFテンソルヘッダーからVRAM・補助RAM・RAM/SSDオフロードを起動前に算出します。' },
      { name: 'Hugging Face探索・統合ダウンロード', desc: '全リポジトリ形式のTrending順検索とOS資格情報保存のHFトークン（限定リポジトリ）に対応。分割GGUFシャードやHF/MLX Safetensorsの重み別バンドル取得、ヘッダーのダウンロードポップオーバーでの並列制御（一時停止・再開・SHA-256検証）、ファイル単位の差分更新を提供します。' },
      { name: 'ストリーミング対話・文書検索・ツール連携', desc: 'ターン別のTTFT・PP・TG・キャッシュトークン表示、生成中・読込中の後続メッセージキュー/切替、推論ブロック自動展開を備えます。プロジェクト単位の埋め込み/キーワード文書検索、マルチモーダル添付（画像・音声文字起こし・動画フレーム抽出）、個人AGENTS.md・スキル・OS承認付きMCPツールを連携します。' },
      { name: '独立したローカルAPIサーバー', desc: 'モデル読込状態と独立して動作する単一ループバック（127.0.0.1）リスナーでOpenAI互換（/v1/models、chat/completions、completions、embeddings、responses、audio/*）とAnthropic Messages（/v1/messages）を提供。再発行可能な永続APIキー、Host検証（421）、64並列接続上限を適用しています。' },
      { name: 'Cold Prompt 8指標ベンチマーク', desc: 'openai-chat-serving@5単一方式でウォームアップを省き、実行nonceとリクエスト別プレフィックスで入力再利用を防ぎます。1K–1M UTF-8バイト × 同時実行1/2/4/8の組み合わせでTTFT・Prefill・Decode・TPOT・トークン/バイトスループット・E2E・所有プロセス最大RAMの8指標を記録し、CSV/Excel/Markdownへ出力します。' },
      { name: '4言語Web・検索中心比較・設定再現', desc: '日本語・韓国語・英語・中国語のガイドと検索優先のベンチマーク探索画面を提供。モデル・エンジン・ハードウェア・測定の4群詳細フィルター、同一（入力バイト・同時実行数・出力上限）動作点での最大3件比較、SHA-256照合によるHugging Face情報取得、公開結果からのアプリプロファイル読込に対応します。' }
    ],
    rolesTitle: '領域別の設計・実装',
    roles: [
      { title: 'デスクトップフロントエンド・デザインシステム', points: [
        'React 19・TypeScript・Tailwind CSS 4でチャット・プロジェクト・ライブラリ・探索・推論エンジン管理・ベンチマーク・API/MCPサーバー・設定画面を構築',
        'Orchid Periwinkleライト/ダークデザインシステム、ヘッダーのダウンロード/読込ポップオーバー、最大化レスポンシブ配置、4言語i18nを実装'
      ] },
      { title: 'ネイティブバックエンド・エンジンアダプター・ローカルAPI（Tauri 2・Rust）', points: [
        '各エンジンのプロセスライフサイクル制御、実行ファイルヘッダーと--help解析による外部エンジン3段階自動接続、OSネイティブ承認ゲートを実装',
        'GGUFヘッダー解析による起動前メモリー見積もり、OpenAI・Anthropic統合ループバックゲートウェイ、ヘッドレスCLI（aiolm-cli）を開発'
      ] },
      { title: 'Webサイト・ベンチマーク探索画面・データ層（Next.js 15・PostgreSQL）', points: [
        'Next.js App Routerによる4言語静的ページ・ガイドと検索優先のベンチマーク探索（FILTER_DEFINITIONS、カーソルページネーション、3件比較、SHA-256 HF照合）を構築',
        'PostgreSQLスキーマ・マイグレーション（016まで）・pg_cron保持ポリシーとTurnstile/HMACベースのアカウント不要所有者管理（/manage）を実装'
      ] },
      { title: '共通契約・クロスプラットフォーム配布・品質検証', points: [
        'アプリ・Web共通パッケージ（@aiolm/benchmark-contracts 0.15.0、OpenAPI・JSON Schema）でスキーマと復旧コード規則を一元化',
        'GitHub ActionsでWindows（EXE/MSI）・macOS（Apple Silicon/Intel DMG）・Linux（DEB/AppImage）とSHA-256チェックサムを自動配布し、Vitest・cargo test・PostgreSQL統合テストを構築'
      ] }
    ],
    troublesTitle: '主な設計判断と課題解決',
    troubles: [
      { problem: 'エンジンごとに異なるCLIフラグ・プロトコルと外部エンジン実行時のセキュリティ・競合問題', solution: '実行ファイルのバイナリヘッダーから起動可能な候補のみを選別し、--help出力からオプションスキーマを動的に生成しました。ヘルプ・MCP・文書アクセス前にOSネイティブ承認ゲートとチェックサム検証を挟み、初回起動時の実対話/ストリーミング確認後に接続、バックグラウンド処理も分離してUIの競合を防止しました。' },
      { problem: 'モデルファイルサイズだけでは起動前のOOMやGPU・RAM・SSDオフロード量を判断しにくい問題', solution: 'RustでGGUFテンソルヘッダーを解析し、Full-Attention・MoE・Sliding-Window・ハイブリッド（Qwen3.5/Qwen4）各層のKVキャッシュ・アテンションマスク・循環状態を算出しました。VRAM・補助RAM・RAMオフロード・SSDオフロードを精度等級付きで事前表示し、ユニファイドメモリの二重加算も防ぎました。' },
      { problem: 'キャッシュ再利用・測定条件の不整合・トークン未報告によるベンチマーク歪みとアプリ–Web間の不整合', solution: '@aiolm/benchmark-contractsを単一ソースとし、openai-chat-serving@5のCold Prompt方式（実行nonce＋リクエスト固有プレフィックス、ウォームアップなし、上限128トークン）へ統一しました。トークン統計は初回バッチで任意交渉し未報告値は推測や0埋めせずnullを保持、Webでは同一（入力バイト・同時実行数・上限）動作点のみで比較する設計にしました。' },
      { problem: 'アカウント登録なしで結果を公開しつつ、スパム防止と投稿者による修正・削除権限を両立させる課題', solution: 'アップロードセッションにCloudflare Turnstile検証とHMAC署名トークンを導入し、公開後はOS資格情報ストア・復旧ファイル・アプリからのワンタイム連携（/manage）で30分間の管理セッションを発行するようにしました。コピーした復旧コードは60秒後にクリップボードから自動消去されます。' }
    ],
    stack: ['React 19', 'Tauri 2 · Rust', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'Python', 'llama.cpp · vLLM · MLX', 'OpenAPI · JSON Schema'],
    stackGroups: [
      { name: 'デスクトップアプリ', items: ['React 19', 'TypeScript', 'Tauri 2 · Rust', 'Vite 7', 'Tailwind CSS 4', 'Vitest'] },
      { name: '推論エンジン・プロトコル', items: ['llama.cpp', 'vLLM · vllm-metal', 'MLX · mlx-vlm', 'Python', 'OpenAI · Anthropic API', 'MCP'] },
      { name: 'Webサイト・データ', items: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Cloudflare Turnstile', 'Vercel'] },
      { name: '共通契約・配布', items: ['@aiolm/benchmark-contracts', 'OpenAPI · JSON Schema', 'GitHub Actions', 'SHA-256 Checksums'] }
    ],
  }
};

const I18N = {
  ko: {
    nav: ['소개', '기술', '경력', '프로젝트', '블로그', '연락처·링크'],
    heroTag: '▶ 포트폴리오',
    heroName: '장주원',
    heroLevel: '주니어 웹 개발자',
    heroIntro: '사용자 경험과 접근성을 개선할 방법을 고민합니다. 사용하는 기술의 동작 원리를 깊이 공부하고, AI를 적극 활용해 개발 프로세스를 개선합니다.',
    playerCaption: '장주원 · 웹 개발자',
    inventoryTitle: '■ 보유 기술',
    collab: '협업 도구: Git · GitHub · Notion · Figma',
    careerTitle: '■ 경력',
    careers: [
      {
        company: '(주)커리어넷',
        role: 'Next.js 풀스택 개발자',
        period: '2025.04 ~ 재직 중',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: '산업 현장의 안전보건 관리 업무를 디지털화하는 솔루션입니다. 이를 기반으로 고객사 요구에 맞춘 B2B 구축형 정보시스템 개발에 주로 참여했습니다.',
            stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Rust', 'WebAssembly', 'NGINX'],
            contributions: [
              { date: '2026.10', title: '사용자 권한 관리 시스템 구축 · AI 업무 활용', desc: 'AI 오케스트레이션을 적극 활용해 구현 계획과 구조도를 작성하고, 팀 리더와 보안 및 성능을 고려한 설계를 논의했습니다. 이후 모든 API의 권한을 확인하는 요청 검증 계층을 구현해 불필요한 DB 조회와 잦은 트랜잭션으로 인한 커넥션 풀 낭비를 줄이고자 했습니다. 구현 결과를 교차 검증한 뒤 서비스에 적용했습니다.' },
              { date: '2026.07', title: 'AI 도구 도입 · 개발 생산성 개선', outcome: '팀 개발 생산성과 코드·변경 이력의 가독성 개선', desc: '개발·커밋 컨벤션을 정립하고 Rules와 Agent Skills 도입을 주도했으며, MCP 등 AI 도구를 활용했습니다. 오류 가능성과 AI 토큰 낭비를 줄이는 구조를 마련했습니다.' },
              { date: '2026.04', title: '네이티브 앱 WebView 인증·인가 개선', outcome: '토큰 노출 축소와 서버 인증 일원화로 보안성·유지보수성 개선', desc: [
                '기존 WebView 인증에서 JWT를 JavaScript Cookie 또는 Authorization 헤더로 직접 다루던 방식을 정리했습니다.',
                'Kotlin·Swift 앱에서 전달한 JWT를 Next.js 서버에서 검증하고 HttpOnly Cookie 기반 세션으로 전환했습니다.',
                '프론트엔드에서 직접 Redis를 호출하던 중복 로그인 방지 로직을 서버사이드 세션 검증 흐름으로 이관했습니다.',
                '인증 실패 응답 형식을 정리해 클라이언트별 예외 처리를 단순화했습니다.'
              ] },
              { date: '2025.11', title: 'Rust·WebAssembly 및 TypeScript 사내 라이브러리', outcome: '안정적인 핵심 기능 구현으로 영업 시연과 고객사 유치에 기여', desc: [
                'ExcelJS, XLSX 등 기존 라이브러리로 해결하기 어려운 Excel 편집 요구사항을 분석했습니다.',
                'Rust로 Excel 편집 로직을 구현하고 WebAssembly로 빌드해 웹에서 실행하도록 구성했습니다.',
                'JavaScript 헬퍼 함수와 TypeScript 타입을 제공해 팀이 사용할 수 있는 사내 라이브러리로 정리했습니다.'
              ] },
              { date: '2025.10', title: 'HTTP/2 전환 · nginx 설정 최적화', outcome: '도메인 전체 평균 서버 응답 시간 약 20% 개선', desc: [
                'nginx 설정을 점검하고 HTTP/1.1에서 HTTP/2로 전환했습니다.',
                '정적 리소스 전송과 서버 응답 흐름을 개선해 페이지 로딩 성능을 최적화했습니다.'
              ] },
              { date: '2025.06', title: '외부 SDK 모듈화 · 공통 컴포넌트화', outcome: 'React에 익숙하지 않은 팀원도 안정적으로 SDK 사용', desc: [
                'Next.js·React 환경에서 사용하기 어려운 외부 SDK를 공통 컴포넌트로 래핑했습니다.',
                'useRef와 forwardRef를 활용해 리렌더링 시에도 SDK 내부 편집 상태가 유지되도록 설계했습니다.',
                'SDK 객체와 메서드의 타입을 정의하고 반복적으로 필요한 기능을 유틸 함수로 분리했습니다.'
              ] },
              { date: '2025.05', title: 'SSO 인증 구현', desc: [
                'OAuth 2.0 표준 흐름을 기반으로 서비스 간 인증 유지 구조를 설계했습니다.',
                '기존 NextAuth 기반 로그인을 확장해 redirect URI와 authorization code를 전달하고, 다른 서비스에서 JWT를 발급받을 수 있도록 구성했습니다.'
              ] }
            ]
          }
        ],
        contributions: [
          { title: '고객사 AX PoC · 자연어 SQL 변환과 RAG', featured: true, summary: '비개발자를 위한 데이터 조회 · 로컬 LLM과 데이터·문서 기반 RAG', desc: [
            '자연어를 SQL로 변환해 비개발자의 고객사 내부 데이터 조회를 돕는 서비스의 PoC 개발에 참여했습니다.',
            '고객사 데이터의 외부 유출을 방지하기 위해 오픈웨이트 모델을 로컬에서 서빙하는 방식으로 구성된 PoC입니다.',
            'Jira에서 PostgreSQL로 옮긴 데이터와 PDF 등 문서를 함께 벡터화해 RAG를 구성했습니다.',
            '개인적으로 학습해 온 로컬 LLM 분야의 정보를 팀원들과 공유했습니다.'
          ] },
          { title: '모바일 앱 웹뷰 개발', desc: 'SafetyOne의 네이티브 앱 웹뷰를 개발했습니다.' },
          { title: 'UX/DX 및 웹 접근성 개선', desc: 'SafetyOne의 사용자·개발자 경험과 웹 접근성을 개선했습니다.' }
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
    contactTitle: '■ 연락처·링크',
    footer: '© 2026 장주원 · JOOWON.EXE',
    back: '돌아가기',
    scrollTop: '맨 위로',
    prev: '이전 프로젝트',
    next: '다음 프로젝트',
    dOverview: '서비스가 하는 일',
    dFeatures: '핵심 사용자 경험',
    dRole: '개발 단계와 기여',
    dTrouble: '핵심 문제 해결',
    dStack: '기술 구성',
    dShots: '실제 서비스 화면',
    dOutcome: '검증된 결과',
    projects: [
      AIOLM.ko,
      { id: 'p1', name: '페이스리뷰', desc: '웹캠 표정을 다섯 감정으로 분석해 시청 반응과 영상 추천으로 연결한 서비스', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: '팀 프로젝트 · 최초 개발 4명 · 리팩터링 2명', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
          '시청 중 웹캠 프레임을 Socket.IO로 전송하고, AI Hub 데이터셋으로 직접 학습한 TensorFlow 모델이 표정을 행복·놀람·분노·슬픔·무표정의 5가지 감정으로 분류',
          '구간·영상 단위로 누적한 감정 데이터로 현재 구간의 시청자 반응, 감정 타임라인, 개인 통계를 제공',
          '비슷한 감정 분포를 가진 영상을 추천'
        ],
        flow: [
          { name: '시청 중 · 실시간 분석 파이프라인', steps: ['재생 중 0.5초마다 프레임 전송', 'OpenCV 얼굴 영역 추출', 'TensorFlow 모델로 5가지 감정 분류', '100개 진행 구간·영상 단위 집계'] },
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
            '행복·놀람·분노·슬픔·무표정의 5가지 감정 분류 모델 직접 학습'
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
            '수행 결과를 커밋 단위로 직접 검수하며 AI를 보조 도구로 활용'
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
      { id: 'p2', name: '토도동', desc: 'NBA 경기의 실시간 문자 중계와 경기별 채팅을 함께 제공하는 플랫폼', period: '2025.02 ~ 2025.05', team: '팀 프로젝트 · 4명 · 전원 풀스택', verified: true,
        role: ['기술 선정 · SSR/CSR 구조 설계', '인증·채팅 서버·DB 동기화 구현'],
        list: { contribution: ['기술 선정 · SSR/CSR 구조 설계', '코드 리뷰로 접근성·SEO·렌더링 개선'], implementation: ['Socket.IO 채팅 서버 호스팅', 'NBA API 동기화 cron(Express.js)'] },
        productSummary: [
          'NBA 경기 일정을 캘린더로 조회하고, 경기별 영상·선수 기록·실시간 문자 중계·채팅을 제공합니다.',
          '실시간 문자 중계는 일정 시간 간격으로 쿼터별 진행 상황을 갱신합니다. 별도로 호스팅한 Socket.IO 서버는 경기별 채팅방과 최근 50개 메시지 조회를 담당합니다.',
          '경기 데이터는 NBA 공식 API를 사용하는 cron 작업(Express.js)으로 로컬 DB에 주기적으로 동기화합니다. 회원 기능에는 JWT·쿠키 기반 인증과 이메일 인증코드를 사용합니다.'
        ],
        flow: [
          { name: '사용자 흐름', steps: ['캘린더에서 경기 일정 확인', '경기 상세로 이동 — 영상·선수 기록 조회', '실시간 문자 중계·채팅 참여'] },
          { name: '실시간 채팅 · 별도 Socket.IO 서버', steps: ['경기방 입장 시 최근 50개 메시지 조회', '메시지를 같은 경기방에 실시간 브로드캐스트'] },
          { name: '백그라운드 · cron(Express.js)', steps: ['NBA 공식 API 주기 호출', '로컬 DB 동기화', '일정·기록·중계 데이터 최신화'] }
        ],
        features: [
          { name: '경기 일정 캘린더', desc: 'react-calendar·Swiper로 날짜를 선택하고, 날짜별 경기 수를 캘린더에 표시' },
          { name: '경기 정보 조회', desc: 'YouTube Data API로 경기 영상을 제공하고, NBA 공식 데이터의 선수 기록을 컬럼별로 정렬해 제공' },
          { name: '실시간 문자 중계', desc: '일정 시간 간격으로 쿼터별 진행 상황을 타임라인으로 표시' },
          { name: '경기별 실시간 채팅', desc: '별도로 호스팅한 Socket.IO 서버로 경기방 채팅을 지원하고 최근 50개 메시지를 DB에서 조회' }
        ],
        roles: [
          { title: '기술 고문 역할', points: [
            '성능·개발 편의성·npm 패키지 최신 현황을 고려해 기술 선택 및 피드백 제공',
            'SSR/CSR로 처리할 영역을 분리해 앱 전체 구조 설계',
            '코드 리뷰로 웹 접근성·SEO·렌더링 속도·가독성 등 UX/DX 개선'
          ] },
          { title: '프론트엔드 구현', points: [
            'JWT·쿠키 기반 로그인·회원가입 UI 및 인증 관리, nodemailer 이메일 인증',
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
      { id: 'p3', name: '해마디', desc: '하루의 감정을 기록하고 그 흐름을 시각화해 돌아보는 일기 서비스', period: '2024.08 ~ 2024.11', team: '팀 프로젝트 · 3명 · 개발 2명 + 디자인·개발 보조 1명', testAccount: 'joowon11 / joowon11!', verified: true,
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
          { name: 'AI·사용자 답장', desc: 'Google Gemini로 답장과 노래·영화·책 추천을 받거나, 다른 사용자로부터 익명 답장을 받음' },
          { name: '유리병 편지함', desc: '5개의 편지 중 하나를 골라 확인하고 답장을 보낼 수 있는 마디 유리병 편지함' },
          { name: '나의 기록 · 나의 섬', desc: '캘린더로 과거 일기·답장을 다시 보고, 월간 통계로 감정 흐름을 종합 분석' }
        ],
        roles: [
          { title: '기술 고문 역할', points: [
            '코드 리뷰를 통해 접근성·SEO·렌더링 속도·가독성 등 UX/DX 개선 피드백 제공',
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
          { name: '상태 관리 · API', items: ['Zustand', 'TanStack Query', 'Google Gemini', 'PocketBase'] },
          { name: 'Development', items: ['Vite', 'pnpm', 'ESLint', 'Prettier', 'Netlify', 'Figma', 'Notion', 'Discord', 'GitHub'] }
        ],
        outcome: [
          'Lighthouse 성능 점수 개선 — 모바일 50~60점대 → 80~90점대, 데스크톱 70~80점대 → 90점대 후반',
          'AI 답장·콘텐츠 추천을 포함한 일기 서비스를 기획부터 배포까지 완료'
        ] }
    ]
  },
  en: {
    nav: ['Overview', 'Skills', 'Career', 'Projects', 'Blog', 'Contact & Links'],
    heroTag: '▶ PORTFOLIO',
    heroName: 'Jang Joowon',
    heroLevel: 'Junior Web Developer',
    heroIntro: 'I care deeply about user experience and accessibility, dig into how the tech I use actually works, and actively use AI to improve my development process.',
    playerCaption: 'Jang Joowon · Web Developer',
    inventoryTitle: '■ SKILLS',
    collab: 'Collaboration: Git · GitHub · Notion · Figma',
    careerTitle: '■ CAREER',
    careers: [
      {
        company: 'CareerNet Inc.',
        role: 'Next.js Fullstack Developer',
        period: '2025.04 ~ present',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: 'A solution that digitizes safety and health management at industrial sites. Primarily contributed to B2B information systems built on the solution and tailored to client requirements.',
            stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Rust', 'WebAssembly', 'NGINX'],
            contributions: [
              { date: '2026.10', title: 'User authorization system · AI in development', desc: 'Actively used AI orchestration to prepare implementation plans and architecture diagrams, then discussed security and performance considerations with the team lead. Implemented a request validation layer to check permissions for every API while aiming to reduce unnecessary database queries and connection pool waste from frequent transactions. Cross-checked the implementation before deploying it to production.' },
              { date: '2026.07', title: 'AI tools · development productivity', outcome: 'Improved team productivity, code quality and change-history readability', desc: 'Established coding and commit conventions, led adoption of Rules and Agent Skills, and used AI tools such as MCP. Created a structure to reduce error risk and wasted AI tokens.' },
              { date: '2026.04', title: 'Native app WebView authentication and authorization', outcome: 'Reduced token exposure and centralized authentication, improving security and maintainability', desc: [
                'Reworked the existing WebView authentication, which mixed direct JWT handling in JavaScript cookies and Authorization headers.',
                'Verified JWTs from Kotlin and Swift apps on the Next.js server and migrated to HttpOnly cookie-based sessions.',
                'Moved Redis-based duplicate-login prevention from direct frontend calls into server-side session validation.',
                'Standardized authentication failure responses to simplify client-specific error handling.'
              ] },
              { date: '2025.11', title: 'Internal Rust·WebAssembly and TypeScript library', outcome: 'Reliable core feature supported sales demonstrations and customer acquisition', desc: [
                'Analyzed Excel editing requirements that existing libraries such as ExcelJS and XLSX could not easily meet.',
                'Implemented Excel editing logic in Rust and built it with WebAssembly for the web.',
                'Provided JavaScript helper functions and TypeScript types as an internal library for the team.'
              ] },
              { date: '2025.10', title: 'HTTP/2 migration · nginx optimization', outcome: 'Approximately 20% faster average server response across the domain', desc: [
                'Reviewed nginx settings and migrated from HTTP/1.1 to HTTP/2.',
                'Improved static resource delivery and server response flow to optimize page loading.'
              ] },
              { date: '2025.06', title: 'External SDK modularization · shared component', outcome: 'Reliable SDK use for teammates less familiar with React', desc: [
                'Wrapped an external SDK that was difficult to use in Next.js and React as a shared component.',
                'Used useRef and forwardRef to preserve the SDK’s editing state across re-renders.',
                'Defined types for SDK objects and methods and extracted recurring functionality into utilities.'
              ] },
              { date: '2025.05', title: 'SSO authentication', desc: [
                'Designed cross-service authentication based on the OAuth 2.0 standard flow.',
                'Extended the existing NextAuth login to pass the redirect URI and authorization code, enabling other services to obtain JWTs.'
              ] }
            ]
          }
        ],
        contributions: [
          { title: 'Client AX PoC · natural language to SQL and RAG', featured: true, summary: 'Data access for non-developers · local LLM and RAG over data and documents', desc: [
            'Contributed to a proof of concept that converts natural language to SQL so non-developers can query the client’s internal data.',
            'The proof of concept served open-weight models locally to prevent client data from leaving their environment.',
            'Built a RAG system by vectorizing both data migrated from Jira to PostgreSQL and documents such as PDFs.',
            'Shared information with teammates from independent study of local LLMs.'
          ] },
          { title: 'Mobile app WebView development', desc: 'Developed the native app WebView for SafetyOne.' },
          { title: 'UX/DX and web accessibility improvements', desc: 'Improved user and developer experience and web accessibility for SafetyOne.' }
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
    contactTitle: '■ CONTACT & LINKS',
    footer: '© 2026 Jang Joowon · JOOWON.EXE',
    back: 'BACK',
    scrollTop: 'BACK TO TOP',
    prev: 'PREV PROJECT',
    next: 'NEXT PROJECT',
    dOverview: 'HOW THE SERVICE WORKS',
    dFeatures: 'CORE EXPERIENCE',
    dRole: 'PHASES & CONTRIBUTIONS',
    dTrouble: 'KEY PROBLEM SOLVING',
    dStack: 'TECHNICAL MAKEUP',
    dShots: 'LIVE PRODUCT SCREENS',
    dOutcome: 'VERIFIED RESULTS',
    projects: [
      AIOLM.en,
      { id: 'p1', name: 'Face Review', desc: 'A service that turns five emotions inferred from webcam expressions into viewing reactions and video recommendations', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: 'Team project · original build: 4 people · refactoring: 2 people', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
      { id: 'p2', name: 'Tododong', desc: 'A platform combining live NBA text play-by-play with per-game chat', period: '2025.02 ~ 2025.05', team: 'Team project · 4 people · all full-stack', verified: true,
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
      { id: 'p3', name: 'Haemadi', desc: 'A journal for recording daily emotions and reflecting on their visualized flow', period: '2024.08 ~ 2024.11', team: 'Team project · 3 people · 2 developers + 1 design/development support', testAccount: 'joowon11 / joowon11!', verified: true,
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
    nav: ['紹介', 'スキル', 'キャリア', 'プロジェクト', 'ブログ', '連絡先・リンク'],
    heroTag: '▶ ポートフォリオ',
    heroName: 'チャン・ジュウォン',
    heroLevel: 'ジュニアWeb開発者',
    heroIntro: 'ユーザー体験とアクセシビリティの改善を常に考えています。使う技術の動作原理を深く学び、AIを積極的に活用して開発プロセスを改善します。',
    playerCaption: 'チャン・ジュウォン · Web開発者',
    inventoryTitle: '■ 保有スキル',
    collab: '協業ツール: Git · GitHub · Notion · Figma',
    careerTitle: '■ キャリア',
    careers: [
      {
        company: 'CareerNet',
        role: 'Next.jsフルスタック開発者',
        period: '2025.04 ~ 在職中',
        projects: [
          {
            name: '🛡 SafetyOne',
            desc: '産業現場の安全保健管理業務をデジタル化するソリューションです。これを基に、顧客の要件に合わせたB2B構築型情報システムの開発に主に参加しました。',
            stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Rust', 'WebAssembly', 'NGINX'],
            contributions: [
              { date: '2026.10', title: 'ユーザー権限管理システムの構築 · AIの業務活用', desc: 'AIオーケストレーションを積極的に活用して実装計画と構成図を作成し、チームリーダーとセキュリティ・性能を考慮した設計を協議しました。その後、全APIの権限を確認するリクエスト検証層を実装し、不要なDB検索や頻繁なトランザクションによるコネクションプールの浪費を抑えることを目指しました。実装結果を相互検証してサービスに適用しました。' },
              { date: '2026.07', title: 'AIツール導入 · 開発生産性の改善', outcome: 'チームの開発生産性・コード品質・変更履歴の可読性を改善', desc: '開発・コミット規約を整備し、RulesとAgent Skillsの導入を主導。MCPなどのAIツールを活用しました。エラーリスクとAIトークンの無駄を減らす構造を整えました。' },
              { date: '2026.04', title: 'ネイティブアプリWebViewの認証・認可改善', outcome: 'トークン露出の削減と認証の一元化でセキュリティ・保守性を改善', desc: [
                'JWTをJavaScript CookieまたはAuthorizationヘッダーで直接扱う方式が混在していたWebView認証を整理しました。',
                'Kotlin・Swiftアプリから渡されたJWTをNext.jsサーバーで検証し、HttpOnly Cookieベースのセッションに移行しました。',
                'フロントエンドからRedisを直接呼び出していた重複ログイン防止処理を、サーバー側のセッション検証に移行しました。',
                '認証失敗時の応答形式を整理し、クライアント別の例外処理を簡素化しました。'
              ] },
              { date: '2025.11', title: 'Rust・WebAssemblyとTypeScriptによる社内ライブラリ', outcome: '安定した中核機能の実装で営業デモと顧客獲得に貢献', desc: [
                'ExcelJSやXLSXなどの既存ライブラリでは対応が難しいExcel編集の要件を分析しました。',
                'RustでExcel編集ロジックを実装し、WebAssemblyにビルドしてWeb上で実行できるようにしました。',
                'JavaScriptヘルパー関数とTypeScriptの型を提供し、チームが使える社内ライブラリにまとめました。'
              ] },
              { date: '2025.10', title: 'HTTP/2移行 · nginx設定の最適化', outcome: 'ドメイン全体の平均サーバー応答時間を約20%改善', desc: [
                'nginx設定を確認し、HTTP/1.1からHTTP/2に移行しました。',
                '静的リソースの配信とサーバー応答の流れを改善し、ページ読み込みを最適化しました。'
              ] },
              { date: '2025.06', title: '外部SDKのモジュール化 · 共通コンポーネント化', outcome: 'Reactに不慣れなメンバーもSDKを安定して利用可能に', desc: [
                'Next.js・React環境で使いにくい外部SDKを共通コンポーネントでラップしました。',
                'useRefとforwardRefを活用し、再レンダリング時もSDK内部の編集状態を保持できるようにしました。',
                'SDKオブジェクトとメソッドの型を定義し、繰り返し必要な機能をユーティリティ関数に分離しました。'
              ] },
              { date: '2025.05', title: 'SSO認証の実装', desc: [
                'OAuth 2.0の標準フローに基づき、サービス間で認証を維持する構造を設計しました。',
                '既存のNextAuthログインを拡張してredirect URIとauthorization codeを渡し、他のサービスでJWTを取得できるようにしました。'
              ] }
            ]
          }
        ],
        contributions: [
          { title: '顧客向けAX PoC · 自然言語SQL変換とRAG', featured: true, summary: '非開発者向けデータ検索 · ローカルLLMとデータ・文書によるRAG', desc: [
            '自然言語をSQLに変換し、非開発者による顧客社内データの検索を支援するサービスのPoC開発に参加しました。',
            '顧客データの外部流出を防ぐため、オープンウェイトモデルをローカルで提供する構成のPoCです。',
            'JiraからPostgreSQLに移行したデータとPDFなどの文書を併せてベクトル化し、RAGを構築しました。',
            '個人的に学んできたローカルLLM分野の情報をチームメンバーに共有しました。'
          ] },
          { title: 'モバイルアプリのWebView開発', desc: 'SafetyOneのネイティブアプリWebViewを開発しました。' },
          { title: 'UX/DX・Webアクセシビリティの改善', desc: 'SafetyOneのユーザー・開発者体験とWebアクセシビリティを改善しました。' }
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
    contactTitle: '■ 連絡先・リンク',
    footer: '© 2026 チャン・ジュウォン · JOOWON.EXE',
    back: '戻る',
    scrollTop: 'ページ上部へ',
    prev: '前のプロジェクト',
    next: '次のプロジェクト',
    dOverview: 'サービスの仕組み',
    dFeatures: '主要な体験',
    dRole: '開発段階と貢献',
    dTrouble: '主要な問題解決',
    dStack: '技術構成',
    dShots: '実サービス画面',
    dOutcome: '確認済みの成果',
    projects: [
      AIOLM.ja,
      { id: 'p1', name: 'フェイスレビュー', desc: 'Webカメラの表情を5感情に分類し、視聴反応と動画推薦につなげるサービス', period: '2023.10 ~ 2023.12 · 2026.01 ~ 2026.04 · 2026.07', team: 'チーム開発 · 初期開発4人 · リファクタリング2人', verified: true, testAccount: 'test4@facereview.net / qwer1234',
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
      { id: 'p2', name: 'トドドン', desc: 'NBAのリアルタイム文字中継と試合別チャットを一緒に提供するプラットフォーム', period: '2025.02 ~ 2025.05', team: 'チーム開発 · 4人 · 全員フルスタック', verified: true,
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
      { id: 'p3', name: 'ヘマディ', desc: '一日の感情を記録し、その流れを可視化して振り返る日記サービス', period: '2024.08 ~ 2024.11', team: 'チーム開発 · 3人 · 開発2人 + デザイン・開発補助1人', testAccount: 'joowon11 / joowon11!', verified: true,
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
  main: ['AI 활용', 'TypeScript', 'React', 'Next.js'],
  sub: ['Node.js', 'PostgreSQL', 'Nginx', 'WASM', 'RAG']
};

const UI_COPY = {
  ko: {
    skip: '본문으로 건너뛰기', menu: '메뉴', navLabel: '주요 메뉴', langLabel: '언어 선택',
    aiUsage: 'AI 활용',
    pageTitle: '장주원 — 웹 개발자 포트폴리오',
    careerExpand: '펼치기', careerCollapse: '접기', careerOutcome: '성과',
    projectContribution: '핵심 기여', projectImplementation: '대표 구현',
    projectGuide: '최근 작업일 순 · 개발 범위와 대표 구현', flowTitle: '서비스 작동 흐름', flowOr: '또는',
    visitBlog: 'Velog에서 전체 글 보기',
    hudLabels: ['문제', '기여', '성과'],
    statusTitle: '기본 정보', statusLabels: { period: '기간', team: '참여 구성', links: '링크', testAccount: '테스트 계정' },
    roleLabel: '역할',
    imageLabels: {
      p4: 'AioLM v0.5.2 제품 소개·설치 웹과 모델 선택·실행 설정 데스크톱 앱 화면',
      p1: '감정 타임라인과 재생 컨트롤이 표시된 페이스리뷰 실제 시청 화면',
      p2: 'NBA 경기 일정과 팀별 점수가 표시된 토도동 서비스 화면',
      p3: '답장 방식 선택 화면을 모바일과 데스크톱으로 보여주는 해마디 서비스 화면'
    },
    shotLabels: {
      p4: [
        '제품 소개 및 설치 웹(aiolm.vercel.app/ko, v0.5.2) — 플랫폼별 설치 안내와 네이티브 앱 미리보기',
        '모델 선택·설정(v0.5.2 네이티브 앱) — 런타임·프로필·옵션 조정과 실행 전 VRAM·RAM 예상 사용량',
        'Hugging Face 모델 탐색(v0.5.2 네이티브 앱) — 전 형식 저장소 검색과 양자화·파일별 선택 다운로드',
        '외부 추론 엔진 연결(v0.5.2 네이티브 앱) — 로컬 OpenAI 호환 엔진 3단계 자동 탐색·검사·연결',
        '로컬 스트리밍 채팅(v0.5.2 네이티브 앱) — 실시간 TTFT·PP·TG·캐시 토큰 지표와 파일·MCP·스킬 연동',
        '공개 벤치마크 탐색기(aiolm.vercel.app/ko/benchmarks, v0.5.2) — 모델·추론 엔진·하드웨어·측정 4개 그룹 상세 필터'
      ],
      p1: ['영상 위 감정 타임라인 그래프와 커스텀 재생 컨트롤이 표시된 페이스리뷰 시청 화면', '감정 분포 도넛 차트와 최근 시청 영상별 그래프가 표시된 페이스리뷰 마이페이지'],
      p2: ['날짜별 NBA 경기 일정과 팀별 점수를 조회하는 토도동 화면', '실시간 문자 중계와 경기별 채팅을 함께 제공하는 토도동 경기 화면'],
      p3: ['AI 또는 익명 사용자 중 일기 답장 방식을 선택하는 해마디 화면', '월간 감정 분포와 일기 통계를 확인하는 해마디 나의 섬 화면']
    },
    hud: {
      p4: [
        '로컬 LLM 엔진마다 도구·설정이 분산되어 있고, 실제 기기·설정 조합별 성능 기준 데이터가 부족한 문제',
        ['Tauri 2·Rust·React 멀티엔진 데스크톱 앱 설계·개발', 'Next.js·PostgreSQL 4개 언어 웹·벤치마크 탐색기 개발'],
        ['Win·macOS·Linux v0.5.2 크로스플랫폼 릴리스', '4개 언어 제품 웹·공개 벤치마크(aiolm.vercel.app) 운영']
      ],
      p1: ['클릭·시청 기록만으로는 영상 구간별 감정 반응을 알기 어려움', ['2023: 프론트엔드 개발·감정 분석 모델 직접 학습', '2026: 프론트엔드 리팩터링 전담'], ['창의설계경진대회 대상', 'facereview.net 배포']],
      p2: ['NBA 경기를 보며 팬들과 실시간으로 소통할 공간이 없는 문제', ['기술 선정·SSR/CSR 구조 설계', '인증·채팅 서버·DB 동기화 구현'], ['실시간 중계·경기별 채팅 배포', 'NBA 데이터 자동 동기화 구축']],
      p3: ['감정 기록이 쌓여도 흐름을 돌아보기 어려운 문제', ['PocketBase DB·컴포넌트 구조 설계', '코드 리뷰·성능 개선'], ['Lighthouse 모바일 50~60 → 80~90점대', 'AI 답장 일기 서비스 배포']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsReady: '실제 서비스 화면 · 2026.07'
  },
  en: {
    skip: 'Skip to main content', menu: 'Menu', navLabel: 'Primary', langLabel: 'Language',
    aiUsage: 'AI Leverage',
    pageTitle: 'Jang Joowon — Web Developer Portfolio',
    careerExpand: 'Show details', careerCollapse: 'Hide details', careerOutcome: 'Outcome',
    projectContribution: 'CORE CONTRIBUTION', projectImplementation: 'KEY IMPLEMENTATION',
    projectGuide: 'Latest work first · development scope and key implementations', flowTitle: 'SERVICE FLOW', flowOr: 'OR',
    visitBlog: 'See all posts on Velog',
    hudLabels: ['Problem', 'Contribution', 'Outcome'],
    statusTitle: 'PROJECT INFO', statusLabels: { period: 'PERIOD', team: 'PARTICIPATION', links: 'LINKS', testAccount: 'TEST ACCOUNT' },
    roleLabel: 'ROLE',
    imageLabels: {
      p4: 'AioLM v0.5.2 product website and native desktop model-settings workspace',
      p1: 'Actual Face Review watch screen with the emotion timeline and playback controls',
      p2: 'Tododong screen showing the NBA schedule and team scores',
      p3: 'Haemadi reply-method screen shown on mobile and desktop'
    },
    shotLabels: {
      p4: [
        'Product & install web (aiolm.vercel.app/ko, v0.5.2) — platform install tabs and native app preview',
        'Model selection & settings (v0.5.2 native app) — runtime, profile, options, and pre-load VRAM/RAM estimates',
        'Hugging Face discovery (v0.5.2 native app) — all-format repository search and per-weight/file downloads',
        'External engine connection (v0.5.2 native app) — 3-step auto discovery, check, and connect for local OpenAI engines',
        'Local streaming chat (v0.5.2 native app) — per-turn TTFT, PP, TG, cached tokens, attachments, MCP, and skills',
        'Public benchmark explorer (aiolm.vercel.app/ko/benchmarks, v0.5.2) — 4-group filters across model, engine, hardware, and measurement'
      ],
      p1: ['Face Review watch screen with an emotion timeline over the video and custom playback controls', 'Face Review profile screen with an emotion-distribution donut and graphs for recently watched videos'],
      p2: ['Tododong schedule screen for browsing NBA games and scores by date', 'Tododong game screen combining live text play-by-play with per-game chat'],
      p3: ['Haemadi screen for choosing an AI or anonymous-user reply to a journal entry', 'Haemadi My Island screen showing monthly emotion distribution and journal statistics']
    },
    hud: {
      p4: [
        'Local LLM tools and engine settings are fragmented, with scarce measured performance data across real setups',
        ['Designed & built the Tauri 2·Rust·React multi-engine desktop app', 'Built the 4-language Next.js·PostgreSQL benchmark web explorer'],
        ['Cross-platform v0.5.2 desktop releases (Win/macOS/Linux)', '4-language product site & public benchmarks (aiolm.vercel.app)']
      ],
      p1: ['Click and watch history alone cannot show emotional reactions by video segment', ['2023: frontend development · trained the emotion classifier', '2026: sole frontend owner of the refactoring'], ['Creative Design grand prize', 'facereview.net deployed']],
      p2: ['No place to follow an NBA game live while talking with fellow fans', ['Tech choices · SSR/CSR structure design', 'Auth, chat server & DB sync'], ['Shipped live play-by-play & per-game chat', 'Automated NBA data sync']],
      p3: ['Hard to look back on emotional flow as diary entries pile up', ['PocketBase DB & component structure', 'Code review · performance work'], ['Lighthouse mobile 50s–60s → 80s–90s', 'Shipped the AI-reply diary service']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsReady: 'Live product screens · 2026.07'
  },
  ja: {
    skip: '本文へスキップ', menu: 'メニュー', navLabel: 'メインメニュー', langLabel: '言語選択',
    aiUsage: 'AI活用',
    pageTitle: 'チャン・ジュウォン — Web開発者ポートフォリオ',
    careerExpand: '詳細を開く', careerCollapse: '閉じる', careerOutcome: '成果',
    projectContribution: '主要な貢献', projectImplementation: '代表実装',
    projectGuide: '最近の作業順 · 開発範囲と代表実装', flowTitle: 'サービスの動作フロー', flowOr: 'または',
    visitBlog: 'Velogで全ての記事を見る',
    hudLabels: ['課題', '貢献', '成果'],
    statusTitle: '基本情報', statusLabels: { period: '期間', team: '参加構成', links: 'リンク', testAccount: 'テストアカウント' },
    roleLabel: '担当',
    imageLabels: {
      p4: 'AioLM v0.5.2の製品紹介Webとモデル選択・実行設定デスクトップアプリ画面',
      p1: '感情タイムラインと再生コントロールを表示するフェイスレビューの実際の視聴画面',
      p2: 'NBAの日程とチーム別スコアを表示するトドドンのサービス画面',
      p3: '返信方法の選択画面をモバイルとデスクトップで示すヘマディのサービス画面'
    },
    shotLabels: {
      p4: [
        '製品紹介・導入Web（aiolm.vercel.app/ko、v0.5.2）— OS別導入案内とネイティブアプリプレビュー',
        'モデル選択・設定（v0.5.2ネイティブアプリ）— ランタイム・プロファイル・オプション調整と起動前VRAM/RAM見積もり',
        'Hugging Face探索（v0.5.2ネイティブアプリ）— 全形式検索と量子化・ファイル別ダウンロード',
        '外部推論エンジン接続（v0.5.2ネイティブアプリ）— ローカルOpenAI互換エンジンの3段階自動探索・確認・接続',
        'ローカルストリーミング対話（v0.5.2ネイティブアプリ）— TTFT・PP・TG・キャッシュ指標とファイル・MCP・スキル連携',
        '公開ベンチマーク探索（aiolm.vercel.app/ko/benchmarks、v0.5.2）— モデル・エンジン・ハードウェア・測定の4群詳細フィルター'
      ],
      p1: ['動画上の感情タイムラインとカスタム再生コントロールを表示するフェイスレビューの視聴画面', '感情分布ドーナツと最近見た動画別グラフを表示するフェイスレビューのマイページ'],
      p2: ['日付別にNBAの試合日程とスコアを確認するトドドンの画面', 'リアルタイム文字中継と試合別チャットを同時に提供するトドドンの試合画面'],
      p3: ['AIまたは匿名ユーザーからの日記返信方法を選ぶヘマディの画面', '月間の感情分布と日記統計を確認するヘマディの「私の島」画面']
    },
    hud: {
      p4: [
        'ローカルLLMエンジンごとにツールや設定が分散し、実機・設定ごとの実測性能情報が不足している課題',
        ['Tauri 2・Rust・Reactマルチエンジンデスクトップアプリを設計・開発', 'Next.js・PostgreSQL 4言語Web・ベンチマーク探索画面を開発'],
        ['Win・macOS・Linux向けv0.5.2リリース', '4言語製品Web・公開ベンチマーク（aiolm.vercel.app）を運用']
      ],
      p1: ['クリック・視聴履歴だけでは動画区間ごとの感情反応が分からない', ['2023: フロントエンド開発・感情分析モデルを直接学習', '2026: フロントエンドリファクタリング専任'], ['創意設計コンテスト大賞', 'facereview.net公開']],
      p2: ['NBAの試合を見ながらファン同士でリアルタイムに交流できる場がない課題', ['技術選定 · SSR/CSR構成設計', '認証・チャットサーバー・DB同期を実装'], ['リアルタイム中継・試合別チャットを公開', 'NBAデータの自動同期を構築']],
      p3: ['感情の記録が溜まっても流れを振り返りにくい課題', ['PocketBase DB・コンポーネント構造設計', 'コードレビュー・性能改善'], ['Lighthouseモバイル50〜60→80〜90点台', 'AI返信付き日記サービスを公開']]
    },
    outcomeStatus: 'VERIFIED OUTCOME', screenshotsReady: '実サービス画面 · 2026.07'
  }
};

const CONTACT = {
  email: 'mac52485@gmail.com',
  github: { label: 'github.com/joowon-jang', url: 'https://github.com/joowon-jang' },
  blog: { label: 'velog.io/@juwon98', url: 'https://velog.io/@juwon98/posts' },
  huggingface: { label: 'huggingface.co/wonone', url: 'https://huggingface.co/wonone' }
};
