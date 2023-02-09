import ReactDOM from 'react-dom/client';
import App from './App';
import '@/i18n';
import 'react-phone-input-2/lib/style.css';
import './index.css';
import { SettingsProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SettingsProvider>
    <App />
  </SettingsProvider>,
);
