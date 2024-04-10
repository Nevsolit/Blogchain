import AppRoutes from '~/routes';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useAppSelector } from './hooks';
import { useEffect } from 'react';

function App() {
  const mode = useAppSelector((state) => state.settings.mode);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
