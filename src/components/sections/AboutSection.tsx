import { Cpu, Layout, Activity, ShieldAlert, CheckCircle2 } from "lucide-react";

interface AboutPillar {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Cpu;
  badge: string;
}

const pillars: AboutPillar[] = [
  {
    title: "Engenharia",
    subtitle: "Arquitetura & Qualidade",
    description: "Projetamos sistemas com arquitetura robusta, código limpo e padrões enterprise focados em desempenho e segurança.",
    icon: Cpu,
    badge: "Core Tech",
  },
  {
    title: "Produto",
    subtitle: "Experiência & Negócio",
    description: "Transformamos gargalos e demandas operacionais reais em plataformas digitais intuitivas e orientadas a resultados.",
    icon: Layout,
    badge: "Product Driven",
  },
  {
    title: "Evolução",
    subtitle: "Operação & Escala",
    description: "Garantimos a sustentabilidade, monitoramento e atualização contínua dos sistemas para acompanhar o crescimento do negócio.",
    icon: Activity,
    badge: "Continuous Ops",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Institucional */}
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SOBRE A ALCANTARA SISTEMAS</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Engenharia de Software, Produtos Proprietários e Operação Contínua.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Unimos a disciplina da engenharia de software à experiência real de quem constrói e opera suas próprias plataformas SaaS. Transformamos operações complexas em tecnologia escalável e de alto impacto.
          </p>
        </div>

        {/* Composition dos Três Pilares da Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar: AboutPillar) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Glow sutil no Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800 uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400/90 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400/70" />
                  <span>Padrão de Qualidade Alcantara</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mensagem Institucional de Fechamento (Dupla Atuação) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <h4 className="font-outfit text-xl font-bold text-white">
              Engenharia de Software de Soluções e Venture Studio
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Atuamos em duas frentes complementares: no **desenvolvimento de soluções corporativas sob medida** para nossos clientes e na **criação e operação contínua de produtos e startups próprias**.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 shrink-0">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Operação & Desenvolvimento Ativos</span>
          </div>
        </div>

      </div>
    </section>
  );
}
