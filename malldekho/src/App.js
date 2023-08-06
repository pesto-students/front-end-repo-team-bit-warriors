// import './App.css';
// import Header from './components/Header'
// import Footer from './components/Footer'
// import SearchBox from './components/SearchBox';


// function App() {
//   return (
//     <div className="App">
//       <Header/>

//       <SearchBox/>
//       <header className="App-header">
//         Namaste sabhiko!
//       </header>
//       <Footer/>
//     </div>
//   );
// }
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MallPage from './pages/Mall';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthPage from './pages/Auth';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" component={Home} element={<Home/>} />
        <Route path="/mall/:mall_id" element={<MallPage/>} />
        <Route path='/Login' element={<AuthPage></AuthPage>}></Route>
      </Routes>
      <Footer/>
    </Router> 
  );
};





export default App;
