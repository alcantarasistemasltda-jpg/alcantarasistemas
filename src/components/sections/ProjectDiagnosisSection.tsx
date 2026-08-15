"use client";

import { useState, FormEvent } from "react";
import { MessageSquare, CheckCircle2, Sparkles, Send, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const solutionOptions = [
  "Sistema sob medida",
  "ERP / Gestão",
  "CRM",
  "Plataforma SaaS",
  "Automação / Integração",
  "IA",
  "Modernização de sistema existente",
  "Outro",
  "Site Institucional / Landing Page",
];

export function ProjectDiagnosisSection() {
  const [selectedSolution, setSelectedSolution] = useState<string>("Sistema sob medida");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; description?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; phone?: string; description?: string } = {};

    if (!name.trim()) newErrors.name = "Informe seu nome completo.";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Informe um e-mail válido.";
    if (!phone.trim() || phone.trim().length < 8) newErrors.phone = "Informe um WhatsApp ou telefone de contato.";
    if (!description.trim()) newErrors.description = "Descreva sucintamente sua ideia ou projeto.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Montar mensagem estruturada
    const message = `*Novo Diagnóstico Técnico - Alcantara Sistemas*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*WhatsApp/Telefone:* ${phone}\n` +
      `*Solução Desejada:* ${selectedSolution}\n\n` +
      `*Descrição do Projeto:* ${description}`;

    // Verificar se existe um número oficial válido
    const rawNumber = siteConfig.links.whatsapp.replace("https://wa.me/", "").replace(/\D/g, "");
    const isValidNumber = rawNumber.length >= 10 && !/^550+$/.test(rawNumber);

    if (isValidNumber) {
      const generatedUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
      setWhatsappUrl(generatedUrl);
      window.open(generatedUrl, "_blank", "noopener,noreferrer");
    } else {
      setWhatsappUrl(null);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setSelectedSolution("Sistema sob medida");
    setIsSubmitted(false);
    setWhatsappUrl(null);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[#090d16] border-t border-slate-800/60 overflow-hidden">
      {/* Luzes de fundo de alto contraste para destacar a seção de conversão */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/90 via-slate-900/90 to-slate-950/90 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40">
          
          {/* Badge de Ação Comercial */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIAGNÓSTICO TÉCNICO & ORÇAMENTO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Coluna de Mensagem Principal */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Tem um projeto em mente?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Conte-nos o que você precisa. Nossa equipe pode transformar sua necessidade em uma solução digital estruturada, escalável e pronta para crescer.
              </p>

              {/* Lista de Compromissos de Atendimento */}
              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Análise de viabilidade técnica e arquitetura recomendada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Dimensionamento de escopo e fases de implantação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Atendimento direto por engenheiros de software</span>
                </div>
              </div>

              <div className="pt-4 hidden lg:flex items-center gap-3 text-xs font-mono text-slate-400">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Atendimento humanizado e resposta direta</span>
              </div>
            </div>

            {/* Coluna do Formulário Comercial de Qualificação */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
              
              {isSubmitted ? (
                /* Estado Visual de Sucesso Pós-Envio */
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white">
                    Solicitação Registrada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Obrigado, <strong className="text-white">{name}</strong>. Recebemos seus dados para o diagnóstico de <strong className="text-cyan-300">{selectedSolution}</strong>. Nossos engenheiros analisarão suas informações.
                  </p>

                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-lg shadow-emerald-500/20 text-xs"
                    >
                      <span>Abrir conversa no WhatsApp</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    <span>Enviar nova solicitação</span>
                  </button>
                </div>
              ) : (
                /* Formulário Comercial */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Passo 1: Seleção da Solução */}
                  <div>
                    <label className="block font-outfit text-sm font-bold text-white mb-1">
                      1. Qual solução você procura?
                    </label>
                    <p className="text-xs font-mono text-slate-400 mb-4">
                      Selecione uma opção inicial para direcionarmos seu atendimento:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solutionOptions.map((option) => {
                        const isSelected = selectedSolution === option;

                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() => setSelectedSolution(option)}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                              isSelected
                                ? "bg-cyan-500/15 border-cyan-500/60 text-cyan-300 font-semibold shadow-md shadow-cyan-500/10"
                                : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                            }`}
                          >
                            <span>{option}</span>
                            <div
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-400"
                                  : "border-slate-700 bg-slate-950"
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Passo 2: Dados de Contato e Descrição */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-4">
                    <label className="block font-outfit text-sm font-bold text-white">
                      2. Seus dados de contato e do projeto
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                          Nome Completo *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Seu nome"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                        />
                        {errors.name && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.name}</p>}
                      </div>

                      {/* E-mail */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                          E-mail Profissional *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu.email@empresa.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                        />
                        {errors.email && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono text-slate-300 mb-1">
                        WhatsApp / Telefone de Contato *
                      </label>
                      <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(00) 90000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                      />
                      {errors.phone && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Descrição do Projeto */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-mono text-slate-300 mb-1">
                        Descrição do Projeto / Necessidade *
                      </label>
                      <textarea
                        id="description"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descreva resumidamente os objetivos, funcionalidades desejadas ou o problema a ser resolvido..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all resize-none"
                      />
                      {errors.description && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.description}</p>}
                    </div>
                  </div>

                  {/* Botão Principal de Submissão do Formulário */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                    >
                      <span>Solicitar Diagnóstico Técnico</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
