import './App.css';
import Dashboardlayout from './Layout';
import { Router } from './routes';
import store from './ReduxStore/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
    <Provider store={store}>

          <Router/>

    </Provider>
    </>
  );
}

export default App;
