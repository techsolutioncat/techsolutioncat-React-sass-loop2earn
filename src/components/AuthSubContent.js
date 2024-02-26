import React from 'react';

function SubContent() {
    return (
        <div className="sub-cont">
            <img src="/images/subcont-bg.png" className='background-image' alt="logo"/>
            <header className="nav-appbar subcont-header">
                <a href="/#" className="logo-link">
                    <img src="/images/logo.png" alt="logo"/>
                </a>
            </header>
            <div className='main-image'>
                <img src="/images/Loop2Earn.png" alt="logo"/>
            </div>
        </div>
    );
};

export default SubContent;