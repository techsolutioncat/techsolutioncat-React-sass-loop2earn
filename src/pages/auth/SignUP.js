import '../../assets/scss/Auth.scss';
import SubCont from '../../components/Auth/AuthSubContent';
import SignUpForm from '../../components/Auth/SignUpForm';
import MobileImage from '../../assets/images/mobile-subcontent.png';

function SignUp() {
  return (
    <div className='page-wrap'>
      <div className='mobileImage'>
        <img src={MobileImage} alt="img" />
      </div>
      <div className='main-content d-flex'>
        <SubCont />
        <SignUpForm title={'Create Account'} subtitle={'Provide necessary information to proceed with registration or sign up with social media'} />
      </div>
    </div>
  );
}

export default SignUp;
