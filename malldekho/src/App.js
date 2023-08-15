import React from 'react';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'

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
      <Switch>
        <Route path="/store/:store_id" component={StorePage} />
        <Route path="/mall/:mall_id" component={MallPage} />
        <Route path="/user/:user_id" component={ProfilePage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFoundPage} /> {/* Catch-all for unknown routes */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
