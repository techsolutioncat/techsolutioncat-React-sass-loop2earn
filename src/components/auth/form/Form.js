import Input from '../../common/input/Input'
import user from '../../../assets/images/svg/user.svg'
import mail from '../../../assets/images/svg/mail.svg'
import phone from '../../../assets/images/svg/phone.svg'
import './style.scss'

function Form(props) {
    const {title, subtitle} = props.data;

    return (
        <div className='auth-form'>
            <form className='submit-form'>
                <div className="form-header">
                    <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                    <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                </div>
                <div className='form-body'>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={user} alt='emailicon'></img>, type: 'text', placeholder: 'Username' }}></Input>
                    </div>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={mail} alt='emailicon'></img>, type: 'email', placeholder: 'Email' }}></Input>
                    </div>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={phone} alt='emailicon'></img>, type: 'tel', placeholder: 'Phone Number' }}></Input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;