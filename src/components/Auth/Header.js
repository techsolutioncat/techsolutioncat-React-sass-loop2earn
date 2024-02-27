import React from 'react';
import mobileLogo from '../../assets/images/mobile-logo.png';

function Header() {
    return (
        <header className="nav-appbar form-header">
            <div className='mobile-logo'>
                <img src={mobileLogo} alt="logo"/>
            </div>
            <div className='nav-link-group'>
                <a href="/#" className="nav-btn-link link-login">Log in</a>
                <a href="/#" className="nav-btn-link link-signup btn-link">Sign up</a>
            </div>
        </header>
    );
};

export default Header;