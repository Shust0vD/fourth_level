import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import moment from 'moment';

function App() {
  localStorage.setItem('entryDate', moment(new Date()));

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
