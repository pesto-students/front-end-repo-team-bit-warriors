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
import StorePage from './pages/Store';
import ContactUsPage from './pages/Contact';
import AboutUsPage from './pages/About';
import ProfilePage from './pages/Profile';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" component={Home} element={<Home/>} />
        <Route path="/mall/:mall_id" element={<MallPage/>} />
        <Route path="/store/:store_id" element={<StorePage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/user/:user_id" element={<ProfilePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<RegisterPage/>} />

      </Routes>
      <Footer/>
    </Router> 
  );
};


export default App;
