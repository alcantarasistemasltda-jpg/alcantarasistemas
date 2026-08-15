// Tipos base para o ecossistema de dados da Alcantara Sistemas

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  iconName: "Globe" | "Database" | "BarChart3" | "Cpu" | "Layout";
  features: string[];
  capabilities: string[];
  ctaText?: string;
}

// Entidade que representa Produtos, Plataformas ou Startups da Alcantara Sistemas
export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  type: "Startup Proprietária" | "Plataforma SaaS" | "Sistema Enterprise";
  productStatus: "Em Operação" | "Beta Fechado" | "Em Desenvolvimento" | "Em Escala";
  logoUrl?: string;
  url?: string; // URL pública oficial do produto
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

// Entidade independente que representa Sistemas com Ambiente Operacional Real em Produção
export interface ProductionSystemItem {
  id: string;
  productId?: string; // Opcional: vincula ao produto proprietário correspondente, se houver
  slug: string;
  name: string;
  description: string;
  clientCategory: string;
  environmentType: "Produção Enterprise" | "Produção B2B" | "SaaS Ativo";
  accessUrl?: string;
  isAccessRestricted?: boolean;
  // Campos operacionais reservados para futura integração de Health Check / Ping
  status?: "operational" | "maintenance" | "updating";
  uptime?: string;
  version?: string;
}

// Dados estruturados dos serviços da Alcantara Sistemas
export const servicesData: ServiceItem[] = [
  {
    id: "servico-1",
    slug: "plataformas-web-saas",
    title: "Plataformas Web & SaaS",
    shortDescription: "Sistemas web, plataformas digitais e produtos SaaS escaláveis desenvolvidos com arquitetura moderna e alta performance.",
    fullDescription: "Desenvolvemos produtos digitais completos com foco em experiência do usuário, segurança e capacidade de escala para milhares de acessos simultâneos.",
    iconName: "Globe",
    features: [
      "Arquiteturas orientadas a microsserviços",
      "Frontends ultrarrápidos com Next.js & React",
      "Modelos de assinatura e checkout integrados",
      "Painéis administrativos enterprise"
    ],
    capabilities: ["Projetos de raiz (Greenfield)", "Refatoração de Legados", "Infraestrutura Cloud"]
  },
  {
    id: "servico-2",
    slug: "erps-sistemas-gestao",
    title: "ERPs & Sistemas de Gestão",
    shortDescription: "Sistemas personalizados para automação de processos operacionais, administrativos e financeiros de alta complexidade.",
    fullDescription: "Projetamos ecossistemas operacionais customizados para eliminar gargalos manuais, integrar departamentos e garantir controle total do negócio.",
    iconName: "Database",
    features: [
      "Gestão financeira, faturamento e DRE",
      "Módulos operacionais sob medida",
      "Controle de estoque, logística e suprimentos",
      "Papeis, permissões e auditoria de acesso"
    ],
    capabilities: ["Automação Operacional", "Compliance & Segurança", "Relatórios Customizados"]
  },
  {
    id: "servico-3",
    slug: "crms-dados-inteligencia",
    title: "CRMs, Dados & Inteligência",
    shortDescription: "Plataformas de relacionamento, centralização de dados e inteligência estratégica para tomada de decisão.",
    fullDescription: "Transformamos dados dispersos em dashboards executivos dinâmicos e funis de atendimento totalmente integrados.",
    iconName: "BarChart3",
    features: [
      "Gestão de pipeline de vendas e atendimento",
      "Dashboards de Business Intelligence em tempo real",
      "Centralização de dados de múltiplos canais",
      "Automação de réguas de relacionamento"
    ],
    capabilities: ["Pipelines Customizados", "Visão 360° do Cliente", "Analytics Avançado"]
  },
  {
    id: "servico-4",
    slug: "apis-automacao-ia",
    title: "APIs, Automação & IA",
    shortDescription: "Integrações de ecossistemas, automações inteligentes de processos e soluções utilizando Inteligência Artificial.",
    fullDescription: "Conectamos sistemas legados, terceiros e modelos de IA para orquestrar fluxos de trabalho inteligentes e autônomos.",
    iconName: "Cpu",
    features: [
      "Construção e consumo de APIs REST & GraphQL",
      "Orquestração de fluxos com IA gerativa e LLMs",
      "Webhooks, filas e processamento assíncrono",
      "Automação de tarefas repetitivas de alta escala"
    ],
    capabilities: ["Integração de Modelos IA", "Middleware Enterprise", "Automação de Processos"]
  },
  {
    id: "servico-5",
    slug: "sites-landing-pages",
    title: "Sites & Landing Pages",
    shortDescription: "Criamos sites institucionais, landing pages e páginas comerciais modernas, responsivas e orientadas à conversão, integradas às tecnologias e serviços necessários para a operação digital do negócio.",
    fullDescription: "Desenvolvimento de presenciais digitais institucionais e páginas comerciais de alta performance com design moderno e otimização para SEO e conversão.",
    iconName: "Layout",
    features: [
      "Sites Institucionais",
      "Landing Pages",
      "Páginas de Produtos & Serviços"
    ],
    capabilities: ["Design Responsivo", "Otimização de Conversão", "SEO & Performance"],
    ctaText: "Criar meu site"
  }
];

// Catálogo Oficial de Produtos e Plataformas da Alcantara Sistemas
export const productsData: ProductItem[] = [
  {
    id: "prod-gestao-eklesia",
    slug: "gestao-eklesia",
    name: "Gestão Eklésia",
    tagline: "ERP para igrejas, ministérios e comunidades",
    shortDescription: "Plataforma de gestão desenvolvida para centralizar e organizar operações administrativas, financeiras, ministeriais e institucionais de igrejas e organizações religiosas.",
    category: "Gestão Eclesiástica",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://gestaoeklesia.com.br/",
  },
  {
    id: "prod-creeser",
    slug: "creeser",
    name: "CREESER",
    tagline: "ERP Educacional",
    shortDescription: "Plataforma de gestão educacional desenvolvida para integrar operações acadêmicas, financeiras e administrativas de instituições de ensino.",
    category: "EdTech / Gestão Educacional",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://creeser.com.br/",
  },
  {
    id: "prod-mandatopro",
    slug: "mandatopro",
    name: "MandatoPRO",
    tagline: "CRM para gestão de mandatos",
    shortDescription: "Plataforma de gestão desenvolvida para organizar relacionamentos, eleitores, lideranças, atendimentos e atividades de mandatos políticos em uma operação centralizada.",
    category: "GovTech / Gestão de Mandatos",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://mandatopro.vercel.app/",
  },
  {
    id: "prod-insystens",
    slug: "insystens",
    name: "INSYSTENS",
    tagline: "Plataforma de Inteligência Eleitoral",
    shortDescription: "Plataforma de inteligência e análise de dados eleitorais desenvolvida para transformar dados em informações estratégicas para análise, planejamento e tomada de decisão.",
    category: "GovTech / Inteligência Eleitoral",
    type: "Plataforma SaaS",
    productStatus: "Em Desenvolvimento",
  },
  {
    id: "prod-memorius",
    slug: "memorius",
    name: "Memorius",
    tagline: "Plataforma SaaS para Gestão Funerária",
    shortDescription: "Plataforma de gestão para empresas funerárias e planos de assistência familiar, centralizando clientes, contratos, mensalidades, cobranças, atendimentos, indicadores e gestão financeira.",
    category: "SaaS / Gestão Funerária",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://www.memorius.com.br/",
  },
  {
    id: "prod-cliniva",
    slug: "cliniva",
    name: "Cliniva",
    tagline: "Copiloto de Terapia",
    shortDescription: "Plataforma de IA de apoio a profissionais de saúde mental para organizar sessões, gerar insights estruturados, sugerir perguntas e acompanhar a evolução dos pacientes, mantendo o profissional no controle das decisões clínicas.",
    category: "HealthTech / Saúde Mental",
    type: "Plataforma SaaS",
    productStatus: "Beta Fechado",
    url: "https://www.cliniva.com.br/",
  },
  {
    id: "prod-congregapay",
    slug: "congregapay",
    name: "CongregaPay",
    tagline: "Gestão de Eventos para Igrejas e Ministérios",
    shortDescription: "Plataforma SaaS para gestão de eventos de igrejas, ministérios e conferências cristãs, centralizando inscrições, pagamentos, check-in, certificados e acompanhamento dos participantes.",
    category: "SaaS / Gestão de Eventos Cristãos",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://congregapay.com.br/",
  },
  {
    id: "prod-gestao-servus",
    slug: "gestao-servus",
    name: "Gestão Servus",
    tagline: "Plataforma de gestão para convenções e associações",
    shortDescription: "Plataforma de gestão institucional desenvolvida para centralizar membros, estrutura hierárquica, financeiro, credenciais, eventos e relatórios de convenções, associações e organizações com múltiplas unidades.",
    category: "Gestão Institucional / Convenções e Associações",
    type: "Plataforma SaaS",
    productStatus: "Em Operação",
    url: "https://gestaoservus.com.br/",
  }
];

// Mapeamento dos Sistemas em Produção com Ambientes Reais Confirmados (Vinculados ou Independentes)
export const productionSystemsData: ProductionSystemItem[] = [
  {
    id: "sys-gestao-eklesia",
    productId: "prod-gestao-eklesia",
    slug: "gestao-eklesia",
    name: "Gestão Eklésia",
    description: "Ambiente operacional ativo do ERP Gestão Eklésia para centralização e gestão de organizações religiosas.",
    clientCategory: "Gestão Eclesiástica",
    environmentType: "SaaS Ativo",
    accessUrl: "https://gestaoeklesia.com.br/",
  },
  {
    id: "sys-creeser",
    productId: "prod-creeser",
    slug: "creeser",
    name: "CREESER",
    description: "Ambiente operacional ativo da plataforma CREESER para gestão de instituições de ensino.",
    clientCategory: "EdTech / Gestão Educacional",
    environmentType: "SaaS Ativo",
    accessUrl: "https://creeser.com.br/",
  },
  {
    id: "sys-mandatopro",
    productId: "prod-mandatopro",
    slug: "mandatopro",
    name: "MandatoPRO",
    description: "Ambiente operacional ativo do CRM MandatoPRO para gestão e relacionamento em mandatos políticos.",
    clientCategory: "GovTech / Gestão de Mandatos",
    environmentType: "SaaS Ativo",
    accessUrl: "https://mandatopro.vercel.app/",
  },
  {
    id: "sys-memorius",
    productId: "prod-memorius",
    slug: "memorius",
    name: "Memorius",
    description: "Ambiente operacional ativo do sistema Memorius para gestão de empresas funerárias e planos de assistência familiar.",
    clientCategory: "SaaS / Gestão Funerária",
    environmentType: "SaaS Ativo",
    accessUrl: "https://www.memorius.com.br/",
  },
  {
    id: "sys-cliniva",
    productId: "prod-cliniva",
    slug: "cliniva",
    name: "Cliniva",
    description: "Ambiente operacional da plataforma Cliniva em fase de acesso antecipado para profissionais de saúde mental.",
    clientCategory: "HealthTech / Saúde Mental",
    environmentType: "SaaS Ativo",
    accessUrl: "https://www.cliniva.com.br/",
  },
  {
    id: "sys-congregapay",
    productId: "prod-congregapay",
    slug: "congregapay",
    name: "CongregaPay",
    description: "Ambiente operacional ativo da plataforma CongregaPay para inscrições e gestão de eventos e conferências.",
    clientCategory: "SaaS / Gestão de Eventos Cristãos",
    environmentType: "SaaS Ativo",
    accessUrl: "https://congregapay.com.br/",
  },
  {
    id: "sys-gestao-servus",
    productId: "prod-gestao-servus",
    slug: "gestao-servus",
    name: "Gestão Servus",
    description: "Ambiente operacional ativo do sistema Gestão Servus para convenções, associações e organizações multiunidades.",
    clientCategory: "Gestão Institucional / Convenções e Associações",
    environmentType: "SaaS Ativo",
    accessUrl: "https://gestaoservus.com.br/",
  }
];
