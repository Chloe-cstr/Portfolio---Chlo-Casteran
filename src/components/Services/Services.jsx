import './services.scss';
import Card from '../Card/Card';

const Services = () =>{
    const cardsData = [
        {
          icon: 'fa-solid fa-desktop',
          title: 'Multi - Plateforme',
          text: 'Compatible tous supports, tablette & application mobile',
        },
        {
          icon: ' fa-solid fa-code',
          title: 'Développement Web',
          text: 'Création de site web | Application sur-mesure repondant aux besoins des clients',
        },
        {
          icon: 'fa-solid fa-gem',
          title: 'Projets Web',
          text: 'Landing page, site vitrine, e-commerce, intranet, application web & mobile.',
        },
        {
          icon: 'fa-solid fa-bullseye',
          title: 'Référencement',
          text: 'CMS | Framework, code optimiser pour le référencement naturel',
        },
        {
          icon: 'fa-solid fa-handshake',
          title: 'Accompagnement',
          text: 'Je gère entièrement les projets en assurant une communication constante',
        },
        {
          icon: 'fa-solid fa-rocket',
          title: 'Maintenance Web',
          text: 'Gestion d hébérgement, garanti d accessibilité, intégration régulière des mises à jour de sécurité',
        },
      ];

    return(
        <div className="services">
            <h2 className='services__title'>SERVICES</h2>
            <div className='services__card'>
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services;