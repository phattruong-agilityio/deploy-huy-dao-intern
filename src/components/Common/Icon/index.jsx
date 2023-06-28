// Styles
import './icon.css';

/**
 * Icon component
 *
 * @param {object} props - Component props
 * @param {object} props.icon - FontAwesomeIcon object representing the icon
 * @returns {JSX.Element} - Icon component
 */
export const Icon = ({ url }) => {
  return (
    <i className="icon">
      <img className="icon-photo" src={url} alt={url} />
    </i>
  );
};
