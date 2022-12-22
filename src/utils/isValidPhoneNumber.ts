import libphonenumbers from 'libphonenumbers';

const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();
export const isValidPhoneNumber = (phoneNumber: string, country: string): boolean => {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, country);
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};
