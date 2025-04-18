import PropTypes from 'prop-types';
import './button.scss'

const Button = ({text, className, icon}) =>{
    return(
        <div className='button'>
            <a href="#" 
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
};

export default Button;