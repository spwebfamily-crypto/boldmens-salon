export const services = [
  {
    id: 'haircut',
    title: 'Corte signature',
    description:
      'Consultoria inicial, corte estruturado com tesoura e finalização com produtos autorais Bold Mens.',
    duration: '50 min',
    price: '€45',
  },
  {
    id: 'hot-towel-shave',
    title: 'Barbear clássico com toalha quente',
    description:
      'Navalha, toalhas quentes e blend de óleos essenciais seguidos por máscara hidratante e toalha fria.',
    duration: '30 min',
    price: '€35',
  },
  {
    id: 'hair-finish',
    title: 'Acabamento de cabelo',
    description: 'Retoque rápido de contornos e styling para compromissos imediatos.',
    duration: '15 min',
    price: '€18',
  },
  {
    id: 'brows-straight-razor',
    title: 'Sobrancelhas com navalha',
    description: 'Design, alinhamento e finalização com navalha para um olhar preciso.',
    duration: '15 min',
    price: '€15',
  },
  {
    id: 'buzz-cut',
    title: 'Buzz cut completo',
    description: 'Máquina com pente único escolhido pelo cliente e acabamento com lâmina.',
    duration: '30 min',
    price: '€30',
  },
  {
    id: 'nose-wax',
    title: 'Depilação nasal',
    description: 'Remoção confortável com cera quente e aplicação calmante.',
    duration: '20 min',
    price: '€20',
  },
];

export const experiences = [
  {
    id: 'tailored-consulting',
    title: 'Consultoria sob medida',
    copy: 'Cada sessão começa com leitura de estilo, agenda e objetivos de imagem.',
  },
  {
    id: 'rituals',
    title: 'Rituais sensoriais',
    copy: 'Cromoterapia, essências exclusivas e cadeiras reclináveis assinadas.',
  },
  {
    id: 'signature-products',
    title: 'Produtos autorais',
    copy: 'Linha desenvolvida entre Lisboa e Londres com ativos botânicos.',
  },
];

export const amenities = [
  'Lounge com whisky bar e curadoria de vinhos naturais',
  'Sala de alfaiataria para ajustes rápidos e consultoria de estilo',
  'Estúdio fotográfico para retratos profissionais pós-atendimento',
  'Agenda digital com lembretes inteligentes e histórico de looks',
];

export const barbers = [
  {
    id: 'rafael-lima',
    name: 'Rafael Lima',
    role: 'Founder',
    bio: "Idealizador da BoldMen's. Une técnicas clássicas e visão contemporânea para experiências sob medida.",
    focus: 'Founder',
    image: 'https://boldmens.co/wp-content/uploads/2025/02/foto-rafa.jpg.webp',
  },
  {
    id: 'felipe-silva',
    name: 'Felipe Silva',
    role: 'Hairstylist',
    bio: 'Especialista em cortes estruturados, barba de precisão e acabamentos rápidos.',
    focus: 'Hairstylist',
    image: 'https://boldmens.co/wp-content/uploads/2025/02/foto-felipe-silva.jpg.webp',
  },
  {
    id: 'vitor-hugo',
    name: 'Vitor Hugo',
    role: 'Barber',
    bio: 'Especialista em fades limpos, barbas de precisão e finalizações com toalha quente.',
    focus: 'Skin fade & barba',
    image: '/vitor-hugo.jpg',
  },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Encontrei um espaço onde resolvo imagem, barba e networking em uma única tarde.',
    name: 'Felipe Andrade',
    role: 'Empreendedor · Lisboa',
  },
  {
    id: 'testimonial-2',
    quote: 'O ritual com toalha quente é incomparável. A equipa lembra cada detalhe do que funciona para mim.',
    name: 'Rodrigo Lopes',
    role: 'Diretor Criativo · Cascais',
  },
  {
    id: 'testimonial-3',
    quote: 'Profissionalismo impecável e foco absoluto em otimizar o meu tempo.',
    name: 'Miguel Sarti',
    role: 'Consultor · Estoril',
  },
];

export const gallery = [
  { id: 'space', src: '/galeria/espaco.jpg', alt: "Lounge principal BoldMen's" },
  { id: 'cut', src: '/galeria/corte.jpg', alt: 'Corte de cabelo em execução' },
  { id: 'cut-secondary', src: '/galeria/corte2.jpg', alt: 'Corte de cabelo em detalhe' },
  { id: 'details', src: '/galeria/detalhesprodutos.jpg', alt: 'Detalhes de produtos exclusivos' },
  { id: 'details-secondary', src: '/galeria/detalhes.jpg', alt: 'Texturas e acabamentos do espaço' },
  { id: 'cafe', src: '/galeria/cafe.jpg', alt: 'Café servido aos clientes' },
];
