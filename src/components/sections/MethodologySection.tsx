import { Search, Compass, Code, Rocket, TrendingUp, ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: typeof Search;
  tag: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Discovery & Estratégia",
    description: "Entendimento aprofundado do negócio, análise de processos operacionais e definição clara de requisitos.",
    icon: Search,
    tag: "Imersão",
  },
  {
    number: "02",
    title: "Arquitetura & UX",
    description: "Modelagem da arquitetura técnica, desenho de banco de dados, APIs e prototipagem da experiência do usuário.",
    icon: Compass,
    tag: "Planejamento",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construção incremental com código limpo, validação contínua, testes automatizados e integrações.",
    icon: Code,
    tag: "Engenharia",
  },
  {
    number: "04",
    title: "Deploy & Produção",
    description: "Implantação em nuvem de alta disponibilidade, configuração de segurança e preparação para a operação ao vivo.",
    icon: Rocket,
    tag: "Go-Live",
  },
  {
    number: "05",
    title: "Evolução & Escala",
    description: "Monitoramento contínuo, otimizações de performance e roadmap de novas funcionalidades para crescimento sustentável.",
    icon: TrendingUp,
    tag: "Operação Contínua",
  },
];

export function MethodologySection() {
  return (
    <section id="metodologia" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>CICLO COMPLETO DE PRODUTO</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Metodologia & Engenharia.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Aplicamos em cada projeto a mesma metodologia testada e comprovada no desenvolvimento das nossas plataformas proprietárias. Um ciclo estruturado, seguro e focado na evolução contínua.
          </p>
        </div>

        {/* Jornada Visual em 5 Etapas (Grid Desktop & Linha do Tempo Responsiva) */}
        <div className="relative">
          
          {/* Linha Conectora de Fundo para Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-indigo-500/20 -translate-y-12 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step: StepItem, index: number) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20"
                >
                  <div>
                    {/* Topo: Número da Etapa & Ícone */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Tag de Fases */}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 mb-3 inline-block">
                      {step.tag}
                    </span>

                    {/* Título & Descrição */}
                    <h3 className="font-outfit text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Indicador de Transição da Linha do Tempo no Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-4 pt-3 border-t border-slate-900 flex justify-end">
                      <span className="text-[10px] font-mono text-slate-500 inline-flex items-center gap-1">
                        Próxima Etapa <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner de Fechamento Comercial */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl">
            <span className="text-sm font-mono text-slate-400">Ciclo Contínuo de Engenharia:</span>
            <span className="font-outfit text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              "Da primeira ideia à operação contínua."
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
