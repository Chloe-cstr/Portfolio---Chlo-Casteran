import './realisations.scss';
import WorkCard from '../WorkCard/WorkCard';
import KasaImg from '../../assets/images/kasa.png';
import KasaTel from '../../assets/images/kasa_tel.png';
import  KasaOrdi from '../../assets/images/kasa_ordi.png';
import SophieImg from '../../assets/images/sophie.png';
import SophieTel from '../../assets/images/sophie_tel.png';
import SophieOrdi from '../../assets/images/sophie_ordi.png';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';
import { useState } from 'react';

const Realisations = () => {
    const workData = [
        { 
            image : KasaImg, 
            imageTel: KasaTel, 
            imageOrdi : KasaOrdi, 
            date : "2024", 
            title : "Application web de location immobilière",
            description : "Projet réalisé avec React pour le site de location Kasa. Utilisation des routes dynamiques, des composants réutilisables et d’une architecture SPA pour une navigation fluide et moderne."
        },
        { 
            image : SophieImg, 
            imageTel: SophieTel, 
            imageOrdi : SophieOrdi, 
            date : "2024", 
            title : "Portfolio - Sophie Bluel",
            description : "Le site propose une interface d’administration accessible via une page de connexion sécurisée. Une fois connecté, l’utilisateur peut ajouter, supprimer ou modifier les projets affichés dans la galerie grâce à une modale interactive. Les données sont gérées via des appels à une API, et l'affichage s’adapte dynamiquement selon que l’utilisateur est connecté ou non."
        }
    ]

    const [selectedWork, setSelectedWork] = useState(null);

    return(
        <div className='realisations' id='realisations'>
            <h2 className='realisations__title'>RÉALISATIONS</h2>
            <div className='realisations__card'>
                {workData.map((work, index) => (
                    <WorkCard 
                        key={index}
                        image={work.image}
                        date={work.date}
                        title={work.title}
                        onClick={() => setSelectedWork(work)}
                    />
                ))}
                {selectedWork && (
                    <div className="modal" onClick={() => setSelectedWork(null)}>
                        <div className="modal__content" onClick={e => e.stopPropagation()}>
                            <i class="fa-solid fa-xmark modal__content__icon" onClick={() => setSelectedWork(null)}></i>
                            <Slider images={[selectedWork.imageOrdi, selectedWork.imageTel]} />
                            <div className='modal__content__description'>
                                <div className='modal__content__description__box'>
                                    <h3 className='modal__content__description__box__title'>{selectedWork.title}</h3>
                                    <Button 
                                        text="GITHUB"
                                        icon="fa-brands fa-github"
                                        className="button__empty modal__content__description__box__button"
                                    />
                                </div>
                                <p>
                                    {selectedWork.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Realisations;