import { useRef, useState } from 'react';
import { CountryData } from 'react-phone-input-2';
import { useGenerateWhatsappUrl } from '@/hooks';
import { isValidPhoneNumber } from '@/utils';

import { useSettings } from '@/context';
import { PhoneField, SettingsModal } from '@/components';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  const { preferredCountry } = useSettings();

  const [whatsAppUrl, setWhatsAppUrl] = useGenerateWhatsappUrl();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModalSettings, setIsOpenModalSettings] = useState(false);

  const handleChange = (numberValue: string, country: CountryData['countryCode']) => {
    setPhone(numberValue);
    if (!numberValue.startsWith('+')) numberValue = `+${numberValue}`;
    const isValidPhone = isValidPhoneNumber(numberValue, country);
    setIsPhoneValid(isValidPhone);
    setWhatsAppUrl(isValidPhone ? numberValue : '');
  };

  const activateLink = () => {
    if (linkRef.current && isPhoneValid) {
      linkRef.current.click();
    }
  }

  const activateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-gray-100'>
      <SettingsModal open={isOpenModalSettings} close={() => setIsOpenModalSettings(false)} />

      <button
        type='button'
        className='fixed top-5 right-5 cursor-pointer rounded-xl p-6 focus-visible:outline focus-visible:outline-emerald-600'
        onClick={() => setIsOpenModalSettings(true)}
      >
        <Cog6ToothIcon
          className='h-5 w-5 text-emerald-500'
          onClick={() => setIsOpenModalSettings(true)}
        />
      </button>

      <div className='absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg' />
      <div className='absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg' />

      <div className='relative mx-auto h-full max-w-xs'>
        <div className='flex h-full flex-col items-center justify-center gap-4'>
          <h1 className='text-3xl font-bold' dangerouslySetInnerHTML={{ __html: t('app.title') as string }}></h1>

          <PhoneField
            value={phone}
            onEnter={activateLink}
            preferredCountry={preferredCountry}
            onChange={handleChange}
            isValid={isPhoneValid}
          />

          <a
            ref={linkRef}
            aria-disabled={!isPhoneValid}
            href={whatsAppUrl}
            rel='noopener noreferrer'
            className={`flex w-full items-center justify-center rounded-3xl bg-emerald-500 py-2 font-medium text-white focus-visible:outline focus-visible:outline-emerald-600 ${(!isPhoneValid || isLoading) && 'pointer-events-none opacity-60'
              }`}
            onClick={activateLoading}
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
            <span>{isLoading ? t('app.buttons.loading') + '...' : t('app.buttons.send')}</span>
          </a>
        </div>

        <div className='absolute bottom-10 w-full'>
          <p className='w-full text-center text-xs font-semibold text-gray-500'>
            {t('app.footer.madeWidth')} <span className='text-red-500'>❤</span> {t('app.footer.by')}{' '}
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
