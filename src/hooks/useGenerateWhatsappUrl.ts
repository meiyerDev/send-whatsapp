import { useState } from 'react';

type GenerateWhatsappUrl = (phone: string) => void;

type UseGenerateWhatsappUrl = [string, GenerateWhatsappUrl];

export const useGenerateWhatsappUrl = (): UseGenerateWhatsappUrl => {
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const generateWhatsappUrl: GenerateWhatsappUrl = (phone: string) => {
    const queryParams = new URLSearchParams([
      ['phone', phone],
      ['type', 'phone_number'],
      ['app_absent', '0'],
    ]);
    const url = `https://api.whatsapp.com/send/?${queryParams.toString()}`;
    setWhatsappUrl(url);
  };

  return [whatsappUrl, generateWhatsappUrl];
};
