import './form.scss';
import { useState } from 'react';


const Form = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const data = new FormData(form);
        const response = await fetch("https://formspree.io/f/xeogalvp", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            setStatus("Votre message a bien été envoyé !");
        } else {
            setStatus("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} className="form__content">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" className='form__content__input' required/>
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form__content__input' required/>
                
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" className='form__content__textarea' required></textarea>
                
                <input type="submit" value="Envoyer" className='form__content__submit'/>
            </form>

            {status && <p className="form__status">{status}</p>}
        </div>
    );
}

export default Form;