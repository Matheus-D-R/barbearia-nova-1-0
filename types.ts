import React from 'react';

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BusinessInfo {
  name: string;
  address: string;
  cityState: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string; // Format for links: 5518999999999
  whatsappMessage: string;
  mapsUrl: string;
}