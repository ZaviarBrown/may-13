import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PokeInfoContextProvider from './components/PokeInfo.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PokeInfoContextProvider>
            <App />
        </PokeInfoContextProvider>
    </StrictMode>
);
