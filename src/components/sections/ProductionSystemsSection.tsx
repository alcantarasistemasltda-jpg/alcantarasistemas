import { Server, ExternalLink, ArrowUpRight, Activity, ShieldCheck } from "lucide-react";
import { productionSystemsData, ProductionSystemItem } from "@/data";

export function ProductionSystemsSection() {
  return (
    <section id="sistemas" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luzes sutis de fundo */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>VITRINE OPERACIONAL</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Sistemas em Produção.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Plataformas digitais e ecossistemas corporativos desenvolvidos, mantidos e operados pela Alcantara Sistemas para clientes e parceiros estratégicos.
          </p>
        </div>

        {/* Condicional: Renderização dos Cards de Sistemas OU Estado de Preparação do Hub Operacional */}
        {productionSystemsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSystemsData.map((system: ProductionSystemItem) => (
              <div
                key={system.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {system.clientCategory}
                    </span>

                    {system.environmentType && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {system.environmentType}
                      </span>
                    )}
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {system.name}
                  </h3>

                  {system.description && (
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {system.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {system.accessUrl ? (
                    <a
                      href={system.accessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                    >
                      <span>Acessar Plataforma</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      {system.isAccessRestricted ? "Acesso Restrito Enterprise" : "Ambiente Interno"}
                    </span>
                  )}

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Ver Solução</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Card Estruturado de Vitrine Operacional & Hub de Produção (Respeita 100% a ausência de dados fictícios) */
          <div className="relative rounded-2xl border border-slate-800/90 bg-slate-950/50 p-8 sm:p-12 backdrop-blur-xl text-center flex flex-col items-center justify-center space-y-6">
            
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 shadow-inner">
              <Server className="w-7 h-7" />
            </div>

            <div className="max-w-xl space-y-2">
              <h3 className="font-outfit text-2xl font-bold text-white">
                Hub de Sistemas em Produção Preparado
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A vitrine operacional está pronta para listar as plataformas ativas dos clientes e ecossistemas da Alcantara Sistemas, com estrutura isolada para cada ambiente.
              </p>
            </div>

            {/* Painel Estrutural de Recursos Preparados para Integração Futura */}
            <div className="w-full max-w-3xl pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs text-slate-400">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Links & Acessos</p>
                  <p className="text-[10px] text-slate-500">URLs diretas de produção</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Health Checks</p>
                  <p className="text-[10px] text-slate-500">Pronto para monitoramento live</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Visão /sistemas/[slug]</p>
                  <p className="text-[10px] text-slate-500">Páginas detalhadas de casos</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
