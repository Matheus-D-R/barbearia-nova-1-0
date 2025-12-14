import { BusinessInfo, ServiceItem } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Barbearia Imperial",
  address: "Avenida Brasil Sul, nº 1035",
  cityState: "Ilha Solteira – SP",
  fullAddress: "Avenida Brasil Sul, nº 1035 – Ilha Solteira – SP",
  phoneDisplay: "(18) 99999-9999",
  phoneRaw: "5518999999999",
  whatsappMessage: "Olá! Gostaria de agendar um horário.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Brasil+Sul+1035+Ilha+Solteira+SP"
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    name: 'Corte Tradicional',
    price: 'R$ 50,00',
    description: 'Técnica clássica com tesoura e acabamento impecável.'
  },
  {
    id: '2',
    name: 'Corte Moderno (Fade/Degradê)',
    price: 'R$ 60,00',
    description: 'Estilo contemporâneo com transições suaves e precisas.'
  },
  {
    id: '3',
    name: 'Barba Completa (Barboterapia)',
    price: 'R$ 45,00',
    description: 'Toalha quente, óleos essenciais e navalha afiada.'
  },
  {
    id: '4',
    name: 'Combo Imperial (Corte + Barba)',
    price: 'R$ 90,00',
    description: 'A experiência completa para o homem exigente.'
  },
  {
    id: '5',
    name: 'Acabamento / Pezinho',
    price: 'R$ 20,00',
    description: 'Manutenção rápida dos contornos.'
  },
  {
    id: '6',
    name: 'Camuflagem de Grisalhos',
    price: 'R$ 55,00',
    description: 'Rejuvenescimento natural e discreto dos fios.'
  }
];