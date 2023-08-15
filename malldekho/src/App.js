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
import NotFoundPage from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mall/:mall_id" element={<MallPage />} />
        <Route path="/store/:store_id" element={<StorePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/user/:user_id" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/" exact element={<Home />}/>
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for unknown routes */}
      </Routes>
      <Footer />
    </Router>
  );
};



export default App;
