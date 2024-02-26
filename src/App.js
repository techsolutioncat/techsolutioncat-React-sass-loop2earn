import './App.scss';
import SubCont from './components/AuthSubContent';
import FormSingUP from './components/AuthFormSignUp';

function App() {
  return (
    <div className='page-wrap'>
      <div className='mobileImage'>
        <img src="/images/mbile-subcontent.png" alt="img"/>
      </div>
      <div className='main-content d-flex'>
        <SubCont />
        <FormSingUP />
      </div>
    </div>
  );
}

export default App;
