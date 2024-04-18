import ReactDOM from 'react-dom/client';
import MantineProvider from './providers/mantine-provider';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);