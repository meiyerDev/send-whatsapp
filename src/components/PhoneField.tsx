import { ChangeEvent, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';
import { isValidPhoneNumber } from '@/utils';

type Props = {
  onChange: (value: string) => void;
  onValidate: (isValid: boolean) => void;
};

type Country = {
  dialCode: string;
  iso2: string;
};

export const PhoneField = ({ onChange, onValidate }: Props) => {
  const [value, setValue] = useState<string>('');

  const getIsFromCountry = (country: object): Country => {
    return country as Country;
  };

  const handleChange = (
    numberValue: string,
    country: object,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => {
    if (numberValue.length === getIsFromCountry(country).dialCode.length) return;
    setValue(numberValue);
    onChange(formattedValue.replace(/\s/g, ''));
  };

  const handleValidate = (numberValue: string, country: object): boolean => {
    if (value.length === 0) return true;
    if (!numberValue.startsWith('+')) numberValue = `+${numberValue}`;
    const isValid = isValidPhoneNumber(numberValue, getIsFromCountry(country).iso2);
    onValidate(isValid);
    return isValid;
  };

  return (
    <PhoneInput
      localization={es}
      defaultMask={'... ... ....'}
      alwaysDefaultMask={true}
      country={'ve'}
      preferredCountries={['ve', 'co', 'us']}
      countryCodeEditable={false}
      enableSearch={true}
      disableSearchIcon={true}
      value={value}
      onChange={handleChange}
      isValid={handleValidate}
      inputClass='peer'
      buttonClass='peer-focus:outline-none peer-focus:border-emerald-300 peer-focus-visible:outline-none'
    />
  );
};
