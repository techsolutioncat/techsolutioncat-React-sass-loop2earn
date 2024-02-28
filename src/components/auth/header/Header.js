
import { Link } from 'react-router-dom'
import Button from '../../common/button/Button'
import './style.scss'
import logo from '../../../assets/images/logo.svg'
import MobileLogo from '../../../assets/images/mobile-logo.svg'

function Header() {
    return (
        <header className='header-main__wrapper'>
            <div className='header-main__container d-flex'>
                <div className='site-logo'>
                    <Link to="/" className='logo'>
                        <img src={logo} alt='logo'></img>
                    </Link>
                    <Link to="/" className='mobile-logo'>
                        <img src={MobileLogo} alt='logo'></img>
                    </Link>
                </div>
                <div className='site-navigation'>
                    <Button data={{ link: '/login', label: 'Log in', LinkClass: 'nav-link link-login btn-transparent font-Syne fw-500 br-10 br-10 td-none'}}></Button>
                    <Button data={{ link: '/', label: 'Sign Up', LinkClass: 'nav-link link-signup btn-gradient font-Syne fw-700 br-10 br-10 td-none'}}></Button>
                </div>
            </div>
        </header>
    );
}

export default Header;