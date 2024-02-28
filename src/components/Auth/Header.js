import mobileLogo from '../../assets/images/mobile-logo.png';

function Header() {
    return (
        <header className="nav-appbar form-header">
            <div className='mobile-logo'>
                <img src={mobileLogo} alt="logo"/>
            </div>
            <div className='nav-link-group'>
                <a href="/#" className="nav-btn-link link-login" onClick={() => Header('login')}>Log in</a>
                <a href="/#" className="nav-btn-link link-signup btn-link" onClick={() => Header('signup')}>Sign up</a>
            </div>
        </header>
    );
};

export default Header;