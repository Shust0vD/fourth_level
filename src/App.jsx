import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import moment from 'moment';
import { useEffect } from 'react';

function App() {
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  useEffect(() => {
    if (!localStorage.getItem('entryDate')) {
      localStorage.setItem('entryDate', moment(new Date()));
    }
    window.addEventListener('beforeunload', clearLocalStorage, false);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage, false);
    };
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
