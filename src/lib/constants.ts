export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    whatsapp: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Alcantara Sistemas",
  description: "Engenharia de Software e Operação de Plataformas Digitais de Alta Performance.",
  url: "https://alcantarasistemas.com.br",
  ogImage: "/og.png",
  links: {
    whatsapp: "https://wa.me/5500000000000",
    email: "contato@alcantarasistemas.com.br",
  },
};
