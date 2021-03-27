import './App.css';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Main from './components/MainComponent';
import history from './components/HistoryComponent';


const store = Store();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
          <div className="App">
            <Main/>
          </div>
      </Router>
  </Provider>
  );
}

export default App;
