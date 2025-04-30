import PropTypes from 'prop-types';
import './button.scss'

const Button = ({text, className, icon, link}) =>{
    return(
        <div className='button'>
            <a href={link} 
                className={className}>
                <i className={icon}></i>
                {text}
            </a>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
    icon: PropTypes.string,
    link : PropTypes.string.isRequired,
};

export default Button;