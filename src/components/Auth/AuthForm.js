import React from 'react';
import Header from './Header';
import FormInput from './FormInput';
//Import Social icons
import google from '../../assets/images/google.png';
import metamask from '../../assets/images/metamask.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
// Import svg
import userIcon from '../../assets/images/user.svg';
import emailIcon from '../../assets/images/email.svg';
import phoneIcon from '../../assets/images/phone.svg';

function AuthForm(props) {
    const { title, subtitle } = props; // or const appResults = props.appResults;

    return (
        <div className="auth-form">
            <Header />
            <div className='form-body'>
                <div className='main-form-body'>
                    <div className='form-head-group'>
                        <h3 className='form-title sign-up-title m-0'>{title}</h3>
                        <p className='form-title-alt sign-up-title-alt'>{subtitle}</p>
                    </div>
                    <form action='#' method='post' className='form-body-group'>
                        <FormInput
                            data={{
                                TagClass: 'inputWithIcon',
                                svg: <img src={userIcon} alt='usericon'></img>,
                                InputType: 'text',
                                InputClass: 'username',
                                InputPlaceholder: 'Username',
                            }}
                        />
                        <FormInput
                            data={{
                                TagClass: 'inputWithIcon',
                                svg: <img src={emailIcon} alt='emailicon'></img>,
                                InputType: 'text',
                                InputClass: 'email',
                                InputPlaceholder: 'Email',
                            }}
                        />
                        <FormInput
                            data={{
                                TagClass: 'inputWithIcon',
                                svg: <img src={phoneIcon} alt='phoneicon'></img>,
                                InputType: 'text',
                                InputClass: 'phonenumber',
                                InputPlaceholder: 'Phone Number',
                            }}
                        />
                        <div className='inputWithIcon'>
                            <a href="/#" className="formSubmit btn-link">Proceed</a>
                        </div>
                        <div className='inputWithIcon formRenderButton'>
                            <a href="/#" className="renderButton">I already have an account</a>
                        </div>
                    </form>
                    <div className='icon-group'>
                        <a href="/#" className="link-icon icon-google">
                            <img src={google} alt="link-icon" />
                        </a>
                        <a href="/#" className="link-icon icon-metamask">
                            <img src={metamask} alt="link-icon" />
                        </a>
                        <a href="/#" className="link-icon icon-instagram">
                            <img src={instagram} alt="link-icon" />
                        </a>
                        <a href="/#" className="link-icon icon-twitter">
                            <img src={twitter} alt="link-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;