/* ==========================================================================
   ATELIÊ DO SABER - LOGICA DE NEGÓCIO E INTERATIVIDADE
   Loja Virtual de Recursos Didáticos e Atividades Lúdicas
   ========================================================================== */

// 1. DATASET DE PRODUTOS REAIS (SÍTIO DO PICAPAU AMARELO)
const PRODUCTS = [
  {
    id: 'prod-sitio-mega-combo',
    title: 'Super Kit Sala de Aula Completo: Sítio do Picapau Amarelo (18 Recursos em PDF)',
    price: 47.90,
    oldPrice: 197.00,
    category: 'combos',
    categoryName: 'Combos & Packs',
    tag: 'hot',
    tagText: 'Mais Vendido ⭐',
    rating: 5.0,
    reviewsCount: 684,
    pages: 280,
    age: 'Educação Infantil e Fundamental',
    image: 'assets/img/prod-sitio-combo.jpg',
    bncc: 'EI02EO03, EI03EF01, EF01LP01 ao EF01MA04',
    description: 'O pacote definitivo para transformar sua sala de aula! Contém todos os 18 arquivos temáticos do Sítio do Picapau Amarelo: Alfabeto completo, Silabários, Números, Calendário interativo, Chamadinha, Cantinho da leitura, Crachás, Combinados e muito mais.',
    skills: ['Alfabetização Lúdica', 'Rotina e Autonomia Escolar', 'Decoração Pedagógica Completa'],
    files: [
      { name: 'Alfabeto Ilustrado A-Z', file: 'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf' },
      { name: 'Aniversariantes do Mês', file: 'Sitio-do-Pica-pau-Aniversariates-do-mes.pdf' },
      { name: 'Calendário e Como Está o Tempo', file: 'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf' },
      { name: 'Painel Cantinho da Leitura', file: 'Sitio-do-Pica-pau-Cantinho-da-Leitura-@didaticalizando.pdf' },
      { name: 'Chamadinha Interativa', file: 'Sitio-do-Pica-pau-Chamadinha-.pdf' },
      { name: 'Combinados da Turma', file: 'Sitio-do-Pica-pau-Combinados-.pdf' },
      { name: 'Painel das Cores', file: 'Sitio-do-Pica-pau-Cores-@didaticalizando-.pdf' },
      { name: 'Crachás de Mesa para Alunos', file: 'Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf' },
      { name: 'Molduras e Decoração de Sala', file: 'Sitio-do-Pica-pau-Decoracao-@didaticalizando-.pdf' },
      { name: 'Formas Geométricas', file: 'Sitio-do-Pica-pau-Formas-Geometricas.pdf' },
      { name: 'Números e Quantidades 1 a 10', file: 'Sitio-do-Pica-pau-Numeros.pdf' },
      { name: 'Placa Sejam Bem-vindos', file: 'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf' },
      { name: 'Quantos Somos Hoje (Meninos/Meninas)', file: 'Sitio-do-Pica-pau-Quantos-Somos.pdf' },
      { name: 'Silabário de Sílabas Complexas', file: 'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf' },
      { name: 'Silabário de Sílabas Simples', file: 'Sitio-do-Pica-pau-Silabario.pdf.pdf' },
      { name: 'Trenzinho Numérico de Parede', file: 'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf' },
      { name: 'Cartaz das Vogais Ilustradas', file: 'Sitio-do-Pica-pau-Vogais-.pdf' },
      { name: 'Atividade Móvel Vogal do Dia', file: 'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf' }
    ]
  },
  {
    id: 'prod-sitio-kit-alfabetizacao',
    title: 'Kit Alfabetização & Leitura: Sítio do Picapau Amarelo (6 Recursos)',
    price: 29.90,
    oldPrice: 59.90,
    category: 'alfabetizacao',
    categoryName: 'Alfabetização',
    tag: 'bncc',
    tagText: 'Alinhado à BNCC',
    rating: 4.96,
    reviewsCount: 342,
    pages: 95,
    age: '4 a 7 anos',
    image: 'assets/img/prod-sitio-alfabeto.jpg',
    bncc: 'EF01LP01, EF01LP02, EF01LP07, EF01LP08',
    description: 'Tudo para a fase de alfabetização: Alfabeto Ilustrado de parede (A-Z), Silabário Simples, Silabário Complexo, Cartaz das Vogais, Atividade móvel "Vogal do Dia" e painel para o Cantinho da Leitura.',
    skills: ['Consciência Fonológica', 'Famílias Silábicas', 'Reconhecimento das Vogais'],
    files: [
      { name: 'Alfabeto Ilustrado A-Z', file: 'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf' },
      { name: 'Silabário Simples', file: 'Sitio-do-Pica-pau-Silabario.pdf.pdf' },
      { name: 'Silabário Complexo', file: 'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf' },
      { name: 'Cartaz das Vogais', file: 'Sitio-do-Pica-pau-Vogais-.pdf' },
      { name: 'Vogal do Dia', file: 'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf' },
      { name: 'Cantinho da Leitura', file: 'Sitio-do-Pica-pau-Cantinho-da-Leitura-@didaticalizando.pdf' }
    ]
  },
  {
    id: 'prod-sitio-kit-rotina',
    title: 'Kit Rotina & Organização de Sala: Sítio do Picapau Amarelo (6 Recursos)',
    price: 27.90,
    oldPrice: 54.90,
    category: 'infantil',
    categoryName: 'Educação Infantil',
    tag: 'promo',
    tagText: 'Oferta Especial',
    rating: 4.93,
    reviewsCount: 289,
    pages: 75,
    age: '3 a 7 anos',
    image: 'assets/img/prod-sitio-combo.jpg',
    bncc: 'EI02EO03, EI03EO02, EI03ET01',
    description: 'Estruture a rotina da sua turma com encanto: Calendário interativo de dias e meses, Marcador "Como está o tempo hoje?", Painel da Chamadinha, Quantos Somos Hoje (meninos e meninas), Combinados da turma e Placa de Aniversariantes.',
    skills: ['Noção Temporal', 'Socialização e Regras', 'Controle de Presença e Pertencimento'],
    files: [
      { name: 'Calendário e Como Está o Tempo', file: 'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf' },
      { name: 'Chamadinha Interativa', file: 'Sitio-do-Pica-pau-Chamadinha-.pdf' },
      { name: 'Quantos Somos Hoje', file: 'Sitio-do-Pica-pau-Quantos-Somos.pdf' },
      { name: 'Combinados da Turma', file: 'Sitio-do-Pica-pau-Combinados-.pdf' },
      { name: 'Aniversariantes do Mês', file: 'Sitio-do-Pica-pau-Aniversariates-do-mes.pdf' },
      { name: 'Placa Sejam Bem-vindos', file: 'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf' }
    ]
  },
  {
    id: 'prod-sitio-kit-matematica',
    title: 'Kit Matemática Divertida: Trenzinho, Números & Formas (4 Recursos)',
    price: 24.90,
    oldPrice: 48.00,
    category: 'matematica',
    categoryName: 'Matemática',
    tag: 'launch',
    tagText: 'Lançamento',
    rating: 4.91,
    reviewsCount: 198,
    pages: 60,
    age: '3 a 6 anos',
    image: 'assets/img/prod-matematica.jpg',
    bncc: 'EI03ET07, EF01MA01, EF01MA04',
    description: 'Ensine contagem e geometria com os personagens do Sítio: Trenzinho numérico para montagem na parede (vagões numerados), Cartazes dos números e quantidades, Painel das Formas Geométricas e Painel das Cores.',
    skills: ['Sequência Numérica', 'Reconhecimento de Formas', 'Discriminação de Cores'],
    files: [
      { name: 'Trenzinho Numérico de Parede', file: 'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf' },
      { name: 'Números e Quantidades 1 a 10', file: 'Sitio-do-Pica-pau-Numeros.pdf' },
      { name: 'Painel das Formas Geométricas', file: 'Sitio-do-Pica-pau-Formas-Geometricas.pdf' },
      { name: 'Painel Educativo das Cores', file: 'Sitio-do-Pica-pau-Cores-@didaticalizando-.pdf' }
    ]
  },
  {
    id: 'prod-sitio-alfabeto-individual',
    title: 'Alfabeto Ilustrado de Parede A-Z: Sítio do Picapau Amarelo (PDF Alta Resolução)',
    price: 14.90,
    oldPrice: 28.00,
    category: 'alfabetizacao',
    categoryName: 'Alfabetização',
    tag: 'hot',
    tagText: 'Imprescindível',
    rating: 4.98,
    reviewsCount: 421,
    pages: 26,
    age: '4 a 7 anos',
    image: 'assets/img/prod-sitio-alfabeto.jpg',
    bncc: 'EF01LP01, EF01LP02',
    description: 'Cartazes em tamanho A4 de todas as letras do alfabeto (A a Z) com ilustrações exclusivas dos personagens e elementos do Sítio do Picapau Amarelo. Fonte pedagógica clara e quatro tipos de letras.',
    skills: ['Reconhecimento do Alfabeto', 'Associação Fonema-Grafema'],
    files: [
      { name: 'Alfabeto Ilustrado A-Z', file: 'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf' }
    ]
  },
  {
    id: 'prod-sitio-silabarios',
    title: 'Silabário Simples + Silabário Complexo Ilustrado: Sítio do Picapau Amarelo',
    price: 14.90,
    oldPrice: 29.90,
    category: 'leitura',
    categoryName: 'Leitura & BNCC',
    tag: 'bncc',
    tagText: 'Alinhado à BNCC',
    rating: 4.95,
    reviewsCount: 310,
    pages: 35,
    age: '5 a 8 anos',
    image: 'assets/img/prod-sitio-alfabeto.jpg',
    bncc: 'EF01LP08, EF01LP09, EF02LP04',
    description: 'Contém 2 recursos essenciais: o Silabário Simples (todas as famílias silábicas regulares) e o Silabário Complexo (dígrafos, encontros consonantais como CH, LH, NH, BR, CR, etc.). Ideal para consulta diária dos alunos.',
    skills: ['Construção Silábica', 'Ortografia e Fluência'],
    files: [
      { name: 'Silabário Simples Ilustrado', file: 'Sitio-do-Pica-pau-Silabario.pdf.pdf' },
      { name: 'Silabário Complexo Ilustrado', file: 'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf' }
    ]
  },
  {
    id: 'prod-sitio-calendario',
    title: 'Painel Calendário Permanente + Como Está o Tempo Hoje: Sítio do Picapau',
    price: 12.90,
    oldPrice: 25.00,
    category: 'infantil',
    categoryName: 'Educação Infantil',
    tag: 'promo',
    tagText: 'Pronto para Imprimir',
    rating: 4.92,
    reviewsCount: 245,
    pages: 20,
    age: '3 a 7 anos',
    image: 'assets/img/prod-sitio-combo.jpg',
    bncc: 'EI03ET01, EF01MA16',
    description: 'Painel permanente com fichas móveis de dias da semana, números de 1 a 31, meses do ano, anos e marcador com ponteiro ou velcro para "Ensolarado, Chuvoso, Nublado".',
    skills: ['Organização Temporal', 'Observação da Natureza'],
    files: [
      { name: 'Calendário e Como Está o Tempo', file: 'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf' }
    ]
  },
  {
    id: 'prod-sitio-trenzinho',
    title: 'Trenzinho Numérico de Parede (0 a 10): Sítio do Picapau Amarelo',
    price: 12.90,
    oldPrice: 22.00,
    category: 'matematica',
    categoryName: 'Matemática',
    tag: 'launch',
    tagText: 'Sucesso em Sala',
    rating: 4.89,
    reviewsCount: 178,
    pages: 15,
    age: '3 a 6 anos',
    image: 'assets/img/prod-sitio-combo.jpg',
    bncc: 'EI03ET07, EF01MA01',
    description: 'Locomotiva conduzida pela Emília e Visconde com 10 vagões coloridos numerados de 1 a 10 com ilustrações para contagem de flores, frutas e elementos do Sítio. Lindo para a parede da sala!',
    skills: ['Contagem e Cardinalidade', 'Decoração Interativa'],
    files: [
      { name: 'Trenzinho Numérico de Parede', file: 'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf' }
    ]
  },
  {
    id: 'prod-sitio-crachas-decoracao',
    title: 'Kit Boas-Vindas, Crachás de Mesa e Decoração: Sítio do Picapau Amarelo',
    price: 10.90,
    oldPrice: 22.00,
    category: 'infantil',
    categoryName: 'Educação Infantil',
    tag: 'promo',
    tagText: 'Econômico',
    rating: 4.90,
    reviewsCount: 165,
    pages: 18,
    age: 'Todas as idades',
    image: 'assets/img/prod-sitio-combo.jpg',
    bncc: 'EI02EO04, Acolhimento Escolar',
    description: 'Modelos de crachás de mesa para preencher com o nome dos alunos, molduras decorativas para murais e placa colorida "Sejam Bem-vindos" para a porta da sala de aula.',
    skills: ['Identidade e Acolhimento', 'Personalização de Materiais'],
    files: [
      { name: 'Crachás de Mesa para Alunos', file: 'Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf' },
      { name: 'Placa Sejam Bem-vindos', file: 'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf' },
      { name: 'Decoração e Molduras para Sala', file: 'Sitio-do-Pica-pau-Decoracao-@didaticalizando-.pdf' }
    ]
  }
];

// 2. ESTADO DO CARRINHO (LocalStorage)
let cart = JSON.parse(localStorage.getItem('atelie_cart') || '[]');
let activeCoupon = null;
const COUPONS = {
  'PROFESSOR10': 0.10,
  'BEMVINDO': 0.15,
  'SABER20': 0.20
};

// 3. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  initHeroParticles();
  renderProducts(PRODUCTS);
  setupCategoryFilters();
  setupSearch();
  setupSort();
  setupCartEvents();
  setupFaqAccordion();
  setupLeadForm();
  updateCartUI();
});

// 4. RENDERIZAÇÃO DOS PRODUTOS
function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>Nenhum material encontrado</h3>
        <p>Tente buscar por outro termo ou escolha uma categoria diferente acima.</p>
        <button class="btn-primary" style="margin-top:16px" onclick="resetFilters()">Ver todos os materiais</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(prod => `
    <article class="product-card" id="card-${prod.id}">
      <div class="product-media">
        <span class="badge-float ${prod.tag}">${prod.tagText}</span>
        <img src="${prod.image}" alt="${prod.title}" loading="lazy" />
        <button class="quick-view-overlay-btn" id="btn-quickview-${prod.id}" onclick="openQuickView('${prod.id}')">
          👁️ Visualizar Detalhes
        </button>
      </div>
      <div class="product-body">
        <div class="product-meta-row">
          <span class="product-category-name">${prod.categoryName}</span>
          <div class="product-rating">
            <span>★</span>
            <strong>${prod.rating}</strong>
            <span style="color:var(--text-light)">(${prod.reviewsCount})</span>
          </div>
        </div>
        <h3 class="product-title">${prod.title}</h3>
        <div class="product-specs">
          <span>📄 ${prod.pages} págs</span>
          <span>👶 ${prod.age}</span>
          <span>⚡ PDF Alta Resolução</span>
        </div>
        <div class="product-footer">
          <div class="price-box">
            <span class="old-price">R$ ${prod.oldPrice.toFixed(2).replace('.', ',')}</span>
            <span class="current-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button class="btn-add-cart" id="btn-add-${prod.id}" onclick="addToCart('${prod.id}')">
            🛒 Adicionar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. FILTROS DE CATEGORIA E BUSCA
let currentCategory = 'todos';
let currentSearch = '';
let currentSort = 'popular';

function setupCategoryFilters() {
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      applyFilters();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    if (clearBtn) {
      clearBtn.style.display = currentSearch ? 'block' : 'none';
    }
    applyFilters();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      applyFilters();
      searchInput.focus();
    });
  }
}

function setupSort() {
  const sortSelect = document.getElementById('sortSelect');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    applyFilters();
  });
}

function applyFilters() {
  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === 'todos' || p.category === currentCategory;
    const matchesSearch = !currentSearch || 
      p.title.toLowerCase().includes(currentSearch) ||
      p.categoryName.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch);
    return matchesCategory && matchesSearch;
  });

  if (currentSort === 'menor-preco') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'maior-preco') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'avaliacao') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  renderProducts(filtered);
}

function resetFilters() {
  currentCategory = 'todos';
  currentSearch = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.pill-btn').forEach(p => {
    p.classList.toggle('active', p.dataset.category === 'todos');
  });
  applyFilters();
}

// 6. GERENCIAMENTO DO CARRINHO (SIDE DRAWER)
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      pages: product.pages,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  openCartDrawer();
  showToast(`"${product.title}" adicionado ao carrinho! ✨`);
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    showToast('Item removido do carrinho');
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removido');
}

function saveCart() {
  localStorage.setItem('atelie_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCounter');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscountAmount');
  const totalEl = document.getElementById('cartTotalAmount');
  const giftProgress = document.getElementById('giftProgressFill');
  const giftText = document.getElementById('giftProgressText');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (countBadge) countBadge.textContent = totalItems;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let discount = 0;
  if (activeCoupon && COUPONS[activeCoupon]) {
    discount = subtotal * COUPONS[activeCoupon];
  }
  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  // Progresso do brinde grátis (meta de R$ 60)
  const giftGoal = 60.00;
  const progressPercent = Math.min(100, (subtotal / giftGoal) * 100);
  if (giftProgress) giftProgress.style.width = `${progressPercent}%`;
  if (giftText) {
    if (subtotal >= giftGoal) {
      giftText.innerHTML = '🎉 <strong>Parabéns!</strong> Você ganhou o Brinde Especial em PDF!';
    } else {
      const remaining = (giftGoal - subtotal).toFixed(2).replace('.', ',');
      giftText.innerHTML = `Faltam <strong>R$ ${remaining}</strong> para ganhar um Caderno Bônus em PDF!`;
    }
  }

  // Renderizar itens
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <span>🎒</span>
          <h4>Seu carrinho está vazio</h4>
          <p>Adicione cadernos e atividades para começar!</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" />
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
              <button class="cart-item-remove" onclick="removeCartItem('${item.id}')" title="Remover item">🗑️</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function openCartDrawer() {
  const backdrop = document.getElementById('cartBackdrop');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cartBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function setupCartEvents() {
  const cartTrigger = document.getElementById('cartTriggerBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  const backdrop = document.getElementById('cartBackdrop');
  const applyCouponBtn = document.getElementById('btnApplyCoupon');

  if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCartDrawer();
    });
  }

  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const input = document.getElementById('couponInput');
      if (!input) return;
      const code = input.value.trim().toUpperCase();
      if (COUPONS[code]) {
        activeCoupon = code;
        updateCartUI();
        showToast(`Cupom ${code} aplicado! ${(COUPONS[code] * 100)}% de desconto 🎉`);
      } else {
        showToast('Cupom inválido. Tente PROFESSOR10 ou BEMVINDO');
      }
    });
  }
}

// 7. CHECKOUT DE PRODUÇÃO (PIX COM MERCADO PAGO E WHATSAPP)
let activePaymentId = null;
let paymentPollInterval = null;
let currentCustomer = null;

function maskCpf(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 11) val = val.substring(0, 11);
  val = val.replace(/(\d{3})(\d)/, '$1.$2');
  val = val.replace(/(\d{3})(\d)/, '$1.$2');
  val = val.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = val;
}

function startPixCheckout() {
  if (cart.length === 0) {
    showToast('Adicione pelo menos um item ao carrinho primeiro!');
    return;
  }

  closeCartDrawer();

  // Calcular total oficial atualizado
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let discount = activeCoupon && COUPONS[activeCoupon] ? subtotal * COUPONS[activeCoupon] : 0;
  const totalStr = (subtotal - discount).toFixed(2).replace('.', ',');

  // Resetar etapas do modal
  document.getElementById('checkoutStepCustomer').style.display = 'block';
  document.getElementById('checkoutStepQr').style.display = 'none';
  document.getElementById('checkoutStepSuccess').style.display = 'none';

  const formTotalEl = document.getElementById('pixFormTotal');
  if (formTotalEl) formTotalEl.textContent = `R$ ${totalStr}`;

  const pixModal = document.getElementById('pixModalBackdrop');
  if (pixModal) pixModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

async function handleCustomerSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const email = document.getElementById('custEmail').value.trim();
  const cpf = document.getElementById('custCpf').value.trim();

  if (!name || !email || !cpf) {
    showToast('Preencha todos os campos obrigatórios!');
    return;
  }

  currentCustomer = { name, email, cpf };

  const submitBtn = document.getElementById('btnGeneratePix');
  const originalBtnHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>⏳</span> Gerando PIX...';

  try {
    const response = await fetch('/api/create-pix', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart,
        customer: currentCustomer,
        coupon: activeCoupon
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Erro ao gerar cobrança PIX');
    }

    activePaymentId = data.paymentId;

    // Avançar para Etapa 2 (QR Code e Copia e Cola)
    document.getElementById('checkoutStepCustomer').style.display = 'none';
    document.getElementById('checkoutStepQr').style.display = 'block';

    const totalDisplay = document.getElementById('pixModalTotal');
    if (totalDisplay) totalDisplay.textContent = `R$ ${data.amount.toFixed(2).replace('.', ',')}`;

    const pixInput = document.getElementById('pixCodeInput');
    if (pixInput) pixInput.value = data.qrCode;

    // Renderizar QR Code visual
    const qrContainer = document.getElementById('pixQrBox');
    if (qrContainer) {
      if (data.qrCodeBase64) {
        qrContainer.innerHTML = `<img src="${data.qrCodeBase64}" alt="QR Code PIX" style="width:180px;height:180px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1)" />`;
      } else {
        // Fallback visual com gerador de QR code online para demonstração e sandbox
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(data.qrCode)}`;
        qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code PIX" style="width:180px;height:180px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1)" />`;
      }
    }

    showToast('Código PIX gerado com sucesso! Aponte o app do seu banco ou copie o código.');

    // Iniciar monitoramento do pagamento (polling a cada 3.5 segundos)
    startPaymentStatusPolling(data.paymentId);

  } catch (err) {
    console.error('Falha no checkout PIX:', err);
    showToast(err.message || 'Erro ao comunicar com o servidor de pagamento.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }
}

function startPaymentStatusPolling(paymentId) {
  if (paymentPollInterval) clearInterval(paymentPollInterval);

  paymentPollInterval = setInterval(async () => {
    try {
      const res = await fetch(`/api/check-status?id=${paymentId}`);
      if (!res.ok) return;

      const data = await res.json();
      if (data.status === 'approved') {
        clearInterval(paymentPollInterval);
        handlePaymentApproved(data);
      }
    } catch (e) {
      console.warn('Polling check error:', e);
    }
  }, 3500);
}

function handlePaymentApproved(data) {
  if (paymentPollInterval) clearInterval(paymentPollInterval);

  document.getElementById('checkoutStepCustomer').style.display = 'none';
  document.getElementById('checkoutStepQr').style.display = 'none';
  document.getElementById('checkoutStepSuccess').style.display = 'block';

  const emailDisplay = document.getElementById('successCustomerEmail');
  if (emailDisplay) emailDisplay.textContent = currentCustomer?.email || 'seu e-mail';

  const downloadContainer = document.getElementById('successDownloadList');
  if (downloadContainer) {
    // Coletar todos os arquivos reais correspondentes aos itens comprados
    const allFiles = [];
    cart.forEach(item => {
      const prodData = PRODUCTS.find(p => p.id === item.id);
      if (prodData && prodData.files) {
        prodData.files.forEach(f => {
          if (!allFiles.some(existing => existing.file === f.file)) {
            allFiles.push(f);
          }
        });
      }
    });

    if (allFiles.length === 0) {
      allFiles.push({ name: 'Pacote de Atividades Pedagógicas', file: 'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf' });
    }

    downloadContainer.innerHTML = `
      <div style="max-height: 260px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px;">
        ${allFiles.map(f => `
          <div class="download-material-card">
            <div class="download-material-info">
              <span class="icon">📄</span>
              <div>
                <h4>${f.name}</h4>
                <span style="font-size:0.75rem;color:var(--text-muted)">PDF Oficial em Alta Resolução</span>
              </div>
            </div>
            <a href="/downloads/${f.file}" download="${f.file}" target="_blank" class="btn-download-pdf">
              <span>⬇️</span> Baixar
            </a>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ---- Registrar pedido para o Painel Admin ----
  try {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discountPct = activeCoupon && COUPONS[activeCoupon] ? COUPONS[activeCoupon] : 0;
    const total = subtotal * (1 - discountPct);

    const order = {
      id: 'ord-' + Date.now(),
      paymentId: data.id || activePaymentId || null,
      status: 'approved',
      customer: currentCustomer || {},
      items: cart.map(i => ({ id: i.id, title: i.title, price: i.price, quantity: i.quantity })),
      total: total,
      coupon: activeCoupon || null,
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('atelie-orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('atelie-orders', JSON.stringify(existingOrders));

    // Também salvar em atelie-admin-data para persistência total
    const adminData = JSON.parse(localStorage.getItem('atelie-admin-data') || '{}');
    adminData.orders = existingOrders;
    localStorage.setItem('atelie-admin-data', JSON.stringify(adminData));
  } catch (err) {
    console.warn('Erro ao registrar pedido no admin:', err);
  }

  // Limpar carrinho
  cart = [];
  saveCart();
  updateCartUI();

  showToast('🎉 Pagamento aprovado! Seus materiais estão liberados.');
}

function simulatePaymentApproval() {
  handlePaymentApproved({
    status: 'approved',
    id: activePaymentId || 'sim_manual'
  });
}

function closePixModal() {
  if (paymentPollInterval) clearInterval(paymentPollInterval);
  const pixModal = document.getElementById('pixModalBackdrop');
  if (pixModal) pixModal.classList.remove('open');
  document.body.style.overflow = '';
}

function copyPixKey() {
  const input = document.getElementById('pixCodeInput');
  if (input && input.value) {
    input.select();
    navigator.clipboard.writeText(input.value);
    showToast('Código Copia e Cola do PIX copiado! Cole no aplicativo do seu banco 📋');
  } else {
    showToast('Nenhum código para copiar');
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Seu carrinho está vazio!');
    return;
  }

  const itemsList = cart.map(i => `• ${i.title} (${i.quantity}x)`).join('%0A');
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let discount = activeCoupon && COUPONS[activeCoupon] ? subtotal * COUPONS[activeCoupon] : 0;
  const total = (subtotal - discount).toFixed(2).replace('.', ',');

  const msg = `Olá, Ateliê do Saber! 🦉%0AGostaria de concluir a compra dos seguintes materiais pedagógicos:%0A${itemsList}%0A%0AValor Total: R$ ${total}%0APoderia me enviar a chave PIX para liberação dos downloads?`;
  window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${msg}`, '_blank');
}

// 8. QUICK VIEW MODAL
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewBackdrop');
  const body = document.getElementById('quickViewModalContent');

  if (body) {
    body.innerHTML = `
      <div class="quickview-media">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="quickview-content">
        <span class="quickview-badge">${product.categoryName}</span>
        <h2 class="quickview-title">${product.title}</h2>
        <div class="product-rating" style="margin-bottom:12px">
          <span>★★★★★</span>
          <strong>${product.rating}</strong>
          <span style="color:var(--text-muted)">(${product.reviewsCount} avaliações de professoras)</span>
        </div>
        <p class="quickview-desc">${product.description}</p>
        
        <div class="quickview-bncc-box">
          <h5>🎯 Códigos da BNCC contemplados:</h5>
          <p>${product.bncc}</p>
          <div style="margin-top:6px;font-size:0.75rem;color:#007A63">
            Habilidades trabalhadas: <strong>${product.skills.join(' • ')}</strong>
          </div>
        </div>

        <div class="product-specs" style="margin-bottom:24px">
          <span>📄 <strong>${product.pages} Páginas</strong> em formato A4</span>
          <span>⚡ <strong>Envio Imediato</strong> por E-mail</span>
          <span>🖨️ <strong>Pronto para Imprimir</strong></span>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
          <div class="price-box">
            <span class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>
            <span class="current-price" style="font-size:1.75rem">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button class="btn-primary" onclick="addToCart('${product.id}'); closeQuickView();">
            🛒 Adicionar ao Carrinho
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quickViewBackdrop');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// 9. FAQ ACCORDION
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// 10. LEAD FORM / AMOSTRA GRÁTIS
function setupLeadForm() {
  const form = document.getElementById('freebieForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('freebieEmail').value;
    showToast(`Obrigado! Enviamos um pacote especial de amostra para ${email} 📩`);
    form.reset();
  });
}

// 11. TOAST NOTIFICATIONS
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 12. CANVAS DE PARTÍCULAS NO HERO (Efeito lúdico flutuante)
function initHeroParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const symbols = ['A', 'B', 'C', '1', '2', '3', '★', '●', '▲', '✏️', '📖'];
  const particles = [];
  const count = 28;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: 14 + Math.random() * 16,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -0.2 - Math.random() * 0.5,
      alpha: 0.15 + Math.random() * 0.25,
      color: ['#5A35E4', '#FF4785', '#FFB800', '#00C49F'][Math.floor(Math.random() * 4)]
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < -30) {
        p.y = canvas.height + 30;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -30) p.x = canvas.width + 30;
      if (p.x > canvas.width + 30) p.x = -30;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `bold ${p.size}px 'Fredoka', sans-serif`;
      ctx.fillText(p.symbol, p.x, p.y);
      ctx.restore();
    });
    requestAnimationFrame(render);
  }
  render();
}
