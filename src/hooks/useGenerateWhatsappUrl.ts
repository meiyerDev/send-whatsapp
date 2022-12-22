import { useState } from 'react';

type GenerateWhatsappUrl = (phone: string) => void;

type UseGenerateWhatsappUrl = [string, GenerateWhatsappUrl];

export const useGenerateWhatsappUrl = (): UseGenerateWhatsappUrl => {
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const generateWhatsappUrl: GenerateWhatsappUrl = (phone: string) => {
    const url = `https://wa.me/${phone}`;
    setWhatsappUrl(url);
  };

  return [whatsappUrl, generateWhatsappUrl];
};
