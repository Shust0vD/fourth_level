import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import * as ReactDOM from 'react-dom';
import moment from 'moment';

function App() {
  var now = moment(new Date());
  localStorage.setItem('entryDate', now);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.body);
