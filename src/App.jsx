import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import moment from 'moment';

function App() {
  localStorage.setItem('entryDate', moment(new Date()));

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
