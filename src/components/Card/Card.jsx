import PropTypes from 'prop-types';
import "./card.scss";

const Card = ({icon, title, text}) =>{

    return(
        <div className='content-card'>
            <i className={`content-card__icon ${icon}`}></i>
            <h4 className='content-card__title'>{title}</h4>
            <p className='content-card__text'>{text}</p>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Card;