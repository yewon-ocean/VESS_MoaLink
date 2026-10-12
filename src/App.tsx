import { Component, useEffect, useState, type ErrorInfo, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "book"
  | "briefcase"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "heart"
  | "home"
  | "language"
  | "legal"
  | "location"
  | "menu"
  | "message"
  | "phone"
  | "pin"
  | "school"
  | "search"
  | "shield"
  | "sparkle"
  | "user";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    briefcase: (
      <>
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 12h20" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    language: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    legal: (
      <>
        <path d="M12 3v18M5 6h14M5 6l-3 7h6L5 6ZM19 6l-3 7h6l-3-7ZM8 21h8" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    message: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    school: (
      <>
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12.5V17c3 2 7 2 10 0v-4.5M21 10v6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3-1 3.5L7.5 8l3.5 1.5 1 3.5 1.5-3.5L17 8l-3.5-1.5L12 3Z" />
        <path d="m5 14-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14ZM19 14l-.5 1.5L17 16l1.5.5L19 18l.5-1.5L21 16l-1.5-.5L19 14Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

type Organization = {
  id: string;
  name: string;
  category: string;
  description: string;
  distance: string;
  languages: string;
  icon: IconName;
  color: string;
  address: string;
  hours: string;
  phone: string;
  services: string[];
  notes: string;
};

const organizations: Organization[] = [
  {
    id: "gamdong",
    name: "이주민지원공익센터 감동",
    category: "법률·체류",
    description: "체류자격, 출입국 행정 무료 상담",
    distance: "1.2km",
    languages: "한국어 · 영어",
    icon: "legal",
    color: "lavender",
    address: "서울시 종로구 대학로 12",
    hours: "평일 10:00–18:00",
    phone: "02-1234-5601",
    services: ["체류자격 상담", "출입국 행정 동행", "법률 정보 안내"],
    notes: "예약 상담을 권장하며, 실명과 상세 신상은 선택 사항입니다.",
  },
  {
    id: "child-medical",
    name: "함께하는 아동의료센터",
    category: "의료·심리",
    description: "아동·청소년 진료 및 심리 상담",
    distance: "2.4km",
    languages: "한국어 · 베트남어",
    icon: "heart",
    color: "rose",
    address: "서울시 성동구 왕십리로 88",
    hours: "평일 09:00–17:30",
    phone: "02-1234-5602",
    services: ["아동·청소년 진료", "심리 상담", "예방접종 안내"],
    notes: "보험 여부와 관계없이 1차 상담이 가능합니다.",
  },
  {
    id: "baeum-ieum",
    name: "배움이음 교육네트워크",
    category: "교육·학습",
    description: "진학, 학습, 한국어 교육 상담",
    distance: "3.1km",
    languages: "한국어 · 중국어",
    icon: "school",
    color: "mint",
    address: "서울시 마포구 월드컵로 45",
    hours: "평일 13:00–19:00, 토 10:00–14:00",
    phone: "02-1234-5603",
    services: ["진학 상담", "한국어 교육", "학습 멘토링"],
    notes: "학교 재학 여부와 관계없이 학습 상담을 받을 수 있습니다.",
  },
  {
    id: "narae-shelter",
    name: "나래청소년쉼터",
    category: "의료·심리",
    description: "긴급 보호와 생활 안정 상담",
    distance: "4.0km",
    languages: "한국어 · 영어",
    icon: "home",
    color: "rose",
    address: "서울시 중구 퇴계로 201",
    hours: "24시간 긴급 연결",
    phone: "02-1234-5604",
    services: ["긴급 보호", "생활 상담", "지역 연계"],
    notes: "야간에도 긴급 연락이 가능합니다.",
  },
  {
    id: "bridge-legal",
    name: "다리법률지원단",
    category: "법률·체류",
    description: "체류 공백 예방과 서류 준비 도움",
    distance: "5.2km",
    languages: "한국어 · 영어 · 중국어",
    icon: "legal",
    color: "lavender",
    address: "서울시 영등포구 국회대로 70",
    hours: "화·목 10:00–16:00",
    phone: "02-1234-5605",
    services: ["서류 체크리스트", "신청 일정 안내", "통역 연계"],
    notes: "방문 전 필요한 서류를 미리 안내받을 수 있습니다.",
  },
];

const categories = ["전체", "법률·체류", "교육·학습", "의료·심리"];

type DiagnosisQuestion = {
  id: string;
  title: string;
  options: string[];
};

const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: "school",
    title: "현재 학교에 다니고 있거나 고등학교를 졸업했나요?",
    options: ["네, 학교에 다니고 있어요", "졸업했거나 곧 졸업해요", "아니요", "잘 모르겠어요"],
  },
  {
    id: "age",
    title: "지금 나이는 어디에 가깝나요?",
    options: ["18세 미만", "18세 이상", "잘 모르겠어요"],
  },
  {
    id: "stay",
    title: "한국에 얼마나 머물렀나요?",
    options: ["1년 미만", "1년 이상 5년 미만", "5년 이상", "잘 모르겠어요"],
  },
  {
    id: "status",
    title: "체류자격(비자)이 있나요?",
    options: ["있어요", "없어요", "만료됐어요", "잘 모르겠어요"],
  },
  {
    id: "need",
    title: "지금 가장 필요한 도움은 무엇인가요?",
    options: ["체류·비자", "학교·학습", "의료·심리", "진로·취업"],
  },
  {
    id: "region",
    title: "주로 생활하는 지역은 어디인가요?",
    options: ["서울", "경기·인천", "그 외 지역", "잘 모르겠어요"],
  },
  {
    id: "language",
    title: "상담을 받을 때 편한 언어가 있나요?",
    options: ["한국어", "영어", "베트남어", "중국어", "기타"],
  },
];

type VisaGuide = {
  id: string;
  stage: string;
  badge: string;
  title: string;
  summary: string;
  icon: IconName;
  audience: string;
  requirements: string[];
  documents: string[];
  process: string[];
  cautions: string[];
};

const visaGuides: VisaGuide[] = [
  {
    id: "child-youth",
    stage: "아동·청소년기",
    badge: "재학 중",
    title: "체류자격 부여 요건 확인",
    summary: "학교생활과 국내 체류기간을 기준으로 현재 가능한 제도를 확인해요.",
    icon: "school",
    audience: "학교에 다니고 있거나 국내에서 장기간 성장한 아동·청소년과 보호자",
    requirements: [
      "국내 학교 재학 또는 이에 준하는 학습 이력이 있는지 확인해요.",
      "한국에서의 체류 기간과 거주 사실을 설명할 수 있어야 해요.",
      "보호자 또는 지원기관의 도움을 받을 수 있는 연락 방법을 준비해요.",
    ],
    documents: [
      "재학증명서 또는 학교 확인 서류",
      "국내 거주 사실을 보여주는 자료",
      "본인 확인이 가능한 기존 서류(있는 경우)",
    ],
    process: [
      "지금 학교·거주 상황을 정리해요.",
      "가까운 법률·체류 상담 기관에 요건을 확인해요.",
      "부족한 서류를 목록으로 만들어 하나씩 준비해요.",
    ],
    cautions: [
      "요건은 개인 상황과 정책 변경에 따라 달라질 수 있어요.",
      "결과를 단정하지 않고, 전문가 상담과 함께 확인하는 것이 안전해요.",
    ],
  },
  {
    id: "graduation",
    stage: "졸업·성인 전환",
    badge: "준비 시기",
    title: "공백 없이 미리 준비",
    summary: "졸업 전 필요한 서류와 신청 시기, 부족한 요건을 미리 준비해요.",
    icon: "clock",
    audience: "곧 졸업하거나 성인 전환을 앞둔 청소년, 진로를 준비하는 보호자",
    requirements: [
      "졸업 예정 시기와 이후 체류 계획을 먼저 정리해요.",
      "한국어 능력, 학력, 거주 지역 등 추가로 확인해야 할 조건을 파악해요.",
      "졸업 전에 상담 일정을 잡아 공백 기간을 줄여요.",
    ],
    documents: [
      "졸업예정증명서 또는 성적 관련 서류",
      "한국어 능력 증빙(있는 경우)",
      "상담 기관에서 안내한 추가 서류 목록",
    ],
    process: [
      "졸업 6개월 전부터 가능한 경로를 비교해요.",
      "필요 서류와 신청 시기를 달력에 표시해요.",
      "부족한 요건은 학교·지원기관과 함께 보완해요.",
    ],
    cautions: [
      "졸업 직후 바로 신청하지 못하면 공백이 생길 수 있어요.",
      "시험 일정과 접수 마감은 해마다 달라질 수 있으니 최근 공고를 확인하세요.",
    ],
  },
  {
    id: "adult-path",
    stage: "성인 이후",
    badge: "진로 선택",
    title: "나에게 맞는 경로 찾기",
    summary: "학업, 취업, 거주 지역에 맞는 체류 경로를 비교해요.",
    icon: "briefcase",
    audience: "성인이 되었거나 학업·취업·거주를 기준으로 다음 단계를 찾는 사람",
    requirements: [
      "학업 계속, 취업, 지역 정주 중 우선하는 방향을 정해요.",
      "거주 희망 지역이 지역특화형 제도 대상인지 확인해요.",
      "상담 시 설명할 현재 상황(학력, 체류 이력, 언어)을 준비해요.",
    ],
    documents: [
      "학력 또는 직업 관련 자료",
      "거주 지역을 확인할 수 있는 자료",
      "이전 상담에서 받은 안내문(있는 경우)",
    ],
    process: [
      "가능한 체류 경로를 2~3가지로 좁혀요.",
      "지역·조건이 맞는 기관에 상담을 연결해요.",
      "안내에 따라 서류와 다음 일정을 확인해요.",
    ],
    cautions: [
      "취업·거주 조건은 지역과 시기에 따라 다를 수 있어요.",
      "본 안내는 정보 제공용이며 법률 자문을 대신하지 않아요.",
    ],
  },
];

type AppView = "home" | "org-list" | "org-detail" | "visa-detail";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f8fa] px-5 text-center">
          <p className="text-[18px] font-extrabold">불러오지 못했어요</p>
          <p className="text-[14px] text-[#5b6470]">잠시 후 다시 시도해 주세요.</p>
          <button className="primary-button" onClick={() => this.setState({ hasError: false })}>
            다시 시도
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [view, setView] = useState<AppView>("home");
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [selectedVisaId, setSelectedVisaId] = useState<string | null>(null);
  const [orgReturnView, setOrgReturnView] = useState<AppView>("home");
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [diagnosisOpen, setDiagnosisOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatQuestion, setChatQuestion] = useState("");
  const [chatSent, setChatSent] = useState("");

  const filteredOrganizations =
    activeCategory === "전체"
      ? organizations
      : organizations.filter((organization) => organization.category === activeCategory);

  const selectedOrganization = organizations.find((organization) => organization.id === selectedOrgId);
  const selectedVisa = visaGuides.find((guide) => guide.id === selectedVisaId);
  const currentQuestion = diagnosisQuestions[questionIndex];
  const diagnosisComplete = diagnosisOpen && questionIndex >= diagnosisQuestions.length;

  const goHome = (sectionId?: string) => {
    setView("home");
    setMobileMenuOpen(false);
    if (sectionId) setPendingScroll(sectionId);
  };

  const startDiagnosis = () => {
    setDiagnosisOpen(true);
    if (questionIndex > diagnosisQuestions.length) setQuestionIndex(0);
    goHome("diagnosis");
  };

  const selectDiagnosisAnswer = (option: string) => {
    if (!currentQuestion) return;
    const questionId = currentQuestion.id;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setQuestionIndex((prev) => prev + 1);
  };

  const goToPreviousQuestion = () => {
    setQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const openOrgList = () => {
    setView("org-list");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openOrgDetail = (id: string, from: AppView) => {
    setSelectedOrgId(id);
    setOrgReturnView(from);
    setView("org-detail");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openVisaDetail = (id: string) => {
    setSelectedVisaId(id);
    setView("visa-detail");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (view !== "home" || !pendingScroll) return;
    const target = pendingScroll;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      setPendingScroll(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [view, pendingScroll]);

  return (
    <div className="min-h-screen bg-[#f7f8fa] pb-[72px] text-[#1f2328] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#dfe8e4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5">
          <button className="flex items-center gap-2.5" onClick={() => goHome("home")}>
            <span className="logo-mark">
              <span />
              <span />
              <span />
            </span>
            <span className="text-[20px] font-extrabold tracking-[-0.04em] text-[#1f2328]">모아잇다</span>
          </button>

          <nav className="hidden items-center gap-8 text-[14px] font-semibold text-[#49615b] md:flex">
            <button onClick={() => goHome("diagnosis")}>내 상황 알아보기</button>
            <button onClick={() => goHome("organizations")}>지원기관 찾기</button>
            <button onClick={() => goHome("roadmap")}>체류·비자 가이드</button>
            <button onClick={() => goHome("stories")}>도움말</button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <button
                className="flex h-10 items-center gap-2 rounded-full border border-[#dce6e2] px-3.5 text-[13px] font-semibold text-[#405a53] transition hover:border-[#97b7ae]"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <Icon name="language" size={17} />
                한국어
                <Icon name="chevron" size={14} />
              </button>
              {languageOpen && (
                <div className="absolute right-0 top-12 w-36 rounded-2xl border border-[#e1e9e6] bg-white p-2 text-sm shadow-xl">
                  {["한국어", "English", "Tiếng Việt"].map((language) => (
                    <button
                      className="block w-full rounded-xl px-3 py-2 text-left hover:bg-[#f0f6f3]"
                      key={language}
                      onClick={() => setLanguageOpen(false)}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="flex h-10 items-center gap-2 rounded-xl bg-[#ffc93c] px-3 text-[12px] font-extrabold text-[#1f2328] transition hover:bg-[#f5a800] sm:px-4 sm:text-[13px]"
              onClick={() => setChatbotOpen(true)}
            >
              <Icon name="message" size={17} />
              <span className="hidden sm:inline">AI 챗봇</span>
              <span className="sm:hidden">AI</span>
            </button>
            <button
              aria-label="메뉴 열기"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce6e2] md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-[#e6ece9] bg-white px-5 py-4 md:hidden">
            {[
              ["내 상황 알아보기", "diagnosis"],
              ["지원기관 찾기", "organizations"],
              ["체류·비자 가이드", "roadmap"],
              ["도움말", "stories"],
            ].map(([label, id]) => (
              <button
                className="block w-full border-b border-[#edf1ef] py-3 text-left text-[15px] font-semibold"
                key={id}
                onClick={() => goHome(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main id="home">
        {view === "home" && (
        <>
        <section className="relative overflow-hidden bg-[#fffaf0]">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid max-w-[1180px] gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-20 lg:pt-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0d888] bg-white/80 px-3.5 py-2 text-[12px] font-bold text-[#6b5311]">
                <Icon name="shield" size={16} />
                로그인 없이, 안전하게 이용하세요
              </div>
              <h1 className="max-w-[650px] text-[42px] font-extrabold leading-[1.16] tracking-[-0.055em] text-[#1f2328] sm:text-[56px]">
                흩어진 도움을 모아,
                <br />
                <span className="relative text-[#b06c00]">
                  내일을 이어가요
                  <svg className="absolute -bottom-2 left-0 w-full" height="9" viewBox="0 0 280 9">
                    <path d="M2 6C70 1 178 1 278 5" fill="none" stroke="#ffc93c" strokeLinecap="round" strokeWidth="4" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-[550px] text-[17px] leading-8 text-[#516761]">
                체류자격부터 교육, 의료, 진로까지.
                <br className="hidden sm:block" /> 지금 내 상황에서 가능한 선택과 도움받을 곳을 쉽게 알려드릴게요.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  className="primary-button"
                  onClick={() => startDiagnosis()}
                >
                  3분 만에 내 상황 알아보기
                  <Icon name="arrow" size={18} />
                </button>
                <button className="secondary-button" onClick={() => goHome("organizations")}>
                  <Icon name="location" size={18} />
                  가까운 기관 찾기
                </button>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-medium text-[#62766f]">
                <span className="flex items-center gap-1.5"><Icon name="check" size={14} />개인정보 저장 안 함</span>
                <span className="flex items-center gap-1.5"><Icon name="check" size={14} />무료 이용</span>
                <span className="flex items-center gap-1.5"><Icon name="check" size={14} />최근 검증된 정보</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[505px] lg:mr-0">
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-[#ffd883]/40 blur-sm" />
              <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-[#b5ddd1]/60" />
              <div className="relative rounded-[30px] border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(33,77,65,.12)] sm:p-7">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-[12px] font-bold text-[#a56600]">내 상황에서 시작하기</p>
                    <h2 className="text-[22px] font-extrabold tracking-[-0.03em]">지금 나는 어디에 해당하나요?</h2>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef8f4] text-[#2f8972]">
                    <Icon name="sparkle" size={20} />
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    ["학생", "학교에 다니고 있어요", "school", "bg-[#fff2c6] text-[#8a5b00]"],
                    ["졸업 준비", "곧 졸업하거나 진로를 준비해요", "book", "bg-[#e8f0ff] text-[#2b6cf0]"],
                    ["성인·보호자", "성인이거나 자녀의 정보가 필요해요", "user", "bg-[#e9f7f1] text-[#1e8760]"],
                    ["활동가", "상담에 필요한 최신 정보를 찾아요", "message", "bg-[#f2eeff] text-[#7057a6]"],
                  ].map(([label, text, icon, color]) => (
                    <button
                      className="group flex w-full items-center gap-4 rounded-2xl border border-[#e5ece9] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#8ebaae] hover:shadow-md"
                      key={label}
                      onClick={() => startDiagnosis()}
                    >
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}>
                        <Icon name={icon as IconName} size={21} />
                      </span>
                      <span className="flex-1">
                        <strong className="block text-[12px] text-[#527068]">{label}</strong>
                        <span className="mt-0.5 block text-[14px] font-semibold text-[#213b34]">{text}</span>
                      </span>
                      <span className="text-[#94a59f] transition group-hover:translate-x-1 group-hover:text-[#2f8972]"><Icon name="arrow" size={18} /></span>
                    </button>
                  ))}
                </div>
                <p className="mt-5 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7b8c87]">
                  <Icon name="shield" size={14} />
                  답변 내용은 이 기기에만 임시로 저장돼요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="diagnosis">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow">어디서부터 시작할지 막막하다면</p>
                <h2 className="section-title">내 상황에 맞춰 한 걸음씩</h2>
                <p className="section-copy">어려운 용어 없이, 필요한 정보만 차근차근 안내해 드려요.</p>
              </div>
              <span className="hidden text-[12px] text-[#71827c] md:block">평균 3분 · 로그인 필요 없음</span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: "user",
                  title: "내 상황 알아보기",
                  text: "간단한 질문에 답하면 가능한 체류 경로와 준비할 일을 확인해요.",
                  action: "자가진단 시작",
                  color: "bg-[#e7f6f0] text-[#2c8069]",
                },
                {
                  number: "02",
                  icon: "location",
                  title: "도움받을 곳 찾기",
                  text: "지역과 필요한 도움을 선택해 검증된 가까운 기관을 찾아요.",
                  action: "기관 지도 보기",
                  color: "bg-[#f1edff] text-[#6e55a6]",
                },
                {
                  number: "03",
                  icon: "book",
                  title: "준비 과정 확인하기",
                  text: "필요 서류와 신청 순서를 쉬운 말로 확인하고 하나씩 준비해요.",
                  action: "비자 가이드 보기",
                  color: "bg-[#fff2d7] text-[#9a6810]",
                },
              ].map((item, index) => (
                <article className="service-card" key={item.number}>
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
                      <Icon name={item.icon as IconName} size={23} />
                    </span>
                    <span className="text-[12px] font-bold text-[#c1ccc8]">{item.number}</span>
                  </div>
                  <h3 className="mt-7 text-[20px] font-extrabold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 min-h-14 text-[14px] leading-6 text-[#62746e]">{item.text}</p>
                  <button
                    className="mt-7 flex items-center gap-1.5 text-[13px] font-bold text-[#286f5c]"
                    onClick={() => {
                      if (index === 0) startDiagnosis();
                      else if (index === 1) openOrgList();
                      else goHome("roadmap");
                    }}
                  >
                    {item.action} <Icon name="arrow" size={16} />
                  </button>
                </article>
              ))}
            </div>

            {diagnosisOpen && (
              <div className="relative mt-6 rounded-[20px] border border-[#efd270] bg-[#fffaf0] p-6 sm:p-8">
                {diagnosisComplete ? (
                  <div>
                    <p className="text-[12px] font-bold text-[#39806d]">자가진단 결과</p>
                    <h3 className="mt-1 text-[20px] font-extrabold">지금 확인할 수 있는 다음 단계예요</h3>
                    <p className="mt-3 text-[14px] leading-6 text-[#516761]">
                      답변은 이 기기에만 임시로 저장됐어요. 결과를 단정하지 않고, 가까운 기관 상담과 함께 확인해 주세요.
                    </p>
                    <ul className="mt-5 space-y-2 text-[13px] text-[#3f493f]">
                      <li>체류 상태: {answers.status ?? "미선택"}</li>
                      <li>가장 필요한 도움: {answers.need ?? "미선택"}</li>
                      <li>생활 지역: {answers.region ?? "미선택"}</li>
                      <li>상담 언어: {answers.language ?? "미선택"}</li>
                    </ul>
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <button className="secondary-button !h-11" onClick={goToPreviousQuestion}>
                        이전
                      </button>
                      <button className="primary-button !h-11" onClick={() => openOrgList()}>
                        가까운 기관 보기
                      </button>
                      <button
                        className="secondary-button !h-11"
                        onClick={() => {
                          setQuestionIndex(0);
                          setAnswers({});
                        }}
                      >
                        다시 하기
                      </button>
                    </div>
                  </div>
                ) : currentQuestion ? (
                  <div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffc93c] font-bold text-[#1f2328]">
                        {questionIndex + 1}
                      </span>
                      <div>
                        <p className="text-[12px] font-bold text-[#39806d]">
                          {questionIndex + 1}번째 질문 · 전체 {diagnosisQuestions.length}개
                        </p>
                        <h3 className="mt-1 text-[18px] font-bold">{currentQuestion.title}</h3>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {currentQuestion.options.map((option) => {
                        const selected = answers[currentQuestion.id] === option;
                        return (
                          <button
                            className={`rounded-xl border px-4 py-2.5 text-[13px] font-bold transition ${
                              selected
                                ? "border-[#f5a800] bg-[#fff6d7]"
                                : "border-[#d8dade] bg-white hover:border-[#f5a800] hover:bg-[#fff6d7]"
                            }`}
                            key={option}
                            onClick={() => selectDiagnosisAnswer(option)}
                            type="button"
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {questionIndex > 0 && (
                      <button className="mt-5 text-[13px] font-bold text-[#286f5c]" onClick={goToPreviousQuestion} type="button">
                        이전
                      </button>
                    )}
                  </div>
                ) : (
                  <p className="text-[14px] text-[#58716a]">질문을 불러오지 못했어요. 다시 시작해 주세요.</p>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#f6f8f7] py-20 sm:py-24" id="roadmap">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="text-center">
              <p className="section-eyebrow">체류·비자 로드맵</p>
              <h2 className="section-title">앞으로의 길을 미리 살펴보세요</h2>
              <p className="section-copy mx-auto">지금 어디에 있든, 다음 단계에 무엇을 준비해야 할지 알 수 있어요.</p>
            </div>

            <div className="relative mt-14 grid gap-4 md:grid-cols-3">
              <div className="absolute left-[16.7%] right-[16.7%] top-[42px] hidden border-t-2 border-dashed border-[#b8d4ca] md:block" />
              {visaGuides.map((guide, index) => (
                <article className="roadmap-card" key={guide.id}>
                  <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full border-[7px] border-[#f6f8f7] bg-[#dff1ea] text-[#2f806b]">
                    <Icon name={guide.icon} size={28} />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2f8972] text-[10px] font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="mt-4 rounded-[22px] bg-white p-6 text-center shadow-[0_8px_30px_rgba(24,62,52,.06)]">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[12px] font-bold text-[#71847e]">{guide.stage}</span>
                      <span className="rounded-full bg-[#fff1d3] px-2 py-1 text-[10px] font-bold text-[#92620a]">{guide.badge}</span>
                    </div>
                    <h3 className="mt-3 text-[17px] font-extrabold">{guide.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#657771]">{guide.summary}</p>
                    <button
                      className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold text-[#2f806b]"
                      onClick={() => openVisaDetail(guide.id)}
                      type="button"
                    >
                      자세히 보기 <Icon name="arrow" size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#e3ddd0] bg-[#fffaf0] p-4 text-[12px] leading-5 text-[#716249]">
              <Icon name="sparkle" size={17} />
              <p><strong>꼭 확인해 주세요.</strong> 체류자격 요건은 개인 상황과 정책 변경에 따라 달라질 수 있어요. 결과를 단정하지 않고, 전문가 상담을 함께 안내합니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="organizations">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow">검증된 지원기관</p>
                <h2 className="section-title">가까운 곳에서 도움받아요</h2>
                <p className="section-copy">기관의 안전 정보와 최근 확인일을 먼저 확인할 수 있어요.</p>
              </div>
              <button className="secondary-button !h-11 !px-5" onClick={openOrgList} type="button">
                지도에서 전체 보기 <Icon name="arrow" size={16} />
              </button>
            </div>

            <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  className={`shrink-0 rounded-full px-4 py-2.5 text-[12px] font-bold transition ${
                    activeCategory === category
                      ? "bg-[#173e35] text-white"
                      : "border border-[#dfe8e4] bg-white text-[#60726c] hover:border-[#8fb4a9]"
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {filteredOrganizations.slice(0, 3).map((organization) => (
                <article className="organization-card" key={organization.id}>
                  <div className="flex items-start justify-between">
                    <span className={`org-icon ${organization.color}`}>
                      <Icon name={organization.icon} size={22} />
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-[#e7f6ef] px-2.5 py-1.5 text-[10px] font-bold text-[#28765f]">
                      <Icon name="check" size={12} /> 확인 완료
                    </span>
                  </div>
                  <p className="mt-5 text-[11px] font-bold text-[#47776a]">{organization.category}</p>
                  <h3 className="mt-1 text-[17px] font-extrabold tracking-[-0.02em]">{organization.name}</h3>
                  <p className="mt-2 text-[13px] text-[#677973]">{organization.description}</p>
                  <div className="mt-5 space-y-2 border-t border-[#edf1ef] pt-4 text-[11px] text-[#6d7e78]">
                    <p className="flex items-center gap-2"><Icon name="pin" size={14} />서울시 기준 {organization.distance}</p>
                    <p className="flex items-center gap-2"><Icon name="language" size={14} />{organization.languages}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-[#899792]">최근 확인 2026. 09. 20</span>
                    <button
                      aria-label={`${organization.name} 상세 보기`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eff6f3] text-[#397463]"
                      onClick={() => openOrgDetail(organization.id, "home")}
                      type="button"
                    >
                      <Icon name="arrow" size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            {filteredOrganizations.length === 0 && (
              <p className="mt-6 rounded-2xl border border-[#e1e4e7] bg-[#f7f8fa] p-6 text-center text-[14px] text-[#5b6470]">
                이 분류에 해당하는 기관을 찾지 못했어요.
              </p>
            )}
          </div>
        </section>

        <section className="border-y border-[#e6e8eb] bg-[#f7f8fa] py-20">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="section-eyebrow">최근 업데이트</p>
                <h2 className="section-title">달라진 정보를 놓치지 마세요</h2>
                <p className="section-copy">공식 자료를 확인한 정보만 알기 쉽게 정리해요.</p>
              </div>
              <button className="inline-flex min-h-11 items-center gap-1 text-[13px] font-bold text-[#2b6cf0]">
                업데이트 전체 보기 <Icon name="arrow" size={16} />
              </button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["제도 변경", "체류자격 신청 전에 확인할 최신 안내", "법무부 공고를 기준으로 달라진 내용을 정리했어요.", "2026. 10. 08"],
                ["준비 정보", "TOPIK 시험 일정과 접수 방법", "한국어 능력 요건을 준비할 때 필요한 일정을 확인해요.", "2026. 10. 03"],
                ["지역 안내", "지역특화형 비자 대상 지역 확인하기", "거주 희망 지역에 따라 확인해야 할 조건을 알려드려요.", "2026. 09. 28"],
              ].map(([badge, title, description, date]) => (
                <article className="rounded-[20px] border border-[#e1e4e7] bg-white p-6" key={title}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#fff2c6] px-2.5 py-1 text-[11px] font-bold text-[#765000]">{badge}</span>
                    <span className="text-[11px] text-[#7b838d]">확인 {date}</span>
                  </div>
                  <h3 className="mt-5 break-keep text-[17px] font-extrabold leading-7">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#5b6470]">{description}</p>
                  <button className="mt-5 flex min-h-11 items-center gap-1 text-[12px] font-bold text-[#2b6cf0]">
                    내용 확인하기 <Icon name="arrow" size={14} />
                  </button>
                </article>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-[12px] text-[#5b6470]">
              <Icon name="shield" size={16} />
              모든 정보에 출처와 마지막 확인일을 표시해요.
            </div>
          </div>
        </section>

        <section className="bg-[#f6f1e7] py-16" id="stories">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-5 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#b17424] shadow-sm">
                <Icon name="message" size={23} />
              </span>
              <h2 className="mt-5 text-[28px] font-extrabold tracking-[-0.04em]">혼자 고민하지 않아도 괜찮아요</h2>
              <p className="mt-3 max-w-md text-[14px] leading-6 text-[#6d675c]">잘 모르겠거나 내 상황을 직접 설명하고 싶다면, 익명 상담이 가능한 기관에 연결해 드릴게요.</p>
            </div>
            <div className="rounded-[26px] bg-white p-6 shadow-[0_10px_35px_rgba(91,73,39,.08)] sm:flex sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-[12px] font-bold text-[#a1661d]">상담 전에도 안심하세요</p>
                <ul className="mt-3 space-y-2 text-[13px] font-semibold text-[#3f493f]">
                  <li className="flex items-center gap-2"><Icon name="check" size={15} />실명과 상세 신상은 선택 사항이에요</li>
                  <li className="flex items-center gap-2"><Icon name="check" size={15} />사용 언어와 상담 방식을 고를 수 있어요</li>
                </ul>
              </div>
              <button className="primary-button mt-6 !h-12 sm:mt-0">안전하게 상담 연결 <Icon name="arrow" size={17} /></button>
            </div>
          </div>
        </section>
        </>
        )}

        {view === "org-list" && (
          <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-[1180px] px-5">
              <button className="mb-6 text-[13px] font-bold text-[#286f5c]" onClick={() => goHome("organizations")} type="button">
                ← 뒤로 가기
              </button>
              <p className="section-eyebrow">검증된 지원기관</p>
              <h2 className="section-title">지도에서 전체 보기</h2>
              <p className="section-copy">등록된 기관을 모두 확인하고, 화살표를 눌러 상세 정보를 볼 수 있어요.</p>
              <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    className={`shrink-0 rounded-full px-4 py-2.5 text-[12px] font-bold transition ${
                      activeCategory === category
                        ? "bg-[#173e35] text-white"
                        : "border border-[#dfe8e4] bg-white text-[#60726c] hover:border-[#8fb4a9]"
                    }`}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {filteredOrganizations.map((organization) => (
                  <article className="organization-card" key={organization.id}>
                    <div className="flex items-start justify-between">
                      <span className={`org-icon ${organization.color}`}>
                        <Icon name={organization.icon} size={22} />
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-[#e7f6ef] px-2.5 py-1.5 text-[10px] font-bold text-[#28765f]">
                        <Icon name="check" size={12} /> 확인 완료
                      </span>
                    </div>
                    <p className="mt-5 text-[11px] font-bold text-[#47776a]">{organization.category}</p>
                    <h3 className="mt-1 text-[17px] font-extrabold tracking-[-0.02em]">{organization.name}</h3>
                    <p className="mt-2 text-[13px] text-[#677973]">{organization.description}</p>
                    <div className="mt-5 space-y-2 border-t border-[#edf1ef] pt-4 text-[11px] text-[#6d7e78]">
                      <p className="flex items-center gap-2"><Icon name="pin" size={14} />서울시 기준 {organization.distance}</p>
                      <p className="flex items-center gap-2"><Icon name="language" size={14} />{organization.languages}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] text-[#899792]">최근 확인 2026. 09. 20</span>
                      <button
                        aria-label={`${organization.name} 상세 보기`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eff6f3] text-[#397463]"
                        onClick={() => openOrgDetail(organization.id, "org-list")}
                        type="button"
                      >
                        <Icon name="arrow" size={15} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              {filteredOrganizations.length === 0 && (
                <p className="mt-6 rounded-2xl border border-[#e1e4e7] bg-[#f7f8fa] p-6 text-center text-[14px] text-[#5b6470]">
                  이 분류에 해당하는 기관을 찾지 못했어요.
                </p>
              )}
            </div>
          </section>
        )}

        {view === "org-detail" && (
          <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-[720px] px-5">
              {selectedOrganization ? (
                <>
                  <button
                    className="mb-6 text-[13px] font-bold text-[#286f5c]"
                    onClick={() => {
                      if (orgReturnView === "org-list") openOrgList();
                      else goHome("organizations");
                    }}
                    type="button"
                  >
                    ← 뒤로 가기
                  </button>
                  <span className={`org-icon ${selectedOrganization.color}`}>
                    <Icon name={selectedOrganization.icon} size={22} />
                  </span>
                  <p className="mt-5 text-[12px] font-bold text-[#47776a]">{selectedOrganization.category}</p>
                  <h2 className="mt-1 text-[28px] font-extrabold tracking-[-0.04em]">{selectedOrganization.name}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#516761]">{selectedOrganization.description}</p>
                  <dl className="mt-8 space-y-3 text-[14px]">
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-[#3f493f]">주소</dt><dd>{selectedOrganization.address}</dd></div>
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-[#3f493f]">운영시간</dt><dd>{selectedOrganization.hours}</dd></div>
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-[#3f493f]">전화</dt><dd>{selectedOrganization.phone}</dd></div>
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-[#3f493f]">언어</dt><dd>{selectedOrganization.languages}</dd></div>
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-[#3f493f]">거리</dt><dd>서울시 기준 {selectedOrganization.distance}</dd></div>
                  </dl>
                  <h3 className="mt-8 text-[16px] font-extrabold">지원 내용</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] text-[#3f493f]">
                    {selectedOrganization.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                  <p className="mt-6 rounded-2xl border border-[#e3ddd0] bg-[#fffaf0] p-4 text-[13px] leading-6 text-[#716249]">
                    {selectedOrganization.notes}
                  </p>
                </>
              ) : (
                <div className="py-10 text-center">
                  <h2 className="text-[22px] font-extrabold">찾을 수 없어요</h2>
                  <p className="mt-2 text-[14px] text-[#5b6470]">요청하신 기관 정보를 불러오지 못했어요.</p>
                  <button className="primary-button mt-6 !h-11" onClick={openOrgList} type="button">
                    목록으로 돌아가기
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {view === "visa-detail" && (
          <section className="bg-[#f6f8f7] py-12 sm:py-16">
            <div className="mx-auto max-w-[720px] px-5">
              {selectedVisa ? (
                <article className="rounded-[22px] bg-white p-6 shadow-[0_8px_30px_rgba(24,62,52,.06)] sm:p-8">
                  <button className="mb-6 text-[13px] font-bold text-[#286f5c]" onClick={() => goHome("roadmap")} type="button">
                    ← 뒤로 가기
                  </button>
                  <p className="text-[12px] font-bold text-[#9b6200]">{selectedVisa.stage} · {selectedVisa.badge}</p>
                  <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.04em]">{selectedVisa.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#516761]">{selectedVisa.summary}</p>
                  <section className="mt-8">
                    <h3 className="text-[16px] font-extrabold">대상</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#3f493f]">{selectedVisa.audience}</p>
                  </section>
                  <section className="mt-6">
                    <h3 className="text-[16px] font-extrabold">요건</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-6 text-[#3f493f]">
                      {selectedVisa.requirements.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                  <section className="mt-6">
                    <h3 className="text-[16px] font-extrabold">서류</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-6 text-[#3f493f]">
                      {selectedVisa.documents.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                  <section className="mt-6">
                    <h3 className="text-[16px] font-extrabold">절차</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-[14px] leading-6 text-[#3f493f]">
                      {selectedVisa.process.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </section>
                  <section className="mt-6">
                    <h3 className="text-[16px] font-extrabold">유의사항</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-6 text-[#3f493f]">
                      {selectedVisa.cautions.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                </article>
              ) : (
                <div className="rounded-[22px] bg-white p-8 text-center">
                  <h2 className="text-[22px] font-extrabold">찾을 수 없어요</h2>
                  <p className="mt-2 text-[14px] text-[#5b6470]">요청하신 비자 안내를 찾지 못했어요.</p>
                  <button className="primary-button mt-6 !h-11" onClick={() => goHome("roadmap")} type="button">
                    목록으로 돌아가기
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#1f2328] text-white">
        <div className="mx-auto max-w-[1180px] px-5 py-12">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-9 md:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="logo-mark light"><span /><span /><span /></span>
                <span className="text-[20px] font-extrabold">모아잇다</span>
              </div>
              <p className="mt-4 max-w-sm text-[12px] leading-5 text-white/55">미등록 이주아동·청소년이 안전하게 자신의 길을 찾도록 정확한 정보와 검증된 기관을 연결합니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[12px] text-white/65 sm:grid-cols-4">
              <button>서비스 소개</button><button>개인정보 처리방침</button><button>기관 등록</button><button>정보 오류 신고</button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-white/40 sm:flex-row">
            <p>본 서비스는 정보 제공을 목적으로 하며 법률 자문을 대신하지 않습니다.</p>
            <p>© 2026 MOAITDA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {chatbotOpen && (
        <>
          <button
            aria-label="AI 챗봇 닫기"
            className="fixed inset-0 z-40 bg-black/20 md:bg-transparent"
            onClick={() => setChatbotOpen(false)}
          />
          <section
            aria-label="모아잇다 AI 챗봇"
            aria-modal="true"
            className="fixed inset-x-3 bottom-[84px] z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-[20px] border border-[#dfe2e5] bg-white shadow-[0_16px_48px_rgba(31,35,40,.18)] md:inset-x-auto md:bottom-6 md:right-6 md:h-[590px] md:max-h-[calc(100vh-48px)] md:w-[390px]"
            role="dialog"
          >
            <div className="flex items-center gap-3 border-b border-[#e6e8eb] bg-[#fff8df] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffc93c]">
                <Icon name="sparkle" size={20} />
              </span>
              <div className="flex-1">
                <h2 className="text-[15px] font-extrabold">모아잇다 AI 안내</h2>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#5b6470]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1e9e6a]" />
                  검증된 정보로 답변해요
                </p>
              </div>
              <button
                aria-label="챗봇 닫기"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#5b6470] hover:bg-black/5"
                onClick={() => setChatbotOpen(false)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-[#f7f8fa] p-4">
              <div className="max-w-[88%] rounded-[16px] rounded-tl-sm border border-[#e6e8eb] bg-white p-4 text-[13px] leading-6">
                안녕하세요. 체류자격, 준비 서류, 지원기관에 대해 쉬운 말로 안내해 드릴게요.
                <p className="mt-2 text-[11px] text-[#7b838d]">개인정보는 입력하지 않아도 돼요.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["나에게 가능한 비자", "필요한 서류", "가까운 상담 기관"].map((question) => (
                  <button
                    className="min-h-10 rounded-full border border-[#d8dade] bg-white px-3 text-[11px] font-bold hover:border-[#f5a800] hover:bg-[#fff8df]"
                    key={question}
                    onClick={() => {
                      setChatSent(question);
                      setChatQuestion("");
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
              {chatSent && (
                <>
                  <div className="ml-auto max-w-[82%] rounded-[16px] rounded-tr-sm bg-[#ffc93c] p-3 text-[13px] font-semibold">
                    {chatSent}
                  </div>
                  <div className="max-w-[88%] rounded-[16px] rounded-tl-sm border border-[#e6e8eb] bg-white p-4 text-[13px] leading-6">
                    정확한 안내를 위해 현재 재학 여부와 국내 체류 기간을 먼저 확인해야 해요. 자가진단을 이용하면 가능한 경로와 더 확인할 조건을 함께 볼 수 있어요.
                    <button
                      className="mt-3 flex min-h-10 w-full items-center justify-between rounded-xl bg-[#1f2328] px-3 font-bold text-white"
                      onClick={() => {
                        setChatbotOpen(false);
                        startDiagnosis();
                      }}
                    >
                      자가진단 시작하기 <Icon name="arrow" size={15} />
                    </button>
                    <p className="mt-3 border-t border-[#eceef0] pt-2 text-[10px] text-[#7b838d]">
                      근거: 체류자격 가이드 · 확인일 2026. 10. 08
                    </p>
                  </div>
                </>
              )}
            </div>

            <form
              className="border-t border-[#e6e8eb] bg-white p-3"
              onSubmit={(event) => {
                event.preventDefault();
                if (!chatQuestion.trim()) return;
                setChatSent(chatQuestion.trim());
                setChatQuestion("");
              }}
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#cfd3d7] bg-white p-1.5 focus-within:border-[#f5a800]">
                <label className="sr-only" htmlFor="chat-question">질문 입력</label>
                <input
                  className="min-w-0 flex-1 bg-transparent px-2 text-[13px] outline-none placeholder:text-[#9aa0a6]"
                  id="chat-question"
                  onChange={(event) => setChatQuestion(event.target.value)}
                  placeholder="궁금한 내용을 입력해 주세요"
                  value={chatQuestion}
                />
                <button
                  aria-label="질문 보내기"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ffc93c] text-[#1f2328] disabled:opacity-40"
                  disabled={!chatQuestion.trim()}
                  type="submit"
                >
                  <Icon name="arrow" size={18} />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-[#7b838d]">AI 답변은 참고용이며 법률 자문을 대신하지 않아요.</p>
            </form>
          </section>
        </>
      )}

      <nav
        aria-label="모바일 주요 메뉴"
        className="fixed inset-x-0 bottom-0 z-50 grid h-[72px] grid-cols-4 border-t border-[#e1e4e7] bg-white px-2 md:hidden"
      >
        {[
          ["home", "홈", "home"],
          ["organizations", "지도", "location"],
          ["roadmap", "비자 가이드", "book"],
          ["stories", "질문하기", "message"],
        ].map(([id, label, icon], index) => (
          <button
            className={`flex min-h-11 flex-col items-center justify-center gap-1 text-[10px] font-bold ${
              index === 0 ? "text-[#1f2328]" : "text-[#7b838d]"
            }`}
            key={id}
            onClick={() => {
              if (id === "stories") setChatbotOpen(true);
              else if (id === "organizations") openOrgList();
              else goHome(id);
            }}
          >
            <span className={index === 0 ? "rounded-xl bg-[#ffc93c] p-1.5" : "p-1.5"}>
              <Icon name={icon as IconName} size={19} />
            </span>
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default function Root() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
