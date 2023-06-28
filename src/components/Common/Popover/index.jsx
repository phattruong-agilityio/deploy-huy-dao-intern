// Styles
import './popover.css';

// Components
import { Button } from '../Button/index';

// Constants
import { BRAND } from '../../../constants/images';
import { VARIANTS, PRICES, TYPES } from '../../../constants/constant';

/**
 * Component for rendering a Popover with buttons based on the provided buttonType.
 *
 * @param {string} buttonType - Type of buttons to render. Possible values: 'image', 'text', 'both'.
 * @param {Array} selectedBrandTypes - Array of selected brand types.
 * @param {Function} setSelectedBrandTypes - Function to set the selected brand types.
 * @param {Function} setSelectedPriceRange - Function to set the selected price range.
 * @returns {JSX.Element|null} Rendered Popover component.
 */
export const Popover = ({
  buttonType,
  selectedBrandTypes,
  setSelectedBrandTypes,
  selectedPriceRange,
  setSelectedPriceRange
}) => {
  /**
   * Get the variant for the button type.
   *
   * @returns {string|null} Variant for the button type.
   */
  const getVariantForButtonType = () => {
    if (buttonType === TYPES.IMAGE) {
      return VARIANTS.PRIMARY;
    }
    if (buttonType === TYPES.TEXT) {
      return VARIANTS.SECONDARY;
    }
    if (buttonType === TYPES.BOTH) {
      return VARIANTS.TERTIARY;
    }
    return null;
  };

  // Get the variant for the button type
  const renderedVariant = getVariantForButtonType();

  /**
   * Handle the click event for a brand button.
   *
   * @param {string} type - Brand type.
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

  /**
   * Handle the click event for a price button.
   *
   * @param {number} minPrice - Minimum price.
   * @param {number} maxPrice - Maximum price.
   */
  const handlePriceClick = (minPrice, maxPrice) => {
    if (maxPrice === undefined) {
      maxPrice = Infinity;
    }

    setSelectedPriceRange({ min: minPrice, max: maxPrice });
  };

  /**
   * Render the buttons based on the button type.
   *
   * @returns {JSX.Element|null} Rendered buttons.
   */
  const renderButton = () => {
    if (buttonType === TYPES.IMAGE) {
      return BRAND.map((image) => (
        <Button
          variant={VARIANTS.PRIMARY}
          key={image.id}
          imageURL={image.imageURL}
          selected={selectedBrandTypes.includes(image.type) ? 'selected' : ''}
          onClick={() => handleBrandClick(image.type)}
        />
      ));
    }
    if (buttonType === TYPES.TEXT) {
      return PRICES.map((price) => (
        <Button
          variant={VARIANTS.PRIMARY}
          key={price.id}
          text={price.text}
          selected={
            selectedPriceRange &&
            price.minPrice === selectedPriceRange.min &&
            price.maxPrice === selectedPriceRange.max
              ? 'selected'
              : ''
          }
          onClick={() => handlePriceClick(price.minPrice, price.maxPrice)}
        />
      ));
    }
    if (buttonType === TYPES.BOTH) {
      const imageButtons = BRAND.map((image) => (
        <Button
          variant={VARIANTS.PRIMARY}
          key={image.id}
          imageURL={image.imageURL}
          selected={selectedBrandTypes.includes(image.type) ? 'selected' : ''}
          onClick={() => handleBrandClick(image.type)}
        />
      ));

      const textButtons = PRICES.map((price) => (
        <Button
          variant={VARIANTS.PRIMARY}
          key={price.id}
          text={price.text}
          selected={
            selectedPriceRange &&
            price.minPrice === selectedPriceRange.min &&
            price.maxPrice === selectedPriceRange.max &&
            price.maxPrice === Infinity
              ? 'selected'
              : ''
          }
          onClick={() => handlePriceClick(price.minPrice, price.maxPrice)}
        />
      ));

      return (
        <div>
          <div>
            <h3 className="title">Brand</h3>
            {imageButtons}
          </div>
          <div>
            <h3 className="title">Price</h3>
            {textButtons}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={['popover', `popover-${renderedVariant}`].join(' ')}>
      {renderButton()}
    </div>
  );
};
