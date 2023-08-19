import React, { useState } from "react";
import LoginForm from '../components/Login';
import RegisterForm from '../components/Register';
import '../styles/Auth.css';

const AuthenticationPage = () => {

    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="wrapperContainer">
            <div className="wrapper">
            <div className="tabs">
                <button
                className={`navTab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => handleTabChange('login')}
                >
                Login
                </button>
                <button
                className={`navTab ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => handleTabChange('register')}
                >
                Register
                </button>
            </div>
            <div className="contentWrapper">
                {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
            </div>
            </div>
        </div>
      );
};

export default AuthenticationPage;