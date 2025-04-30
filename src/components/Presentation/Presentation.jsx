import './presentation.scss';
import Button from '../Button/Button';

const Presentation = () =>{
    return(
        <div className='presentation'>
            <h1 className='presentation__title'>Chloë Casteran</h1>
            <h2 className='presentation__subtitle'>Intégrateur web</h2>
            <p className='presentation__text'>
                Diplômée d’un DEUG en mathématiques et informatique ainsi 
                que d’une formation d’intégratrice web, je suis passionnée 
                par le développement web et j’aime transformer des maquettes 
                en expériences interactives et soignées, tout en respectant 
                les bonnes pratiques du web.
            </p>
            <div className='presentation__button'>
                <Button 
                    text="ME CONTACTER"
                    className="button__full"
                    link="#contact"
                />
                <Button 
                    text="GITHUB"
                    icon="fa-brands fa-github"
                    className="button__empty"
                    link="https://github.com/Chloe-cstr?tab=repositories"
                />
            </div>
        </div>
    )
}

export default Presentation;