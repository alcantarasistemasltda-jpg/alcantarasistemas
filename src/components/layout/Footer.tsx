import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060911] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow discreto de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de Conteúdo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Declaração Institucional */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1">
              <Image
                src="/img/logo_branc.png"
                alt="Alcantara Sistemas Logo"
                width={360}
                height={90}
                className="h-14 sm:h-16 md:h-20 w-auto max-w-[280px] sm:max-w-[340px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engenharia de Software, Produtos Proprietários e Operação Contínua.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Operação Contínua de Plataformas</span>
            </div>
          </div>

          {/* Colunas de Navegação */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Coluna 1: Empresa */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li>
                  <a href="#sobre" className="hover:text-cyan-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#metodologia" className="hover:text-cyan-400 transition-colors">
                    Metodologia
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Soluções */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider">
                Soluções
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li>
                  <a href="#servicos" className="hover:text-cyan-400 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-cyan-400 transition-colors">
                    Produtos
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider">
                Contato
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li>
                  <a href="#contato" className="hover:text-cyan-400 transition-colors">
                    Iniciar Projeto
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-cyan-400 transition-colors">
                    Falar com a Alcantara
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Rodapé Inferior (Copyright & Legal) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Política de Privacidade
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
