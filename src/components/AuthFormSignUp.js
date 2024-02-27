import React from 'react';

function SubContent() {
    return (
        <div className="form-signup">
            <header className="nav-appbar form-header">
                <div className='mobile-logo'>
                    <img src="/images/mobile-logo.png" alt="logo"/>
                </div>
                <div className='nav-link-group'>
                    <a href="/#" className="nav-btn-link link-login">Log in</a>
                    <a href="/#" className="nav-btn-link link-signup btn-link">Sign up</a>
                </div>
            </header>
            <div className='form-body'>
                <div className='main-form-body'>
                    <div className='form-head-group'>
                        <h3 className='form-title sign-up-title m-0'>Create Account</h3>
                        <p className='form-title-alt sign-up-title-alt'>Provide necessary information to proceed with registration or sign up with social media</p>
                    </div>
                    <form action='#' method='post' className='form-body-group'>
                        <div className='inputWithIcon'>
                            <div className='icon'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0018 13C6.83173 13 4.0126 14.5306 2.2178 16.906C1.83151 17.4172 1.63836 17.6728 1.64468 18.0183C1.64956 18.2852 1.81716 18.6219 2.02717 18.7867C2.29899 19 2.67567 19 3.42904 19H16.5746C17.3279 19 17.7046 19 17.9764 18.7867C18.1864 18.6219 18.354 18.2852 18.3589 18.0183C18.3652 17.6728 18.1721 17.4172 17.7858 16.906C15.991 14.5306 13.1719 13 10.0018 13Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.0018 10C12.4871 10 14.5018 7.98528 14.5018 5.5C14.5018 3.01472 12.4871 1 10.0018 1C7.51652 1 5.5018 3.01472 5.5018 5.5C5.5018 7.98528 7.51652 10 10.0018 10Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type='text' className='username' placeholder='Username'/>
                        </div>
                        <div className='inputWithIcon'>
                            <div className='icon'>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 15L13.8571 9M8.14286 9L1.50003 15M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z" stroke="#24262D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type='text' className='email' placeholder='Email'/>
                        </div>
                        <div className='inputWithIcon'>
                            <div className='icon'>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type='text' className='phonenumber' placeholder='Phone Number'/>
                        </div>
                        <div className='inputWithIcon formSubmitButton'>
                            <a href="/#" className="form-submit btn-link">Proceed</a>
                        </div>
                        <div className='inputWithIcon formHaveAccount'>
                            <a href="/#" className="goto-login">I already have an account</a>
                        </div>
                    </form>
                    <div className='icon-group'>
                        <a href="/#" className="link-icon">
                            <img src="/images/google.png" alt="link-icon"/>
                        </a>
                        <a href="/#" className="link-icon">
                            <img src="/images/metamask.png" alt="link-icon"/>
                        </a>
                        <a href="/#" className="link-icon">
                            <img src="/images/twitter.png" alt="link-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubContent;