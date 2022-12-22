import { isValidPhoneNumber as validatorPhoneNumber, CountryCode } from 'libphonenumber-js';

export const isValidPhoneNumber = (phoneNumber: string, country: string): boolean => {
  return validatorPhoneNumber(phoneNumber, country.toUpperCase() as CountryCode);
};
