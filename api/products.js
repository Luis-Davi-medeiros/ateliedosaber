// api/products.js - Catálogo Oficial de Produtos Reais do Ateliê do Saber

const PRODUCTS_CATALOG = {
  // 1. MEGA COMBO COM TODOS OS 18 MATERIAIS REAIS
  'prod-sitio-mega-combo': {
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
      'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf'
    ]
  },

  // 2. KIT ALFABETIZAÇÃO E LINGUAGEM
  'prod-sitio-kit-alfabetizacao': {
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
      'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf',
      'Sitio-do-Pica-pau-Silabario.pdf.pdf',
      'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf',
      'Sitio-do-Pica-pau-Vogais-.pdf',
      'Sitio-do-Pica-pau-Vogal-do-Dia-.pdf',
      'Sitio-do-Pica-pau-Cantinho-da-Leitura-@didaticalizando.pdf'
    ]
  },

  // 3. KIT ROTINA E ORGANIZAÇÃO DA SALA DE AULA
  'prod-sitio-kit-rotina': {
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
      'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf',
      'Sitio-do-Pica-pau-Chamadinha-.pdf',
      'Sitio-do-Pica-pau-Quantos-Somos.pdf',
      'Sitio-do-Pica-pau-Combinados-.pdf',
      'Sitio-do-Pica-pau-Aniversariates-do-mes.pdf',
      'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf'
    ]
  },

  // 4. KIT MATEMÁTICA, NÚMEROS E FORMAS
  'prod-sitio-kit-matematica': {
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
      'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf',
      'Sitio-do-Pica-pau-Numeros.pdf',
      'Sitio-do-Pica-pau-Formas-Geometricas.pdf',
      'Sitio-do-Pica-pau-Cores-@didaticalizando-.pdf'
    ]
  },

  // 5. ALFABETO COMPLETO DE PAREDE
  'prod-sitio-alfabeto-individual': {
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
      'Sitio-do-Pica-pau-Alfabeto-@didaticalizando-.pdf'
    ]
  },

  // 6. SILABÁRIOS COMPLETO (SIMPLES E COMPLEXO)
  'prod-sitio-silabarios': {
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
      'Sitio-do-Pica-pau-Silabario.pdf.pdf',
      'Sitio-do-Pica-pau-Silabario-Complexo.pdf.pdf'
    ]
  },

  // 7. CALENDÁRIO INTERATIVO & COMO ESTÁ O TEMPO
  'prod-sitio-calendario': {
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
      'Sitio-do-Pica-pau-Calendario-e-como-esta-o-tempo.pdf'
    ]
  },

  // 8. TRENZINHO DOS NÚMEROS (PAREDE)
  'prod-sitio-trenzinho': {
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
      'Sitio-do-Pica-pau-Trenzinho-dos-Numeros-@didaticalizando.pdf'
    ]
  },

  // 9. KIT CRACHÁS DE MESA + PLACA BEM-VINDOS + DECORAÇÃO
  'prod-sitio-crachas-decoracao': {
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
      'Sitio-do-Pica-Pau-Crachas-@didaticalizando.pdf',
      'Sitio-do-Pica-pau-Placa-Sejam-Bem-vindos.pdf',
      'Sitio-do-Pica-pau-Decoracao-@didaticalizando-.pdf'
    ]
  }
};

const COUPONS = {
  'PROFESSOR10': 0.10,
  'BEMVINDO': 0.15,
  'SITIO20': 0.20
};

module.exports = {
  PRODUCTS_CATALOG,
  COUPONS
};
