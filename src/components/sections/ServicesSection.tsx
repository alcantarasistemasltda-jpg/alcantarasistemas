import { Globe, Database, BarChart3, Cpu, Layout, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData, ServiceItem } from "@/data";

const iconMap = {
  Globe: Globe,
  Database: Database,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Layout: Layout,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-[#090d16] overflow-hidden">
      {/* Luzes sutis de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção (Centralizado) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SERVIÇOS DE ENGENHARIA & SOLUÇÕES</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Engenharia de Software de Ponta a Ponta para a sua Operação.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Aplicamos a mesma engenharia, segurança e rigor técnico dos nossos produtos proprietários no desenvolvimento, modernização e operação contínua das soluções do seu negócio.
          </p>
        </div>

        {/* Grid dos Pilares de Serviços (Layout flexível responsivo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName];

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Efeito Glow no Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Topo do Card: Ícone & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors uppercase tracking-wider">
                      {service.badgeName || "Core Service"}
                    </span>
                  </div>

                  {/* Título & Descrição */}
                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Lista de Funcionalidades/Recursos */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/60 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer do Card / Ação */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-900">
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link shrink-0 ml-2"
                  >
                    <span>{service.ctaText || "Especificar Projeto"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Encerramento da Seção de Serviços */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-outfit text-xl font-bold text-white">
              Precisa de um sistema com arquitetura sob medida para o seu modelo de negócio?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Analisamos sua demanda operacional e desenhamos a solução ideal do zero à implantação.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-sm shrink-0 shadow-lg shadow-cyan-500/20"
          >
            Falar com Engenheiro de Software
          </a>
        </div>

      </div>
    </section>
  );
}
