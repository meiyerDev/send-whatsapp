import { ClipboardEvent, FC, KeyboardEvent, useState } from 'react';
import PhoneInput, { CountryData, PhoneInputProps } from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';

const PhoneInputComponent = (PhoneInput as { default?: FC<PhoneInputProps> }).default
  ? (PhoneInput as unknown as { default: FC<PhoneInputProps> }).default
  : PhoneInput;

type Props = {
  value: string;
  isValid: boolean;
  preferredCountry?: string;
  onChange: (value: string, country: CountryData['countryCode']) => void;
  onEnter: () => void;
};

export const PhoneField = ({ value, onChange, onEnter, isValid, preferredCountry }: Props) => {
  const [country, setCountry] = useState<CountryData['countryCode']>(preferredCountry ?? 've');
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    // @ts-expect-error: window.clipboardData is not defined in types
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text')?.replace(/[^0-9]/g, '') ?? '';

    if (pastedData.startsWith('+')) {
      onChange(pastedData, '');
      return;
    }

    if (pastedData.startsWith('0') && preferredCountry === 've') {
      onChange(e.currentTarget.value + pastedData.slice(1), '');
      return;
    }
  };

  return (
    <PhoneInputComponent
      value={value}
      localization={es}
      defaultMask={'... ... ....'}
      alwaysDefaultMask={true}
      country={country}
      preferredCountries={['ve', 'co', 'us']}
      countryCodeEditable={false}
      enableSearch={true}
      disableSearchIcon={true}
      onEnterKeyPress={onEnter}
      onMount={(value: string, country: CountryData) => {
        setCountry(country.countryCode);
        onChange(value, country.countryCode);
      }}
      onChange={(value: string, country: CountryData) => onChange(value, country.countryCode)}
      isValid={isValid}
      inputProps={{
        onPaste: handlePaste,
      }}
      inputClass='peer'
      buttonClass='peer-focus:outline-none peer-focus:border-emerald-300 peer-focus-visible:outline-none'
    />
  )
};
