import { Code2, Cpu, Database, Server, Bot, CheckCircle2, ShieldCheck } from "lucide-react";

interface TechCategory {
  title: string;
  icon: typeof Code2;
  description: string;
  items: { name: string; context?: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Interfaces de alta velocidade, acessibilidade e interatividade responsiva.",
    items: [
      { name: "Next.js (App Router)", context: "Renderização SSR & Estática" },
      { name: "React 19", context: "Componentização & Estado Local" },
      { name: "TypeScript", context: "Tipagem Estática & Manutenibilidade" },
      { name: "Tailwind CSS v4", context: "Design System & Estilização Utilitária" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Cpu,
    description: "Arquiteturas para comunicação eficiente entre cliente e servidor.",
    items: [
      { name: "APIs RESTful", context: "Integração Padronizada HTTP/JSON" },
      { name: "Arquitetura Modular", context: "Separação de Responsabilidades & Escala" },
    ],
  },
  {
    title: "Dados & Modelagem",
    icon: Database,
    description: "Estruturação de dados relacionais e tipagem segura para aplicação.",
    items: [
      { name: "Modelagem Relacional", context: "Integridade & Schema de Dados" },
      { name: "Interfaces TypeScript", context: "Modelos de Dados Fortemente Tipados" },
    ],
  },
  {
    title: "Infraestrutura & Ambiente",
    icon: Server,
    description: "Ambientes de execução modernos orientados a performance.",
    items: [
      { name: "Node.js Environment", context: "Ambiente de Execução JavaScript/TypeScript" },
      { name: "Modern Build Pipelines", context: "Turbopack & Otimização de Pacotes" },
    ],
  },
  {
    title: "Integrações & Processos",
    icon: Bot,
    description: "Automação e orquestração de rotinas e fluxos operacionais.",
    items: [
      { name: "Webhooks & Eventos", context: "Comunicação entre Sistemas" },
      { name: "Automações de Processo", context: "Workflows Digitais sob Medida" },
    ],
  },
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luzes de fundo decorativas */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGENHARIA & STACK TÉCNICA</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Tecnologia que sustenta produtos reais.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Arquitetura moderna, engenharia de software e infraestrutura preparada para sistemas que precisam evoluir.
          </p>
        </div>

        {/* Categorias Tecnológicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category: TechCategory) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.title}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="font-outfit text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Lista de Tecnologias da Categoria */}
                  <div className="space-y-3 pt-4 border-t border-slate-900">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        {item.context && (
                          <span className="text-[10px] font-mono text-slate-500 ml-5">
                            {item.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mensagem de Fechamento Comercial / Arquitetural */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-outfit text-lg font-bold text-white mb-1">
              Pragmáticos por definição
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Escolhemos a tecnologia de acordo com o desafio do negócio e os requisitos de escala — nunca o contrário.
            </p>
          </div>

          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20 shrink-0">
            Arquitetura Adequada ao Problema
          </span>
        </div>

      </div>
    </section>
  );
}
