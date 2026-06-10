/* ===== DATA ===== */
const D = {
  meta: {
    title: "밀양 팔경 풀빌라",
    titleEn: "MIRYANG PALGYEONG POOLVILLA",
    location: "경상남도 밀양시 단장면 감물리 656번지<br>도로명 주소: 밀양시 단장면 감물리 용소길 115번길 ",
    phone: "010-4362-7200",
    kakaoChannel: "http://pf.kakao.com/_GuxinX/chat",
    instagram: "#",
    naverBooking: "#",
    owner: "박희설",
    bizNo: "598-88-03399",
    mailOrderNo: "통신판매업신고번호"
  },
  navigation: {
    logo: "밀양 팔경",
    links: [
      { label: "HOME", href: "index.html" },
      { label: "ROOMS", href: "rooms.html" },
      { label: "SPECIAL", href: "special.html" },
      { label: "BOOKING GUIDE", href: "booking.html" }
    ]
  },
  hero: {
    slides: [
      { src: "sample/0.webp", alt: "밀양팔경 풀빌라" },
      { src: "sample/1.webp", alt: "밀양팔경 풀빌라 전경" },
      { src: "sample/2.webp", alt: "프라이빗 풀장" },
      { src: "sample/3.webp", alt: "객실 내부" },
      { src: "sample/4.webp", alt: "야외 공간" },
    ]
  },
  intro: {
    features: [
      { icon: "🌙", label: "별이 쏟아지는 밤하늘", desc: "도심에서 벗어난 맑은 하늘" },
      { icon: "🏔", label: "산 정상의 절경", desc: "밀양 팔경을 품은 뷰" },
      { icon: "🐾", label: "반려동물 동반 가능", desc: "펫 프렌들리 전용 객실" },
      { icon: "🔥", label: "오로라 불멍", desc: "독채 앞 프라이빗 화롯대" }
    ]
  },
  rooms: [
    { id: "yeongnamru", nameKo: "영남루 야경", nameEn: "YEONGNAMRU", num: "01", typeLabel: "애견 동반동 · 산책로 인접", concept: "별빛 아래 반려견과 함께하는 고즈넉한 밤", desc: "밀양강에 비친 영남루의 야경처럼 밤이 가장 아름다운 객실입니다. 쏟아지는 별빛 아래 반려견과 함께 산책로를 거닐며 도심에서는 느낄 수 없는 진한 힐링을 경험하세요.", img: "miryangpalgyeong/yeongnamru.webp" },
    { id: "hobakso", nameKo: "시례 호박소", nameEn: "HOBAKSO", num: "02", typeLabel: "애견 동반동 · 산책로 인접", concept: "반려견과 함께 누리는 청량한 자연 속 활력", desc: "백운산 자락 호박소 계곡의 시원한 기운을 담은 객실입니다. 맑은 산 공기 속에서 반려견과 함께 텃밭과 산책로를 자유롭게 오가며 생기 넘치는 하루를 보낼 수 있습니다.", img: "miryangpalgyeong/hobakso.webp" },
    { id: "pyeochungsa", nameKo: "표충사 사계", nameEn: "PYEOCHUNGSA", num: "03", typeLabel: "애견 동반동 · 산책로 인접", concept: "반려견과 사계절 내내 즐기는 포근한 평온", desc: "재약산 표충사가 품은 사계절의 다채로움처럼, 봄꽃부터 단풍까지 어느 계절에 방문해도 반려견과 함께 계절의 변화를 온몸으로 느끼며 아늑한 휴식을 즐길 수 있습니다.", img: "miryangpalgyeong/pyeochungsa.webp" },
    { id: "wolyeonjeong", nameKo: "월연정 풍경", nameEn: "WOLYEONJEONG", num: "04", typeLabel: "애견 동반동 · 산책로 인접", concept: "반려견과 함께 그리는 수묵화 같은 낭만", desc: "달빛이 머무는 월연정의 아름다움을 담아, 반려견과 함께 호젓한 산책로를 거닐고 창밖 절경을 바라보며 잔잔하고 로맨틱한 시간을 보내기 좋은 공간입니다.", img: "miryangpalgyeong/wolyeonjeong.webp" },
    { id: "jaeyaksan", nameKo: "재약산 억새", nameEn: "JAEYAKSAN", num: "05", typeLabel: "일반동 · 마운틴뷰", concept: "억새 능선 너머 탁 트인 마운틴뷰", desc: "황금빛 억새가 파도치는 재약산 능선을 담은 객실입니다. 풀장에 몸을 담그며 탁 트인 마운틴뷰를 마주하는 순간, 일상의 모든 것을 내려놓는 진정한 자유를 느낄 수 있습니다.", img: "miryangpalgyeong/jaeyaksan.webp" },
    { id: "gajisan", nameKo: "가지산 비경", nameEn: "GAJISAN", num: "06", typeLabel: "일반동 · 마운틴뷰", concept: "밀양을 감싸는 웅장한 마운틴뷰", desc: "밀양을 품은 가지산의 웅장한 비경을 눈앞에 담은 객실입니다. 산 정상의 맑은 공기를 마시며 탁 트인 절경을 조망하는 고요하고 깊은 쉼을 선사합니다.", img: "miryangpalgyeong/gajisan.webp" },
    { id: "maneorsa", nameKo: "만어사 운해", nameEn: "MANEORSA", num: "07", typeLabel: "일반동 · 마운틴뷰", concept: "구름 바다 위에 떠 있는 신비로운 마운틴뷰", desc: "만어산 꼭대기에서 만나는 신비로운 운해를 담은 객실입니다. 새벽 구름이 산자락을 감싸는 장관을 풀장에서 바라보며 세상과 완전히 단절된 듯한 특별한 경험을 제공합니다.", img: "miryangpalgyeong/maneorsan.webp" },
    { id: "jongnamsan", nameKo: "종남산 진달래", nameEn: "JONGNAMSAN", num: "08", typeLabel: "일반동 · 마운틴뷰", concept: "진달래처럼 화사하게 물드는 마운틴뷰", desc: "봄날 종남산을 분홍빛으로 물들이는 진달래처럼, 계절마다 다른 빛깔로 물드는 아름다운 마운틴뷰를 누리며 다정하고 화사한 힐링의 시간을 즐길 수 있는 객실입니다.", img: "miryangpalgyeong/jongnamsan.webp" }
  ],
  roomSpec: [
    "프라이빗 개별 풀장", "대형 거실", "욕실 1개", "싱크대 및 인덕션 1구",
    "대형 냉장고", "아일랜드 식탁", "대형 TV", "얼음 정수기",
    "고성능 공기청정기", "풀파워 에어컨 2대", "프리미엄 럭셔리 침대",
    "독채 전용 오로라 화롯대", "프라이빗 야외 바베큐장"
  ],
  special: [
    {
      id: "pool", title: "SWIMMING POOL", titleKo: "개별 사계절 미온수 풀", icon: "💧", img: "special-services/swimming-pool.jpeg",
      price: "당일권 80,000원 / 퇴실권 100,000원", priceNote: "현장 결제 · 입실 3일 전 사전 예약 필수",
      details: ["수온 약 31~33도 고정 제어", "당일권: 15시~20시", "퇴실권: 당일 15시~20시 + 다음날 8시~11시", "수영복 착용 필수 (수영모 권장)", "풀장 내 오일·입욕제·음식물 반입 금지"]
    },
    {
      id: "bbq", title: "BBQ", titleKo: "프라이빗 숯불 바베큐", icon: "🍖", img: "special-services/bbq.jpeg",
      price: "기본 50,000원", priceNote: "숯불·불판 일체 제공 · 현장 결제",
      details: ["인원 상관없이 기본 50,000원", "숯 1봉지 추가 시 5,000원", "야외 지정 바베큐장 이용"]
    },
    {
      id: "campfire", title: "CAMPFIRE", titleKo: "오로라 불멍", icon: "✨", img: "special-services/aurora-campfire.jpeg",
      price: "객실 포함", priceNote: "독채 바로 앞 전용 화롯대",
      details: ["산 정상의 투명한 공기 속 별빛 감상", "독채 바로 앞 개별 오로라 화롯대", "낭만적인 불멍 타임"]
    },
    {
      id: "nature", title: "NATURE & SERVICE", titleKo: "자연 놀이터 & 매점", icon: "🐾", img: "special-services/nature-store.jpeg",
      price: "이용 가능 시설", priceNote: "풀빌라 자체 매점 별도 운영",
      details: ["풀빌라 자체 매점 운영", "친환경 나무 산책코스", "싱그러운 텃밭 이용 가능", "토끼·염소·마스코트 진돗개 '팔경이' 만남"]
    },
    {
      id: "karaoke", title: "MOBILE KARAOKE", titleKo: "이동식 노래방", icon: "🎤", img: "special-services/mobile-karaoke.webp",
      price: "30,000원 / 1시간", priceNote: "현장 결제 · 사전 예약 필수",
      details: ["1시간 기준 30,000원", "타 고객 예약 시 이용 시간 조절이 필요할 수 있습니다", "자세한 이용 문의는 카카오 채널 또는 전화로 연락해 주세요"],
      disclaimer: "※ 사진은 실제 대여해드리는 기기와 다를 수 있습니다"
    }
  ],
  pricing: {
    base: 2,
    rows: [
      { season: "비수기", type: "주중 (일~목)", price: 250000 },
      { season: "",       type: "주말 (금~토)", price: 350000 },
      { season: "성수기", type: "하계 7월 초 ~ 8월 말 / 동계 12월 ~ 2월", price: 550000, peak: true }
    ],
    extra: { unit: "1인당 30,000원 추가", max: "최대 6인" }
  },
  booking: {
    checkin: "오후 3시",
    checkout: "오전 11시",
    guests: { base: 2, max: 6, extraFee: 30000, extraInclude: "베개·이불 세트 제공" },
    rules: [
      { title: "객실 정리", desc: "퇴실 시 사용한 식기류는 깨끗이 정리 후 쓰레기는 지정된 장소에 분리수거해 주세요" },
      { title: "손해 배상", desc: "가구·가전·시설물 파손 및 오염 발생 즉시 관리동에 알려주셔야 하며, 확인 후 손해배상이 청구될 수 있습니다" },
      { title: "실내 취사 제한", desc: "화재 예방을 위해 객실 내 육류·생선류 등 직화 구이는 절대 금지합니다 (야외 지정 바베큐장 이용)" },
      { title: "매너 타임", desc: "오후 10시 이후 고성방가 및 타 객실에 피해를 주는 소음 행위는 엄격히 금지합니다" }
    ],
    petRules: [
      { icon: "🐕", text: "반려견은 기본 1마리이며 중소형견(12kg 이하)만 동반 가능합니다" },
      { icon: "💰", text: "반려견 추가 시 1마리당 20,000원의 추가 요금이 발생하며 체크인 시 현장 결제합니다" },
      { icon: "🏠", text: "반려견 동반은 애견 동반 객실(1~4동) 예약 시에만 가능하며 일반동(5~8동) 입실은 불가합니다" },
      { icon: "🧻", text: "침구류 및 가구 오염 방지를 위해 객실 내에서 반려견은 매너벨트 및 기저귀 착용이 필수입니다" },
      { icon: "🦮", text: "야외 공용 공간 이동 시 반드시 리드줄을 착용하고 배설물은 견주가 즉시 수거해야 합니다 (객실 내 배변패드 제공 안함)" },
      { icon: "🚫", text: "반려견을 객실에 혼자 방치한 채 외출할 수 없으며 견주 부주의로 인한 사고는 펜션에서 책임지지 않습니다" }
    ],
    poolSafety: [
      { icon: "🍺", rule: "음주 후 입수 절대 금지", desc: "음주 상태에서의 입수는 익수 사고의 가장 큰 원인입니다 과음 후에는 절대 수영장을 이용하지 마세요" },
      { icon: "👨‍👦", rule: "어린이 보호자 동반 필수", desc: "수영 미숙자 및 어린이는 반드시 보호자와 함께 입수해야 합니다 어린이 단독 입수는 금지합니다" },
      { icon: "⚠️", rule: "다이빙·점프·과격한 행동 금지", desc: "풀장 내 다이빙, 점프, 뛰기 등 과격한 행동은 미끄럼 사고를 유발할 수 있으니 삼가주세요" },
      { icon: "🏃", rule: "입수 전 준비운동 필수", desc: "갑작스러운 입수는 심장에 부담을 줄 수 있습니다 반드시 준비운동 후 발부터 천천히 입수하세요" },
      { icon: "🤒", rule: "컨디션 저하 시 이용 자제", desc: "발열·피로·두통 등 몸 상태가 좋지 않을 때는 입수를 삼가주세요 심혈관 질환이 있는 분은 각별히 주의하세요" },
      { icon: "🌙", rule: "야간 단독 이용 주의", desc: "야간에는 시야가 좁아져 더 위험합니다 야간 이용 시 보호자에게 미리 알리고 음주 후 야간 입수는 절대 삼가주세요" }
    ],
    refund: [
      { timing: "기본 취소 시", rate: "10% 공제 후 환불" },
      { timing: "이용 10일 전", rate: "20% 공제 후 환불" },
      { timing: "이용 9일 전", rate: "30% 공제 후 환불" },
      { timing: "이용 2일 전", rate: "복리 형태로 10%씩 증가" },
      { timing: "이용 1일 전 / 당일", rate: "환불 절대 불가" }
    ],
    refundNote: "당일 예약 후 당일 취소하는 경우에도 위 취소 수수료 규정이 동일하게 적용됩니다"
  }
};

/* ===== NAV SCROLL ===== */
const nav = document.querySelector('.nav');
if (nav && !nav.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ===== MOBILE MENU ===== */
document.querySelector('.nav-hamburger')?.addEventListener('click', () => {
  document.querySelector('.mobile-menu')?.classList.add('open');
});
document.querySelector('.mobile-menu-close')?.addEventListener('click', () => {
  document.querySelector('.mobile-menu')?.classList.remove('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a =>
  a.addEventListener('click', () => document.querySelector('.mobile-menu')?.classList.remove('open'))
);

/* ===== HERO SLIDER ===== */
(function initHero() {
  const container = document.querySelector('.hero-slides');
  const dotsWrap = document.querySelector('.hero-dots');
  if (!container) return;

  const INTERVAL = 2000;
  let cur = 0;
  let timer = null;
  let paused = false;

  D.hero.slides.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '') + (s.contain ? ' contain' : '');
    slide.innerHTML = `<img src="${s.src}" alt="${s.alt}" ${i === 0 ? '' : 'loading="lazy"'}>`;
    container.appendChild(slide);

    if (dotsWrap) {
      const dot = document.createElement('div');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsWrap.appendChild(dot);
    }
  });

  const slides = container.querySelectorAll('.hero-slide');
  const dots = dotsWrap ? dotsWrap.querySelectorAll('.hero-dot') : null;

  function goTo(n) {
    slides[cur].classList.remove('active');
    if (dots) dots[cur].classList.remove('active');
    cur = ((n % slides.length) + slides.length) % slides.length;
    slides[cur].classList.add('active');
    if (dots) dots[cur].classList.add('active');
  }

  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), INTERVAL);
  }

  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function resetTimer() { stopTimer(); if (!paused) startTimer(); }

  startTimer();

  /* 탭 전환 시 (백그라운드 탭에서 인터벌 누적 방지) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopTimer(); } else { startTimer(); }
  });
})();

/* ===== INTRO FEATURES ===== */
(function initIntro() {
  const el = document.querySelector('.intro-features');
  if (!el) return;
  el.innerHTML = D.intro.features.map(f => `
    <div class="feature-item reveal">
      <div class="feature-label">${f.label}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>`).join('');
})();

/* ===== ROOMS GRID (index) ===== */
(function initRoomsGrid() {
  const grid = document.querySelector('.rooms-grid');
  if (!grid) return;
  grid.innerHTML = D.rooms.map(r => `
    <a href="rooms.html#${r.id}" class="room-card reveal">
      ${r.img
        ? `<img class="room-card-img" src="${r.img}" alt="${r.nameKo}" loading="lazy">`
        : `<div class="room-card-placeholder"><span>사진 추가</span></div>`}
      <div class="room-card-overlay">
        <div class="room-card-num">ROOM ${r.num}</div>
        <div class="room-card-name">${r.nameKo}</div>
        <div class="room-card-en">${r.nameEn}</div>
        <div class="room-card-type">${r.typeLabel}</div>
        <div class="room-card-concept">${r.concept}</div>
      </div>
      <div class="room-card-arrow">→</div>
    </a>`).join('');
})();

/* ===== SPECIAL GRID (index) — marquee ===== */
(function initSpecialGrid() {
  const grid = document.querySelector('.special-grid');
  if (!grid) return;
  const cardHtml = s => `
    <a href="special.html#${s.id}" class="special-card">
      <div class="special-card-placeholder">
        ${s.img
          ? `<img class="special-card-img" src="${s.img}" alt="${s.titleKo}" loading="eager">`
          : `<div style="color:rgba(245,240,232,0.3);font-size:0.72rem;letter-spacing:0.1em;">사진 추가</div>`}
      </div>
      <div class="special-card-overlay">
        <div class="special-card-title">${s.title}</div>
        <div class="special-card-ko">${s.titleKo}</div>
        <div class="special-card-price">${s.price}</div>
      </div>
    </a>`;
  const doubled = [...D.special, ...D.special];
  grid.innerHTML = doubled.map(cardHtml).join('');
})();

/* ===== ROOMS DETAIL PAGE ===== */
(function initRoomsPage() {
  const list = document.querySelector('.room-detail-list');
  if (!list) return;

  const roomPhotoOrders = [
    ['ROOMS/1.webp','ROOMS/2.webp','ROOMS/3.webp','ROOMS/4.webp','ROOMS/5.webp','ROOMS/6.webp'],
    ['ROOMS/2.webp','ROOMS/3.webp','ROOMS/4.webp','ROOMS/5.webp','ROOMS/6.webp','ROOMS/1.webp'],
    ['ROOMS/3.webp','ROOMS/4.webp','ROOMS/5.webp','ROOMS/6.webp','ROOMS/1.webp','ROOMS/2.webp'],
    ['ROOMS/4.webp','ROOMS/5.webp','ROOMS/6.webp','ROOMS/1.webp','ROOMS/2.webp','ROOMS/3.webp'],
    ['ROOMS/5.webp','ROOMS/6.webp','ROOMS/1.webp','ROOMS/2.webp','ROOMS/3.webp','ROOMS/4.webp'],
    ['ROOMS/6.webp','ROOMS/1.webp','ROOMS/2.webp','ROOMS/3.webp','ROOMS/4.webp','ROOMS/5.webp'],
    ['ROOMS/1.webp','ROOMS/3.webp','ROOMS/5.webp','ROOMS/2.webp','ROOMS/4.webp','ROOMS/6.webp'],
    ['ROOMS/2.webp','ROOMS/4.webp','ROOMS/6.webp','ROOMS/1.webp','ROOMS/3.webp','ROOMS/5.webp'],
  ];

  list.innerHTML = D.rooms.map((r, i) => {
    const photos = roomPhotoOrders[i] || roomPhotoOrders[0];
    return `
    <div class="room-item reveal" id="${r.id}">
      <div class="room-item-img">
        <div class="room-slideshow">
          ${photos.map((src, pi) => `<img class="room-slide-img${pi === 0 ? ' active' : ''}" src="${src}" alt="${r.nameKo}" loading="${pi === 0 ? 'eager' : 'lazy'}">`).join('')}
          <button class="room-slide-btn room-slide-prev" aria-label="이전 사진">&#8249;</button>
          <button class="room-slide-btn room-slide-next" aria-label="다음 사진">&#8250;</button>
          <div class="room-slide-dots">
            ${photos.map((_, pi) => `<span class="room-slide-dot${pi === 0 ? ' active' : ''}"></span>`).join('')}
          </div>
        </div>
      </div>
      <div class="room-item-info">
        <div class="room-item-num">0${i + 1}</div>
        <div class="room-item-name">${r.nameKo}</div>
        <div class="room-item-en">${r.nameEn}</div>
        <div class="room-item-type">${r.typeLabel}</div>
        <div class="room-item-divider"></div>
        <div class="room-item-concept">${r.concept}</div>
        <div class="room-item-desc">${r.desc}</div>
        <div class="room-spec-grid">
          ${D.roomSpec.map(s => `<div class="room-spec-item">${s}</div>`).join('')}
        </div>
        <div class="room-price-table">
          <div class="room-price-header">요금 안내 · ${D.pricing.base}인 기준</div>
          ${D.pricing.rows.map(row => `
          <div class="room-price-row${row.peak ? ' room-price-row--peak' : ''}">
            <div class="room-price-season">${row.season}</div>
            <div class="room-price-type">${row.type}</div>
            <div class="room-price-val">${row.price.toLocaleString()}원</div>
          </div>`).join('')}
          <div class="room-price-note">※ 인원 추가 시 ${D.pricing.extra.unit} · ${D.pricing.extra.max}</div>
        </div>
        <a href="booking.html" class="btn-outline" style="margin-top:1rem;">예약 안내 →</a>
        <p class="room-item-notice">안내: 위 사진은 대표 객실 기준 이미지입니다. 모든 객실의 구조 및 옵션은 동일하며, 가구 및 소품 등 객실별 미세한 인테리어 차이가 있을 수 있습니다. (추후 각 객실 실물 사진 업데이트 예정)</p>
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('.room-slideshow').forEach(ss => {
    const imgs = ss.querySelectorAll('.room-slide-img');
    const dots = ss.querySelectorAll('.room-slide-dot');
    let cur = 0;
    function goTo(n) {
      imgs[cur].classList.remove('active');
      dots[cur].classList.remove('active');
      cur = ((n % imgs.length) + imgs.length) % imgs.length;
      imgs[cur].classList.add('active');
      dots[cur].classList.add('active');
    }
    ss.querySelector('.room-slide-prev').addEventListener('click', e => { e.preventDefault(); goTo(cur - 1); });
    ss.querySelector('.room-slide-next').addEventListener('click', e => { e.preventDefault(); goTo(cur + 1); });
    dots.forEach((dot, di) => dot.addEventListener('click', () => goTo(di)));
  });
})();

/* ===== SPECIAL DETAIL PAGE ===== */
(function initSpecialPage() {
  const section = document.querySelector('.services-section');
  if (!section) return;
  section.innerHTML = D.special.map(s => `
    <div class="service-block reveal" id="${s.id}">
      <div class="service-img">
        ${s.img
          ? `<img src="${s.img}" alt="${s.titleKo}" loading="lazy">`
          : `<div class="service-placeholder"><span style="font-size:3rem;opacity:0.12">${s.icon}</span><span>사진 추가</span></div>`}
        ${s.disclaimer ? `<p class="service-disclaimer">${s.disclaimer}</p>` : ''}
      </div>
      <div class="service-info">
        <div class="service-title-en">${s.title}</div>
        <div class="service-title-ko">${s.titleKo}</div>
        <div class="service-divider"></div>
        <div class="service-price-wrap">
          <div class="service-price">${s.price}</div>
          <div class="service-price-note">${s.priceNote}</div>
        </div>
        <div class="service-details">
          ${s.details.map(d => `<div class="service-detail-item">${d}</div>`).join('')}
        </div>
      </div>
    </div>`).join('');
})();

/* ===== BOOKING PAGE ===== */
(function initBookingPage() {
  const bk = D.booking;

  const timeIn = document.querySelector('.checkin-time-in');
  const timeOut = document.querySelector('.checkin-time-out');
  if (timeIn) timeIn.textContent = bk.checkin;
  if (timeOut) timeOut.textContent = bk.checkout;

  const guestEl = document.querySelector('.guest-info');
  if (guestEl) {
    guestEl.innerHTML = `
      <p>기준 <strong>${bk.guests.base}인</strong> / 최대 <strong>${bk.guests.max}인</strong></p>
      <p style="margin-top:0.4rem">인원 추가 시 <strong>1인 ${bk.guests.extraFee.toLocaleString()}원</strong></p>
      <p style="margin-top:0.4rem;font-size:0.75rem;color:var(--text-muted)">${bk.guests.extraInclude}</p>`;
  }

  const ruleList = document.querySelector('.rule-list');
  if (ruleList) {
    ruleList.innerHTML = bk.rules.map((r, i) => `
      <div class="rule-item">
        <div class="rule-num">0${i + 1}</div>
        <div><div class="rule-title">${r.title}</div><div class="rule-desc">${r.desc}</div></div>
      </div>`).join('');
  }

  const ruleListNew = document.querySelector('#ruleListNew');
  if (ruleListNew) {
    ruleListNew.innerHTML = bk.rules.map((r, i) => `
      <div class="rule-item-new">
        <div class="rule-num-badge">0${i + 1}</div>
        <div>
          <div class="rule-title-new">${r.title}</div>
          <div class="rule-desc-new">${r.desc}</div>
        </div>
      </div>`).join('');
  }

  const petGrid = document.querySelector('#petGrid');
  if (petGrid) {
    petGrid.innerHTML = bk.petRules.map(r => `
      <div class="pet-card">
        <div class="pet-icon">${r.icon}</div>
        <div class="pet-text">${r.text}</div>
      </div>`).join('');
  }

  const poolGrid = document.querySelector('#poolSafetyGrid');
  if (poolGrid) {
    poolGrid.innerHTML = bk.poolSafety.map(r => `
      <div class="pet-card">
        <div class="pet-icon">${r.icon}</div>
        <div class="pet-text"><strong style="display:block;margin-bottom:0.3rem;color:var(--dark-text)">${r.rule}</strong>${r.desc}</div>
      </div>`).join('');
  }

  const refundTbody = document.querySelector('.refund-tbody');
  if (refundTbody) {
    refundTbody.innerHTML = bk.refund.map(r => `<tr><td>${r.timing}</td><td>${r.rate}</td></tr>`).join('');
  }

  const refundNote = document.querySelector('.refund-note');
  if (refundNote) refundNote.textContent = '※ ' + bk.refundNote;
})();

/* ===== FLOATING WIDGET ===== */
(function initFloating() {
  const widget = document.querySelector('.floating-widget');
  if (!widget) return;
  widget.innerHTML = `
    <a href="tel:${D.meta.phone}" class="fw-btn">
      <span class="fw-label">전화 상담</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.82a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
    <a href="${D.meta.kakaoChannel}" target="_blank" rel="noopener" class="fw-btn">
      <span class="fw-label">카카오 상담</span>
      <svg viewBox="0 0 24 24" fill="#FAE100" width="22" height="22">
        <path d="M12 3C6.48 3 2 6.69 2 11.25c0 2.88 1.88 5.41 4.72 6.87l-1.2 4.46L10.27 19.3A11.9 11.9 0 0 0 12 19.5c5.52 0 10-3.69 10-8.25S17.52 3 12 3z"/>
      </svg>
    </a>
    <a href="${D.meta.instagram}" target="_blank" rel="noopener" class="fw-btn">
      <span class="fw-label">인스타그램</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="#c9a96e"/>
      </svg>
    </a>`;
})();

/* ===== FOOTER ===== */
(function initFooter() {
  document.querySelectorAll('.footer-info').forEach(el => {
    el.innerHTML = `
      <p>상호명: ${D.meta.title} &nbsp;|&nbsp; 대표자: ${D.meta.owner}</p>
      <p>주소: ${D.meta.location}</p>
      <p>사업자등록번호: ${D.meta.bizNo}</p>
      <p>대표전화: <a href="tel:${D.meta.phone}" style="color:var(--gold)">${D.meta.phone}</a></p>`;
  });
})();

/* ===== BOOKING BTNS ===== */
document.querySelectorAll('[data-kakao]').forEach(el => { if (!el.href || el.href === '#' || el.href.endsWith('#')) el.href = D.meta.kakaoChannel; });
document.querySelectorAll('[data-naver]').forEach(el => { if (!el.href || el.href === '#' || el.href.endsWith('#')) el.href = D.meta.naverBooking; });

/* ===== SCROLL REVEAL ===== */
(function initReveal() {
  /* IntersectionObserver 미지원 환경(구형 브라우저) 폴백 */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }, 100);
})();
