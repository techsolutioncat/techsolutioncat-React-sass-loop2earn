import React from 'react';
import logo from '../../assets/images/logo.png';
import Loop2Earn from '../../assets/images/Loop2Earn.png';
import SubcontBGImage from '../../assets/images/subcont-bg.png';

function SubContent() {
    return (
        <div className="sub-cont">
            <img src={SubcontBGImage} className='background-image' alt="logo"/>
            <header className="nav-appbar subcont-header">
                <a href="/#" className="logo-link">
                    <img src={logo} alt="logo"/>
                </a>
            </header>
            <div className='main-image'>
                <img src={Loop2Earn} alt="Main"/>
            </div>
        </div>
    );
};

export default SubContent;