// Tipos base para expansão futura do ecossistema de dados

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string;
  features: string[];
}

export interface StartupItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  businessModel: string;
  metrics?: { label: string; value: string }[];
  url?: string;
}

export interface SystemItem {
  id: string;
  name: string;
  clientCategory: string;
  status: "operational" | "maintenance" | "updating";
  uptime: string;
  accessUrl: string;
}

// Stubs vazios para preenchimento posterior na fase de seções
export const servicesData: ServiceItem[] = [];
export const startupsData: StartupItem[] = [];
export const productionSystemsData: SystemItem[] = [];
