import { useState } from 'react';
import { PhoneField } from '@/components';
import { useGenerateWhatsappUrl } from '@/hooks';

const App = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-gray-100'>
      <div className='absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg' />
      <div className='absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg' />

      <div className='relative mx-auto h-full max-w-xs'>
        <div className='flex h-full flex-col items-center justify-center gap-4'>
          <h1 className='text-3xl font-bold'>
            Send Your <span className='text-emerald-500'>WhatsApp</span>
          </h1>

          <PhoneField onChange={(value) => setWhatsAppUrl(value)} onValidate={(isValid) => setIsPhoneValid(isValid)} />

          <a
            aria-disabled={!isPhoneValid}
            href={whatsAppUrl}
            rel='noopener noreferrer'
            className={`w-full rounded-3xl bg-emerald-500 py-2 text-center font-medium text-white ${
              !isPhoneValid && 'pointer-events-none opacity-60'
            }`}
          >
            Send
          </a>
        </div>

        <div className='absolute bottom-10 w-full'>
          <p className='w-full text-center text-xs font-semibold text-gray-500'>
            Made with <span className='text-red-500'>❤</span> by{' '}
            <a
              href='https://github.com/meiyerDev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-emerald-500 hover:underline'
            >
              @meiyerDev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
