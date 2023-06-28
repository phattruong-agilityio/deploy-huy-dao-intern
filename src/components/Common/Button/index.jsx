// Styles
import './button.css';
import { SIZES } from '../../../constants/constant';

/**
 * Button component
 *
 * @param {string} variant - The variant of the button ('primary', 'secondary', etc.)
 * @param {string} size - How large should the button be? (Options: 'small', 'medium', 'large')
 * @param {string} text - The contents of the button (required)
 * @param {function} onClick - Optional click handler
 */

export const Button = ({
  imageURL,
  variant,
  size = SIZES.MEDIUM,
  text,
  icon,
  onClick,
  selected
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'button',
        `button-${size}`,
        `button-${variant}`,
        `button-${selected}`
      ].join(' ')}>
      {imageURL ? (
        <img src={imageURL} />
      ) : (
        <>
          {text} {icon}
        </>
      )}
    </button>
  );
};
