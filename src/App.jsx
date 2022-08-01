import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import moment from 'moment';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('entryDate')) {
      localStorage.setItem('entryDate', moment(new Date()));
    }
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
