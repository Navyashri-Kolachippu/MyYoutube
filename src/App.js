
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appstore from './utils/appstore';

function App() {
  return (
    <Provider store={appstore}>
    <div className="App">
     <Head/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
