// Styles
import './listBrand.css';

// Components
import { Button } from '../../Common/Button';

// Constants
import { VARIANTS } from '../../../constants/constant';

/**
 * Component for rendering a list of brands with buttons.
 *
 * @param {Array} brands - Array of brand objects.
 * @param {Array} selectedBrandTypes - Array of selected brand types.
 * @param {function} setSelectedBrandTypes - Function to set the selected brand types.
 * @returns {JSX.Element} Rendered ListBrand component.
 */
export const ListBrand = ({
  brands,
  selectedBrandTypes,
  setSelectedBrandTypes
}) => {
  /**
   * Handle the click event on a brand button.
   *
   * @param {string} type - The brand type.
   */
  const handleBrandClick = (type) => {
    setSelectedBrandTypes((prevState) => {
      if (prevState.includes(type)) {
        // Brand type is already selected, remove it from the list
        return prevState.filter((brandType) => brandType !== type);
      } else {
        // Brand type is not selected, add it to the list
        return [...prevState, type];
      }
    });
  };

  return (
    <div className="list list-brand">
      {brands.map((brand) => (
        <div key={brand.id}>
          <Button
            variant={VARIANTS.SECONDARY}
            imageURL={brand.imageURL}
            selected={selectedBrandTypes.includes(brand.type) ? 'selected' : ''}
            onClick={() => handleBrandClick(brand.type)}></Button>
        </div>
      ))}
    </div>
  );
};
