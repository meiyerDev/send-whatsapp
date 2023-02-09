import { FC, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useSettings } from '@/context';
import { SelectField } from './SelectField';

type Props = {
  open: boolean;
  close: () => void;
};

export const SettingsModal: FC<Props> = ({ open, close }) => {
  const { t, i18n } = useTranslation();
  const { preferredCountry, handleChangePreferredCountry } = useSettings();

  const [languageLocal, setLanguageLocal] = useState(i18n.language);
  const [preferredCountryLocal, setPreferredCountryLocal] = useState(preferredCountry);

  const handleSave = () => {
    handleChangePreferredCountry(preferredCountryLocal);
    i18n.changeLanguage(languageLocal);
    document.title = t('document.title');
    close();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-visible rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
                    onClick={close}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                      {t('app.settings.title')}
                    </Dialog.Title>
                    <div className='mt-5 mb-3 flex flex-col gap-3 md:flex-row md:gap-2'>
                      <SelectField
                        label={t('app.settings.labels.preferredCountry')}
                        options={[
                          { label: t('app.countries.ar'), value: 'ar' },
                          { label: t('app.countries.cl'), value: 'cl' },
                          { label: t('app.countries.co'), value: 'co' },
                          { label: t('app.countries.ec'), value: 'ec' },
                          { label: t('app.countries.pe'), value: 'pe' },
                          { label: t('app.countries.us'), value: 'us' },
                          { label: t('app.countries.ve'), value: 've' },
                        ]}
                        value={preferredCountryLocal}
                        onChange={setPreferredCountryLocal}
                      />
                      <SelectField
                        label={t('app.settings.labels.language')}
                        options={[
                          { label: t('app.languages.en'), value: 'en' },
                          { label: t('app.languages.es'), value: 'es' },
                        ]}
                        value={languageLocal}
                        onChange={setLanguageLocal}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-600/80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={handleSave}
                  >
                    {t('app.buttons.save')}
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                    onClick={close}
                  >
                    {t('app.buttons.cancel')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
