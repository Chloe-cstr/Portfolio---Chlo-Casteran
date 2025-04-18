import './presentation.scss';
import Button from '../Button/Button';

const Presentation = () =>{
    return(
        <div className='presentation'>
            <h1 className='presentation__title'>Chloë Casteran</h1>
            <h2 className='presentation__subtitle'>Intégrateur web</h2>
            <p className='presentation__text'>
                Passionnée par le développement web, j’aime transformer 
                des maquettes en expériences interactives et soignées, 
                tout en respectant les bonnes pratiques du web.
            </p>
            <div className='presentation__button'>
                <Button 
                    text="ME CONTACTER"
                    className="button__full"
                />
                <Button 
                    text="GITHUB"
                    icon="fa-brands fa-github"
                    className="button__empty"
                />
            </div>
        </div>
    )
}

export default Presentation;