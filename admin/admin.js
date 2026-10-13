// ============================================
// ATELIÊ DO SABER — PAINEL ADMINISTRATIVO
// admin.js
// ============================================

/* ============ STATE ============ */
const STATE = {
  credentials: { user: 'admin', pass: 'admin123' },
  products: {},
  orders: [],
  customers: [],
  coupons: {},
  files: [],
  settings: {},
  currentOrderFilter: 'all',
  editingProductId: null,
  editingCouponCode: null,
};

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  setupLogin();
  setupSidebar();
  setupNavigation();

  // Check if already logged in
  if (sessionStorage.getItem('atelie-admin-auth') === 'ok') {
    showPanel();
  }
});

/* ============ STORAGE ============ */
function loadFromStorage() {
  const stored = localStorage.getItem('atelie-admin-data');
  if (stored) {
    const data = JSON.parse(stored);
    STATE.products = data.products || {};
    STATE.orders = data.orders || [];
    STATE.customers = data.customers || [];
    STATE.coupons = data.coupons || {};
    STATE.settings = data.settings || {};
    if (data.credentials) STATE.credentials = data.credentials;
  }

  // Se não há produtos, carrega o catálogo padrão
  if (Object.keys(STATE.products).length === 0) {
    STATE.products = getDefaultProducts();
  }
  // Se não há cupons, carrega os padrão
  if (Object.keys(STATE.coupons).length === 0) {
    STATE.coupons = getDefaultCoupons();
  }
}

function saveToStorage() {
  localStorage.setItem('atelie-admin-data', JSON.stringify({
    products: STATE.products,
    orders: STATE.orders,
    customers: STATE.customers,
    coupons: STATE.coupons,
    settings: STATE.settings,
    credentials: STATE.credentials,
  }));
}

/* ============ DEFAULT DATA ============ */
function getDefaultProducts() {
  return {
    'prod-sitio-mega-combo': {
      id: 'prod-sitio-mega-combo',
      title: 'Super Kit Sala de Aula Completo: Sítio do Picapau Amarelo (18 Recursos)',
      price: 47.90, oldPrice: 197.00, category: 'combos', categoryName: 'Combos & Packs',
      tag: 'hot', tagText: 'Mais Vendido ⭐', rating: 5.0, reviewsCount: 684, pages: 280,
      age: 'Educação Infantil e Fundamental', bncc: 'EI02EO03, EI03EF01',
      description: 'O pacote definitivo para transformar sua sala de aula! Contém todos os 18 arquivos temáticos.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf','Sitio-do-Pica-pau-Silabario.pdf.pdf'],
    },
    'prod-sitio-kit-alfabetizacao': {
      id: 'prod-sitio-kit-alfabetizacao',
      title: 'Kit Alfabetização & Leitura: Sítio do Picapau Amarelo (6 Recursos)',
      price: 29.90, oldPrice: 59.90, category: 'alfabetizacao', categoryName: 'Alfabetização',
      tag: 'bncc', tagText: 'Alinhado à BNCC', rating: 4.96, reviewsCount: 342, pages: 95,
      age: '4 a 7 anos', bncc: 'EF01LP01, EF01LP02',
      description: 'Tudo para a fase de alfabetização: Alfabeto, Silabários, Vogais e Cantinho da Leitura.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf'],
    },
    'prod-sitio-kit-rotina': {
      id: 'prod-sitio-kit-rotina',
      title: 'Kit Rotina & Organização de Sala: Sítio do Picapau Amarelo (6 Recursos)',
      price: 27.90, oldPrice: 54.90, category: 'infantil', categoryName: 'Educação Infantil',
      tag: 'promo', tagText: 'Oferta Especial', rating: 4.93, reviewsCount: 289, pages: 75,
      age: '3 a 7 anos', bncc: 'EI02EO03, EI03EO02',
      description: 'Calendário, Chamadinha, Quantos Somos, Combinados e Aniversariantes.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf'],
    },
    'prod-sitio-kit-matematica': {
      id: 'prod-sitio-kit-matematica',
      title: 'Kit Matemática Divertida: Trenzinho, Números & Formas (4 Recursos)',
      price: 24.90, oldPrice: 48.00, category: 'matematica', categoryName: 'Matemática',
      tag: 'launch', tagText: 'Lançamento', rating: 4.91, reviewsCount: 198, pages: 60,
      age: '3 a 6 anos', bncc: 'EI03ET07, EF01MA01',
      description: 'Trenzinho numérico, Números, Formas Geométricas e Cores.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf'],
    },
    'prod-sitio-alfabeto-individual': {
      id: 'prod-sitio-alfabeto-individual',
      title: 'Alfabeto Ilustrado de Parede A-Z: Sítio do Picapau Amarelo',
      price: 14.90, oldPrice: 28.00, category: 'alfabetizacao', categoryName: 'Alfabetização',
      tag: 'hot', tagText: 'Imprescindível', rating: 4.98, reviewsCount: 421, pages: 26,
      age: '4 a 7 anos', bncc: 'EF01LP01, EF01LP02',
      description: 'Cartazes de todas as letras do alfabeto (A-Z) com personagens do Sítio.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf'],
    },
    'prod-sitio-silabarios': {
      id: 'prod-sitio-silabarios',
      title: 'Silabário Simples + Silabário Complexo Ilustrado',
      price: 14.90, oldPrice: 29.90, category: 'leitura', categoryName: 'Leitura & BNCC',
      tag: 'bncc', tagText: 'Alinhado à BNCC', rating: 4.95, reviewsCount: 310, pages: 35,
      age: '5 a 8 anos', bncc: 'EF01LP08, EF01LP09',
      description: 'Silabário simples e complexo com dígrafos e encontros consonantais.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Silabario.pdf.pdf','Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf'],
    },
    'prod-sitio-calendario': {
      id: 'prod-sitio-calendario',
      title: 'Painel Calendário Permanente + Como Está o Tempo Hoje',
      price: 12.90, oldPrice: 25.00, category: 'infantil', categoryName: 'Educação Infantil',
      tag: 'promo', tagText: 'Pronto para Imprimir', rating: 4.92, reviewsCount: 245, pages: 20,
      age: '3 a 7 anos', bncc: 'EI03ET01, EF01MA16',
      description: 'Painel com fichas móveis de dias da semana, meses, anos e marcador do tempo.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf'],
    },
    'prod-sitio-trenzinho': {
      id: 'prod-sitio-trenzinho',
      title: 'Trenzinho Numérico de Parede (0 a 10)',
      price: 12.90, oldPrice: 22.00, category: 'matematica', categoryName: 'Matemática',
      tag: 'launch', tagText: 'Sucesso em Sala', rating: 4.89, reviewsCount: 178, pages: 15,
      age: '3 a 6 anos', bncc: 'EI03ET07, EF01MA01',
      description: 'Locomotiva com 10 vagões numerados para decoração e contagem.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf'],
    },
    'prod-sitio-crachas-decoracao': {
      id: 'prod-sitio-crachas-decoracao',
      title: 'Kit Boas-Vindas, Crachás de Mesa e Decoração',
      price: 10.90, oldPrice: 22.00, category: 'infantil', categoryName: 'Educação Infantil',
      tag: 'promo', tagText: 'Econômico', rating: 4.90, reviewsCount: 165, pages: 18,
      age: 'Todas as idades', bncc: 'EI02EO04',
      description: 'Crachás de mesa, molduras decorativas e placa Sejam Bem-vindos.',
      status: 'active', sales: 0,
      files: ['Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf','Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf'],
    },
  };
}

function getDefaultCoupons() {
  return {
    'PROFESSOR10': { code: 'PROFESSOR10', discount: 10, uses: 0, status: 'active' },
    'BEMVINDO': { code: 'BEMVINDO', discount: 15, uses: 0, status: 'active' },
    'SITIO20': { code: 'SITIO20', discount: 20, uses: 0, status: 'active' },
  };
}

/* ============ LOGIN ============ */
function setupLogin() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;
    const err = document.getElementById('login-error');

    if (user === STATE.credentials.user && pass === STATE.credentials.pass) {
      err.style.display = 'none';
      sessionStorage.setItem('atelie-admin-auth', 'ok');
      showPanel();
    } else {
      err.style.display = 'block';
      document.getElementById('login-form').classList.add('shake');
      setTimeout(() => document.getElementById('login-form').classList.remove('shake'), 500);
    }
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    sessionStorage.removeItem('atelie-admin-auth');
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
  });
}

function showPanel() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('admin-panel').style.display = 'grid';
  renderDashboard();
  renderProducts();
  renderOrders();
  renderCustomers();
  renderCoupons();
  loadFiles();
  loadSettings();
}

/* ============ SIDEBAR ============ */
function setupSidebar() {
  // sidebar toggle (mobile)
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
}

/* ============ NAVIGATION ============ */
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-page]');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(pageName) {
  const pageTitles = {
    dashboard: '📊 Dashboard',
    products:  '📦 Produtos',
    orders:    '🛒 Pedidos',
    customers: '👥 Clientes',
    files:     '📁 Arquivos',
    coupons:   '🎟️ Cupons',
    reports:   '📈 Relatórios',
    settings:  '⚙️ Configurações',
  };

  // Update nav
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  const active = document.querySelector(`.nav-item[data-page="${pageName}"]`);
  if (active) active.classList.add('active');

  // Update pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(`page-${pageName}`);
  if (page) page.classList.add('active');

  // Update title
  document.getElementById('page-title').textContent = pageTitles[pageName] || pageName;

  // Refresh data on navigate
  if (pageName === 'dashboard') renderDashboard();
  if (pageName === 'reports') updateReports();
  if (pageName === 'files') loadFiles();
}

/* ============ DASHBOARD ============ */
function renderDashboard() {
  const approved = STATE.orders.filter(o => o.status === 'approved');
  const totalRevenue = approved.reduce((s, o) => s + o.total, 0);
  const uniqueEmails = [...new Set(approved.map(o => o.customer?.email))].filter(Boolean);
  const ticket = approved.length ? totalRevenue / approved.length : 0;

  document.getElementById('kpi-revenue').textContent = fmtCurrency(totalRevenue);
  document.getElementById('kpi-orders').textContent = STATE.orders.length;
  document.getElementById('kpi-customers').textContent = uniqueEmails.length;
  document.getElementById('kpi-ticket').textContent = fmtCurrency(ticket);

  // Update orders badge
  const pending = STATE.orders.filter(o => o.status === 'pending').length;
  const badge = document.getElementById('orders-badge');
  badge.textContent = pending;
  badge.style.display = pending ? 'inline-flex' : 'none';

  // Recent orders
  const recentEl = document.getElementById('dash-recent-orders');
  const recent = [...STATE.orders].reverse().slice(0, 5);
  if (recent.length === 0) {
    recentEl.innerHTML = `<div class="empty-state"><span class="empty-icon">🛒</span><p>Nenhum pedido ainda.<br>Compartilhe sua loja para começar a vender!</p></div>`;
  } else {
    recentEl.innerHTML = recent.map(o => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:.6rem 0;border-bottom:1px solid var(--border);">
        <div>
          <div style="font-size:.85rem;font-weight:600;color:var(--text)">${o.customer?.name || '—'}</div>
          <div style="font-size:.75rem;color:var(--text3)">${o.customer?.email || '—'} · ${fmtDate(o.createdAt)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:.85rem;font-weight:600">${fmtCurrency(o.total)}</div>
          ${statusBadge(o.status)}
        </div>
      </div>
    `).join('');
  }

  // Top products
  const topEl = document.getElementById('dash-top-products');
  const productSales = Object.values(STATE.products)
    .filter(p => p.sales > 0)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5);
  if (productSales.length === 0) {
    topEl.innerHTML = `<div class="empty-state"><span class="empty-icon">📦</span><p>Dados aparecerão após as primeiras vendas.</p></div>`;
  } else {
    topEl.innerHTML = productSales.map((p, i) => `
      <div style="display:flex;align-items:center;gap:.75rem;padding:.5rem 0;border-bottom:1px solid var(--border)">
        <span style="font-size:1.1rem;width:28px;text-align:center">${['🥇','🥈','🥉','4️⃣','5️⃣'][i]}</span>
        <div style="flex:1;min-width:0">
          <div style="font-size:.82rem;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.title}</div>
          <div style="font-size:.72rem;color:var(--text3)">${p.sales} venda(s)</div>
        </div>
        <div style="font-size:.85rem;font-weight:700;color:var(--accent)">${fmtCurrency(p.price)}</div>
      </div>
    `).join('');
  }
}

/* ============ PRODUCTS ============ */
function renderProducts(filter = '') {
  const tbody = document.getElementById('products-tbody');
  let products = Object.values(STATE.products);
  if (filter) {
    const q = filter.toLowerCase();
    products = products.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><span class="empty-icon">📦</span><p>Nenhum produto encontrado.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => `
    <tr>
      <td>
        <div class="prod-cell">
          <div class="prod-cell-img">📚</div>
          <div class="prod-cell-info">
            <span class="prod-cell-name">${p.title}</span>
            <span class="prod-cell-meta">${p.pages || '—'} pgs · ${p.age || '—'}</span>
          </div>
        </div>
      </td>
      <td><span class="badge badge-neutral">${p.categoryName || p.category}</span></td>
      <td>
        <div style="font-weight:700;color:var(--text)">${fmtCurrency(p.price)}</div>
        ${p.oldPrice ? `<div style="font-size:.72rem;color:var(--text3);text-decoration:line-through">${fmtCurrency(p.oldPrice)}</div>` : ''}
      </td>
      <td style="font-weight:600">${p.sales || 0}</td>
      <td>${p.status === 'active' ? '<span class="badge badge-success">✅ Ativo</span>' : '<span class="badge badge-danger">❌ Inativo</span>'}</td>
      <td>
        <div style="display:flex;gap:.4rem">
          <button class="btn-icon" onclick="openProductModal('${p.id}')" title="Editar">✏️</button>
          <button class="btn-icon" onclick="toggleProductStatus('${p.id}')" title="Ativar/Desativar">
            ${p.status === 'active' ? '🔕' : '✅'}
          </button>
          <button class="btn-icon danger" onclick="deleteProduct('${p.id}')" title="Excluir">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function filterProducts() {
  renderProducts(document.getElementById('products-search').value);
}

function openProductModal(productId = null) {
  STATE.editingProductId = productId;
  const modal = document.getElementById('product-modal-overlay');
  modal.classList.add('open');
  document.getElementById('product-modal-title').textContent = productId ? 'Editar Produto' : 'Novo Produto';

  // Build files checkboxes
  const filesEl = document.getElementById('prod-files-list');
  const knownFiles = [
    'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf',
    'Sitio-do-Pica-pau-Aniversariates-do-mes.pdf',
    'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf',
    'Sitio-do-Pica-pau-Cantinho-da-Leitura-@didaticalizando.pdf',
    'Sitio-do-Pica-pau-Chamadinha-.pdf',
    'Sitio-do-Pica-pau-Combinados-.pdf',
    'Sitio-do-Pica-pau-Cores-@didaticalizando-.pdf',
    'Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf',
    'Sitio-do-Pica-pau-Decoracao-@didaticalizando-.pdf',
    'Sitio-do-Pica-pau-Formas-Geometricas.pdf',
    'Sitio-do-Pica-pau-Numeros.pdf',
    'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf',
    'Sitio-do-Pica-pau-Quantos-Somos.pdf',
    'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf',
    'Sitio-do-Pica-pau-Silabario.pdf.pdf',
    'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf',
    'Sitio-do-Pica-pau-Vogais-.pdf',
    'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf',
  ];
  const selectedFiles = productId ? (STATE.products[productId]?.files || []) : [];
  filesEl.innerHTML = knownFiles.map(f => `
    <label class="file-checkbox-item">
      <input type="checkbox" value="${f}" ${selectedFiles.includes(f) ? 'checked' : ''} />
      <span>${f}</span>
    </label>
  `).join('');

  // Fill form if editing
  if (productId && STATE.products[productId]) {
    const p = STATE.products[productId];
    document.getElementById('prod-id').value = p.id;
    document.getElementById('prod-title').value = p.title;
    document.getElementById('prod-category').value = p.category;
    document.getElementById('prod-price').value = p.price;
    document.getElementById('prod-old-price').value = p.oldPrice || '';
    document.getElementById('prod-desc').value = p.description;
    document.getElementById('prod-age').value = p.age || '';
    document.getElementById('prod-bncc').value = p.bncc || '';
    document.getElementById('prod-tag').value = p.tag || 'hot';
    document.getElementById('prod-status').value = p.status || 'active';
  } else {
    document.getElementById('product-form').reset();
  }
}

function closeProductModal(e) {
  if (e.target.id === 'product-modal-overlay') closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('product-modal-overlay').classList.remove('open');
  STATE.editingProductId = null;
}

function saveProduct() {
  const title = document.getElementById('prod-title').value.trim();
  const price = parseFloat(document.getElementById('prod-price').value);
  if (!title || isNaN(price)) {
    showToast('⚠️ Preencha o nome e preço do produto.', 'error');
    return;
  }

  const selectedFiles = [...document.querySelectorAll('#prod-files-list input:checked')].map(i => i.value);
  const catMap = { combos: 'Combos & Packs', alfabetizacao: 'Alfabetização', matematica: 'Matemática', infantil: 'Educação Infantil', leitura: 'Leitura & BNCC' };
  const cat = document.getElementById('prod-category').value;
  const tagMap = { hot: 'Mais Vendido 🔥', bncc: 'Alinhado à BNCC 📚', promo: 'Oferta Especial 🎉', launch: 'Lançamento 🚀', new: 'Novo ✨' };
  const tag = document.getElementById('prod-tag').value;

  const id = STATE.editingProductId || 'prod-' + Date.now();
  STATE.products[id] = {
    id,
    title,
    price,
    oldPrice: parseFloat(document.getElementById('prod-old-price').value) || null,
    category: cat,
    categoryName: catMap[cat] || cat,
    tag,
    tagText: tagMap[tag] || tag,
    description: document.getElementById('prod-desc').value,
    age: document.getElementById('prod-age').value,
    bncc: document.getElementById('prod-bncc').value,
    status: document.getElementById('prod-status').value,
    files: selectedFiles,
    rating: STATE.products[id]?.rating || 4.9,
    reviewsCount: STATE.products[id]?.reviewsCount || 0,
    sales: STATE.products[id]?.sales || 0,
    pages: STATE.products[id]?.pages || 0,
  };

  saveToStorage();
  renderProducts();
  closeProductModalBtn();
  showToast(STATE.editingProductId ? '✅ Produto atualizado!' : '✅ Produto criado com sucesso!');
}

function toggleProductStatus(id) {
  if (!STATE.products[id]) return;
  STATE.products[id].status = STATE.products[id].status === 'active' ? 'inactive' : 'active';
  saveToStorage();
  renderProducts(document.getElementById('products-search').value);
  showToast(`Produto ${STATE.products[id].status === 'active' ? 'ativado ✅' : 'desativado ❌'}`);
}

function deleteProduct(id) {
  if (!confirm('Tem certeza que deseja excluir este produto?')) return;
  delete STATE.products[id];
  saveToStorage();
  renderProducts();
  showToast('🗑️ Produto excluído.');
}

/* ============ ORDERS ============ */
function renderOrders(filter = '') {
  const tbody = document.getElementById('orders-tbody');
  let orders = [...STATE.orders].reverse();

  if (STATE.currentOrderFilter !== 'all') {
    orders = orders.filter(o => o.status === STATE.currentOrderFilter);
  }
  if (filter) {
    const q = filter.toLowerCase();
    orders = orders.filter(o =>
      (o.customer?.email || '').toLowerCase().includes(q) ||
      (o.customer?.name || '').toLowerCase().includes(q) ||
      (o.id || '').toLowerCase().includes(q)
    );
  }

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><span class="empty-icon">🛒</span><p>Nenhum pedido encontrado.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = orders.map(o => `
    <tr>
      <td style="font-family:monospace;font-size:.8rem;color:var(--text3)">${o.paymentId || o.id || '—'}</td>
      <td>
        <div style="font-weight:600;color:var(--text);font-size:.85rem">${o.customer?.name || '—'}</div>
        <div style="font-size:.72rem;color:var(--text3)">${o.customer?.email || '—'}</div>
      </td>
      <td style="font-size:.8rem;max-width:200px">
        ${(o.items || []).map(i => `<div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text2)">${STATE.products[i.id]?.title || i.title || i.id}</div>`).join('')}
      </td>
      <td style="font-weight:700;white-space:nowrap">${fmtCurrency(o.total)}</td>
      <td>${statusBadge(o.status)}</td>
      <td style="font-size:.8rem;color:var(--text3);white-space:nowrap">${fmtDate(o.createdAt)}</td>
      <td>
        <button class="btn-icon" onclick="openOrderModal('${o.id}')" title="Ver detalhes">👁️</button>
      </td>
    </tr>
  `).join('');
}

function filterOrders() {
  renderOrders(document.getElementById('orders-search').value);
}

function filterOrdersByStatus(status, btn) {
  STATE.currentOrderFilter = status;
  document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderOrders();
}

function openOrderModal(orderId) {
  const o = STATE.orders.find(x => x.id === orderId);
  if (!o) return;
  document.getElementById('order-modal-overlay').classList.add('open');
  document.getElementById('order-modal-body').innerHTML = `
    <div class="order-detail-grid">
      <div class="order-detail-item">
        <label>ID do Pagamento</label>
        <span style="font-family:monospace;font-size:.82rem">${o.paymentId || '—'}</span>
      </div>
      <div class="order-detail-item">
        <label>Status</label>
        <span>${statusBadge(o.status)}</span>
      </div>
      <div class="order-detail-item">
        <label>Nome do Cliente</label>
        <span>${o.customer?.name || '—'}</span>
      </div>
      <div class="order-detail-item">
        <label>E-mail</label>
        <span>${o.customer?.email || '—'}</span>
      </div>
      <div class="order-detail-item">
        <label>CPF</label>
        <span>${o.customer?.cpf || '—'}</span>
      </div>
      <div class="order-detail-item">
        <label>Data</label>
        <span>${fmtDate(o.createdAt)}</span>
      </div>
      <div class="order-detail-item">
        <label>Total</label>
        <span style="font-size:1.2rem;font-weight:800;color:var(--success)">${fmtCurrency(o.total)}</span>
      </div>
      <div class="order-detail-item">
        <label>Cupom</label>
        <span>${o.coupon || '—'}</span>
      </div>
    </div>
    <div>
      <label style="font-size:.72rem;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:.05em;display:block;margin-bottom:.5rem">Produtos Comprados</label>
      <div class="order-products-list">
        ${(o.items || []).map(i => `
          <div class="order-product-item">
            <span>${STATE.products[i.id]?.title || i.title || i.id}</span>
            <span>${fmtCurrency(i.price || 0)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function closeOrderModal(e) { if (e.target.id === 'order-modal-overlay') closeOrderModalBtn(); }
function closeOrderModalBtn() { document.getElementById('order-modal-overlay').classList.remove('open'); }

/* ============ CUSTOMERS ============ */
function renderCustomers(filter = '') {
  const tbody = document.getElementById('customers-tbody');

  // Build customers map from orders
  const custMap = {};
  STATE.orders.filter(o => o.status === 'approved').forEach(o => {
    const email = o.customer?.email;
    if (!email) return;
    if (!custMap[email]) {
      custMap[email] = {
        name: o.customer?.name || '—',
        email,
        cpf: o.customer?.cpf || '—',
        purchases: 0,
        totalSpent: 0,
        lastOrder: o.createdAt,
      };
    }
    custMap[email].purchases++;
    custMap[email].totalSpent += o.total;
    if (new Date(o.createdAt) > new Date(custMap[email].lastOrder)) {
      custMap[email].lastOrder = o.createdAt;
    }
  });

  let customers = Object.values(custMap);
  if (filter) {
    const q = filter.toLowerCase();
    customers = customers.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
  }

  if (customers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><span class="empty-icon">👥</span><p>Nenhum cliente registrado ainda.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = customers.map(c => `
    <tr>
      <td style="font-weight:600;color:var(--text)">${c.name}</td>
      <td style="color:var(--text2)">${c.email}</td>
      <td style="font-family:monospace;font-size:.82rem;color:var(--text3)">${c.cpf}</td>
      <td style="font-weight:600;text-align:center">${c.purchases}</td>
      <td style="font-weight:700;color:var(--success)">${fmtCurrency(c.totalSpent)}</td>
      <td style="font-size:.8rem;color:var(--text3)">${fmtDate(c.lastOrder)}</td>
    </tr>
  `).join('');
}

function filterCustomers() {
  renderCustomers(document.getElementById('customers-search').value);
}

function exportCustomers() {
  const custMap = {};
  STATE.orders.filter(o => o.status === 'approved').forEach(o => {
    const email = o.customer?.email;
    if (!email) return;
    if (!custMap[email]) {
      custMap[email] = { name: o.customer?.name, email, cpf: o.customer?.cpf, purchases: 0, totalSpent: 0 };
    }
    custMap[email].purchases++;
    custMap[email].totalSpent += o.total;
  });

  const rows = [['Nome', 'E-mail', 'CPF', 'Compras', 'Total Gasto']];
  Object.values(custMap).forEach(c => rows.push([c.name, c.email, c.cpf, c.purchases, fmtCurrency(c.totalSpent)]));
  const csv = rows.map(r => r.join(',')).join('\n');
  downloadFile('clientes-atelie.csv', csv, 'text/csv');
  showToast('📥 Exportando clientes...');
}

/* ============ FILES ============ */
function loadFiles() {
  fetch('../api/files')
    .then(r => r.json())
    .then(data => {
      STATE.files = data.files || [];
      renderFiles();
    })
    .catch(() => {
      // Fallback: mostrar os arquivos conhecidos
      STATE.files = [
        'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf',
        'Sitio-do-Pica-pau-Aniversariates-do-mes.pdf',
        'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf',
        'Sitio-do-Pica-pau-Cantinho-da-Leitura-@didaticalizando.pdf',
        'Sitio-do-Pica-pau-Chamadinha-.pdf',
        'Sitio-do-Pica-pau-Combinados-.pdf',
        'Sitio-do-Pica-pau-Cores-@didaticalizando-.pdf',
        'Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf',
        'Sitio-do-Pica-pau-Decoracao-@didaticalizando-.pdf',
        'Sitio-do-Pica-pau-Formas-Geometricas.pdf',
        'Sitio-do-Pica-pau-Numeros.pdf',
        'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf',
        'Sitio-do-Pica-pau-Quantos-Somos.pdf',
        'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf',
        'Sitio-do-Pica-pau-Silabario.pdf.pdf',
        'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf',
        'Sitio-do-Pica-pau-Vogais-.pdf',
        'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf',
      ].map(f => ({ name: f, size: null }));
      renderFiles();
    });
}

function renderFiles() {
  const grid = document.getElementById('files-grid');
  const countEl = document.getElementById('files-count');
  countEl.textContent = `${STATE.files.length} arquivo(s)`;

  if (STATE.files.length === 0) {
    grid.innerHTML = `<div class="empty-state"><span class="empty-icon">📁</span><p>Nenhum arquivo encontrado.</p></div>`;
    return;
  }

  grid.innerHTML = STATE.files.map(f => {
    const name = typeof f === 'string' ? f : f.name;
    const size = typeof f === 'object' && f.size ? ` · ${(f.size / 1024).toFixed(0)} KB` : '';
    const short = name.replace(/\.pdf$/i, '').replace(/-@didaticalizando-?/gi, '').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    return `
      <div class="file-card">
        <div class="file-card-icon">📄</div>
        <div class="file-card-name">${short}</div>
        <div class="file-card-size">PDF${size}</div>
        <div class="file-card-actions">
          <a href="../downloads/${encodeURIComponent(name)}" download class="btn-icon" title="Download" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center">⬇️</a>
        </div>
      </div>
    `;
  }).join('');
}

function handleFileUpload(event) {
  const files = event.target.files;
  if (!files.length) return;
  showToast(`📤 ${files.length} arquivo(s) selecionado(s). Em produção na Vercel, use o painel de Files para upload.`, 'warning');
}

/* ============ COUPONS ============ */
function renderCoupons() {
  const tbody = document.getElementById('coupons-tbody');
  const coupons = Object.values(STATE.coupons);

  if (coupons.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><span class="empty-icon">🎟️</span><p>Nenhum cupom cadastrado.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = coupons.map(c => `
    <tr>
      <td>
        <span style="font-family:monospace;font-weight:700;font-size:.9rem;color:var(--accent);letter-spacing:.06em">${c.code}</span>
      </td>
      <td>
        <span style="font-size:1.1rem;font-weight:800;color:var(--success)">-${c.discount}%</span>
      </td>
      <td style="text-align:center">${c.uses || 0}</td>
      <td>${c.status === 'active' ? '<span class="badge badge-success">✅ Ativo</span>' : '<span class="badge badge-danger">❌ Inativo</span>'}</td>
      <td>
        <div style="display:flex;gap:.4rem">
          <button class="btn-icon" onclick="openCouponModal('${c.code}')" title="Editar">✏️</button>
          <button class="btn-icon" onclick="toggleCouponStatus('${c.code}')" title="Ativar/Desativar">
            ${c.status === 'active' ? '🔕' : '✅'}
          </button>
          <button class="btn-icon danger" onclick="deleteCoupon('${c.code}')" title="Excluir">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openCouponModal(code = null) {
  STATE.editingCouponCode = code;
  document.getElementById('coupon-modal-overlay').classList.add('open');
  document.getElementById('coupon-modal-title').textContent = code ? 'Editar Cupom' : 'Novo Cupom';

  if (code && STATE.coupons[code]) {
    const c = STATE.coupons[code];
    document.getElementById('coupon-code').value = c.code;
    document.getElementById('coupon-discount').value = c.discount;
    document.getElementById('coupon-status').value = c.status;
  } else {
    document.getElementById('coupon-code').value = '';
    document.getElementById('coupon-discount').value = '';
    document.getElementById('coupon-status').value = 'active';
  }
}
function closeCouponModal(e) { if (e.target.id === 'coupon-modal-overlay') closeCouponModalBtn(); }
function closeCouponModalBtn() {
  document.getElementById('coupon-modal-overlay').classList.remove('open');
  STATE.editingCouponCode = null;
}

function saveCoupon() {
  const code = document.getElementById('coupon-code').value.trim().toUpperCase();
  const discount = parseInt(document.getElementById('coupon-discount').value);
  if (!code || isNaN(discount) || discount < 1 || discount > 99) {
    showToast('⚠️ Preencha código e desconto (1-99%).', 'error');
    return;
  }

  // If renaming coupon, delete old key
  if (STATE.editingCouponCode && STATE.editingCouponCode !== code) {
    delete STATE.coupons[STATE.editingCouponCode];
  }

  STATE.coupons[code] = {
    code,
    discount,
    status: document.getElementById('coupon-status').value,
    uses: STATE.coupons[code]?.uses || 0,
  };

  saveToStorage();
  renderCoupons();
  closeCouponModalBtn();
  showToast(STATE.editingCouponCode ? '✅ Cupom atualizado!' : '✅ Cupom criado!');
}

function toggleCouponStatus(code) {
  if (!STATE.coupons[code]) return;
  STATE.coupons[code].status = STATE.coupons[code].status === 'active' ? 'inactive' : 'active';
  saveToStorage();
  renderCoupons();
}

function deleteCoupon(code) {
  if (!confirm(`Excluir o cupom "${code}"?`)) return;
  delete STATE.coupons[code];
  saveToStorage();
  renderCoupons();
  showToast('🗑️ Cupom excluído.');
}

/* ============ REPORTS ============ */
function updateReports() {
  const days = parseInt(document.getElementById('report-period').value);
  const cutoff = new Date(Date.now() - days * 86400000);

  const filtered = STATE.orders.filter(o => o.status === 'approved' && new Date(o.createdAt) >= cutoff);
  const revenue = filtered.reduce((s, o) => s + o.total, 0);
  const ticket = filtered.length ? revenue / filtered.length : 0;
  const couponsUsed = filtered.filter(o => o.coupon).length;

  document.getElementById('report-revenue').textContent = fmtCurrency(revenue);
  document.getElementById('report-orders').textContent = filtered.length;
  document.getElementById('report-ticket').textContent = fmtCurrency(ticket);
  document.getElementById('report-coupons-used').textContent = couponsUsed;

  // Sales by product
  const prodSales = {};
  filtered.forEach(o => {
    (o.items || []).forEach(i => {
      prodSales[i.id] = (prodSales[i.id] || 0) + 1;
    });
  });

  const el = document.getElementById('report-by-product');
  const sorted = Object.entries(prodSales).sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) {
    el.innerHTML = `<div class="empty-state"><span class="empty-icon">📈</span><p>Dados disponíveis após as primeiras vendas.</p></div>`;
  } else {
    const maxSales = sorted[0][1];
    el.innerHTML = sorted.map(([id, count]) => {
      const p = STATE.products[id];
      const pct = Math.round((count / maxSales) * 100);
      return `
        <div style="margin-bottom:1rem">
          <div style="display:flex;justify-content:space-between;margin-bottom:.25rem">
            <span style="font-size:.85rem;color:var(--text);font-weight:500">${p?.title || id}</span>
            <span style="font-size:.85rem;font-weight:700;color:var(--accent)">${count} venda(s)</span>
          </div>
          <div style="background:var(--bg3);border-radius:99px;height:8px;overflow:hidden">
            <div style="background:linear-gradient(90deg,var(--accent),var(--accent2));height:100%;width:${pct}%;border-radius:99px;transition:width .5s ease"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function exportReport() {
  const days = parseInt(document.getElementById('report-period').value);
  const cutoff = new Date(Date.now() - days * 86400000);
  const filtered = STATE.orders.filter(o => o.status === 'approved' && new Date(o.createdAt) >= cutoff);
  const revenue = filtered.reduce((s, o) => s + o.total, 0);

  const rows = [
    ['Relatório Ateliê do Saber'],
    [`Período: últimos ${days} dias`],
    [`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`],
    [],
    ['ID', 'Cliente', 'E-mail', 'CPF', 'Total', 'Cupom', 'Data'],
    ...filtered.map(o => [
      o.paymentId || o.id,
      o.customer?.name,
      o.customer?.email,
      o.customer?.cpf,
      fmtCurrency(o.total),
      o.coupon || '—',
      fmtDate(o.createdAt),
    ]),
    [],
    [`Total: ${fmtCurrency(revenue)}`],
  ];
  const csv = rows.map(r => r.join(',')).join('\n');
  downloadFile(`relatorio-${days}dias.csv`, csv, 'text/csv');
  showToast('📥 Exportando relatório...');
}

/* ============ SETTINGS ============ */
function loadSettings() {
  const s = STATE.settings;
  if (s.storeName) document.getElementById('cfg-store-name').value = s.storeName;
  if (s.storeDesc) document.getElementById('cfg-store-desc').value = s.storeDesc;
  if (s.notifyEmail) document.getElementById('cfg-notify-email').value = s.notifyEmail;
  if (s.mpMode) document.getElementById('cfg-mp-mode').value = s.mpMode;
  if (s.adminUser) document.getElementById('cfg-admin-user').value = s.adminUser;
}

function saveSettings(section) {
  if (section === 'store') {
    STATE.settings.storeName = document.getElementById('cfg-store-name').value;
    STATE.settings.storeDesc = document.getElementById('cfg-store-desc').value;
    STATE.settings.notifyEmail = document.getElementById('cfg-notify-email').value;
    showToast('✅ Dados da loja salvos!');
  }
  if (section === 'mp') {
    STATE.settings.mpToken = document.getElementById('cfg-mp-token').value;
    STATE.settings.mpMode = document.getElementById('cfg-mp-mode').value;
    showToast('✅ Configurações do Mercado Pago salvas!');
  }
  if (section === 'security') {
    const user = document.getElementById('cfg-admin-user').value.trim();
    const pass = document.getElementById('cfg-admin-pass').value;
    const pass2 = document.getElementById('cfg-admin-pass2').value;
    if (!user || !pass) { showToast('⚠️ Preencha usuário e senha.', 'error'); return; }
    if (pass !== pass2) { showToast('⚠️ As senhas não coincidem.', 'error'); return; }
    STATE.credentials = { user, pass };
    STATE.settings.adminUser = user;
    showToast('✅ Senha alterada com sucesso!');
  }
  saveToStorage();
}

/* ============ UTILITIES ============ */
function fmtCurrency(val) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);
}
function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function statusBadge(status) {
  const map = {
    approved: '<span class="badge badge-success">✅ Aprovado</span>',
    pending:  '<span class="badge badge-warning">⏳ Pendente</span>',
    rejected: '<span class="badge badge-danger">❌ Rejeitado</span>',
    cancelled:'<span class="badge badge-neutral">🚫 Cancelado</span>',
  };
  return map[status] || `<span class="badge badge-neutral">${status}</span>`;
}
function downloadFile(filename, content, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

let _toastTimer = null;
function showToast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast show ${type}`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}

/* ============ SYNC WITH MAIN STORE ============ */
// Listen for orders saved by the main store (via localStorage)
window.addEventListener('storage', (e) => {
  if (e.key === 'atelie-orders') {
    try {
      const newOrders = JSON.parse(e.newValue) || [];
      STATE.orders = newOrders;
      saveToStorage();
      renderDashboard();
      renderOrders();
      renderCustomers();
      const pending = STATE.orders.filter(o => o.status === 'pending').length;
      const badge = document.getElementById('orders-badge');
      if (badge) { badge.textContent = pending; badge.style.display = pending ? 'inline-flex' : 'none'; }
    } catch(err) { /* ignore */ }
  }
});
