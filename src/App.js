
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appstore from './utils/appstore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<Watch/>,
    },
    {
      path:"demo",
      element:<><Demo/> <Demo1/></>,
    }
  ]

}])

function App() {
  return (
    <Provider store={appstore}>
    <div className="App">
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
