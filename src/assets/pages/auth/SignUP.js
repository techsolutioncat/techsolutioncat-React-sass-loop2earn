import '../../scss/Auth.scss';
import SubCont from '../../../components/Auth/AuthSubContent';
import AuthForm from '../../../components/Auth/AuthForm';
import MobileImage from '../../../assets/images/mobile-subcontent.png';

function SignUp() {
  return (
    <div className='page-wrap'>
      <div className='mobileImage'>
        <img src={MobileImage} alt="img" />
      </div>
      <div className='main-content d-flex'>
        <SubCont />
        <AuthForm title={'Create Account'} subtitle={'Provide necessary information to proceed with registration or sign up with social media'} />
      </div>
    </div>
  );
}

export default SignUp;
