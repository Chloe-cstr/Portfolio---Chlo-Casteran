import './contact.scss';
import Form from '../Form/Form';

const Contact = () => {
    return(
        <div className='contact'>
            <h2 className='contact__title'>CONTACTEZ-MOI !</h2>
            <h3 className='contact__subtitle'>Vous avez un projet ? Discutons-en !</h3>
            <Form />
        </div>
    )
}

export default Contact;