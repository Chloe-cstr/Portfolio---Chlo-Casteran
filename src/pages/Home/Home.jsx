import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Perso from '../../assets/images/perso.png';
import Services from '../../components/Services/Services';
import './home.scss'

const Home = () => {
  return (
    <div className="body-container">
      <Header />
      <div className='section-presentation'>
        <div className='section-presentation__text'>
          <Presentation />
        </div>
        <div className='section-presentation__image'>
          <img src={Perso} alt="Personnage minimaliste" className='section-presentation__image--width' />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;