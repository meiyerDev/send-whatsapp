import { useState } from 'react';
import { PhoneField } from '@/components';
import { useGenerateWhatsappUrl } from '@/hooks';
import { isValidPhoneNumber } from '@/utils';
import { CountryData } from 'react-phone-input-2';

const App = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (numberValue: string, country: CountryData) => {
    if (!numberValue.startsWith('+')) numberValue = `+${numberValue}`;
    const isValidPhone = isValidPhoneNumber(numberValue, country.countryCode);
    setIsPhoneValid(isValidPhone);
    setWhatsAppUrl(isValidPhone ? numberValue : '');
  };

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-gray-100'>
      <div className='absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg' />
      <div className='absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg' />

      <div className='relative mx-auto h-full max-w-xs'>
        <div className='flex h-full flex-col items-center justify-center gap-4'>
          <h1 className='text-3xl font-bold'>
            Send Your <span className='text-emerald-500'>WhatsApp</span>
          </h1>

          <PhoneField onChange={handleChange} isValid={isPhoneValid} />

          <a
            aria-disabled={!isPhoneValid}
            href={whatsAppUrl}
            rel='noopener noreferrer'
            className={`flex w-full items-center justify-center rounded-3xl bg-emerald-500 py-2 font-medium text-white ${
              (!isPhoneValid || isLoading) && 'pointer-events-none opacity-60'
            }`}
            onClick={() => setIsLoading(true)}
          >
            {isLoading && (
              <svg
                className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            )}
            <span>{isLoading ? 'Loading...' : 'Send'}</span>
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
