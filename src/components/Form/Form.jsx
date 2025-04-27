import './form.scss';

const Form = () =>{
    return(
        <div className='form'>
            <form method="post" className="form__content">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" className='form__content__input'/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form__content__input'/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" className='form__content__textarea'></textarea>
                <input type="submit" value="Envoyer" className='form__content__submit'/>
            </form>
        </div>
    )
}

export default Form;