// import logo from './logo.svg';
import { store } from './store';
import { Provider } from 'react-redux';

import './App.css';
import Maincomponent from './Components/MainComponent/Maincomponent';

function App() {
  return (
    <div className="App">

    <Provider store={store}>
    <div className="App">
      <Maincomponent/>
    </div>
  </Provider>
    </div>
  );
}

export default App;
