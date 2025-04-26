import LoaderImg from '../../assets/images/loader.png';
import './loader.scss';

const Loader = () => {
    return (
      <div className="loader">
        <img src={LoaderImg} alt="Chargement" className='loader__image'/>
      </div>
    );
};
  
export default Loader;