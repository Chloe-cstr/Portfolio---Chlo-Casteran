import './workCard.scss';
import PropTypes from 'prop-types';

const WorkCard = ({image, date, title, onClick}) => {
    
    return(
        <div className='workcard' onClick={onClick}>
            <img src={image} alt="Screen du projet Kasa" className='workcard__image' />
            <div className='workcard__description'>
                <h3 className='workcard__description__date'>{date}</h3>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

WorkCard.propTypes = {
    image : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
}

export default WorkCard;