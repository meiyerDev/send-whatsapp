import { FC, ReactNode, createContext, useState, useContext } from 'react';

type SettingsContextType = {
  preferredCountry: string;
  handleChangePreferredCountry: (value: string) => void;
};

const SettingsContext = createContext({} as SettingsContextType);

export const SettingsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [preferredCountry, setPreferredCountry] = useState(localStorage.getItem('preferredCountry') || 'co');

  const handleChangePreferredCountry = (value: string) => {
    setPreferredCountry(value);
    localStorage.setItem('preferredCountry', value);
  };

  return (
    <SettingsContext.Provider
      value={{
        preferredCountry,
        handleChangePreferredCountry,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
};
