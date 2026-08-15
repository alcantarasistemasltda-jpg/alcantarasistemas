import { ArrowRight, Terminal, Layers, ShieldCheck, Cpu, Code2, Server } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Elementos de fundo arquitetural (Glows e Grid de Engenharia) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid sutil de segundo plano */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto & Mensagem Comercial */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Badge Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Engenharia de Software & Operação de Plataformas</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engenharia de Software e{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Plataformas Digitais.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Projetamos, desenvolvemos e operamos sistemas digitais sob medida para transformar operações complexas em tecnologia escalável.
            </p>

            {/* CTAs de Conversão */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Iniciar um Projeto</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200 text-base backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span>Conhecer nossas Plataformas</span>
              </a>
            </div>

            {/* Indicadores de Engenharia */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-slate-800/80 w-full max-w-lg text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Alta Disponibilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Arquitetura Modular</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Operação Contínua</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual de Engenharia & Software (Mockup Institucional de Arquitetura) */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="w-full max-w-md lg:max-w-none rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative">
              
              {/* Barra do Terminal de Controle */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shrink-0" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
                  <span className="ml-2 text-xs font-mono text-slate-400 truncate">alcantara-core-system</span>
                </div>
                <Terminal className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
              </div>

              {/* Diagrama Conceitual de Plataforma & Engenharia */}
              <div className="mt-5 space-y-4 font-mono text-xs">
                
                {/* Camada 1: Client Frontends */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-200 font-semibold truncate">Web & Mobile Frontends</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">React • Next.js • Native Interfaces</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">READY</span>
                </div>

                {/* Conector Visual */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500/80 to-blue-500/80" />
                </div>

                {/* Camada 2: Core Processing & APIs */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-cyan-300 font-semibold truncate">Core System & APIs</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Distributed Microservices • Automation</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0">ACTIVE</span>
                </div>

                {/* Conector Visual */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500/80 to-indigo-500/80" />
                </div>

                {/* Camada 3: Cloud & Persistence */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Server className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-200 font-semibold truncate">Cloud & High-Availability</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Isolated DBs • DevOps Infrastructure</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">99.9% UPTIME</span>
                </div>
              </div>

              {/* Status footer do componente visual */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                <span>Architecture Status: Operational</span>
                <span className="text-cyan-400 font-semibold">v2.4 Enterprise</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
