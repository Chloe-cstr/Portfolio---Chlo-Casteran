import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import Perso from '../../assets/images/perso.png';
import Services from '../../components/Services/Services';
import Competences from '../../components/Competences/Competence';
import Realisations from '../../components/Realisations/Realisations';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './home.scss'

const Home = () => {
  return (
    <div className="body-container">
      <Header />
      <div className='section-presentation' id='presentation'>
        <div className='section-presentation__text'>
          <Presentation />
        </div>
        <div className='section-presentation__image'>
          <img src={Perso} alt="Personnage minimaliste" className='section-presentation__image--width' />
        </div>
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='competences'>
        <Competences />
      </div>
      <div id='realisations'>
        <Realisations />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;