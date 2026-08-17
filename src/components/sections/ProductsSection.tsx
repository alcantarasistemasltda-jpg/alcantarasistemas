import { Rocket, ExternalLink, Sparkles, Layers, Terminal } from "lucide-react";
import { productsData, ProductItem } from "@/data";

export function ProductsSection() {
  return (
    <section id="produtos" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luzes sutis de fundo */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção (Centralizado) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>VENTURE STUDIO & PRODUTOS PRÓPRIOS</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Plataformas Proprietárias & Startups do Nosso Ecossistema.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Como Venture Studio, aplicamos nossa própria engenharia na concepção, lançamento e operação contínua de plataformas SaaS proprietárias em diversos setores.
          </p>
        </div>

        {/* Condicional: Renderização da Vitrine de Cards OU Estado de Preparação */}
        {productsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product: ProductItem) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {product.category}
                    </span>
                    {product.productStatus && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {product.productStatus}
                      </span>
                    )}
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    {product.type}
                  </span>

                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shrink-0"
                    >
                      <span>Conhecer Plataforma</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-500 bg-slate-900/60 border border-slate-800 shrink-0">
                      Em Desenvolvimento
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Card Estruturado de Preparação de Portfólio de Startups & Produtos */
          <div className="relative rounded-2xl border border-slate-800/90 bg-slate-950/50 p-8 sm:p-12 backdrop-blur-xl text-center flex flex-col items-center justify-center space-y-6">
            
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 shadow-inner">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>

            <div className="max-w-xl space-y-2">
              <h3 className="font-outfit text-2xl font-bold text-white">
                Portfólio de Startups & Produtos em Fase de Cadastro
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A arquitetura da vitrine de produtos e startups está totalmente configurada e pronta para receber o catálogo oficial de soluções proprietárias da Alcantara Sistemas.
              </p>
            </div>

            {/* Mockup de Estrutura de Campos Preparados */}
            <div className="w-full max-w-2xl pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Estrutura Modular</p>
                  <p className="text-[10px] text-slate-500">Pronto para /produtos/[slug]</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Métricas Chave</p>
                  <p className="text-[10px] text-slate-500">Suporte a KPIs reais</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-slate-200 font-semibold">Status de Operação</p>
                  <p className="text-[10px] text-slate-500">Beta, SaaS & Live Ops</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
