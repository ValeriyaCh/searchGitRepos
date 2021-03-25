import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Main from './components/MainComponent'

const store = Store();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
      </BrowserRouter>
  </Provider>
  );
}

export default App;
