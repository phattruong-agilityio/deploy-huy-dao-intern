// Styles
import './category.css';

// Components
import { Button } from '../../Common/Button';
import { Icon } from '../../Common/Icon';

// Constants
import { SIZES, TYPES, VARIANTS } from '../../../constants/constant';
import { ICON } from '../../../constants/images';

/**
 * Component for rendering the list of categories with buttons.
 *
 * @param {Array} categories - The array of category objects.
 * @param {boolean} popoverVisible - Flag indicating whether the popover is visible.
 * @param {function} setPopoverVisible - Function to set the visibility of the popover.
 * @param {string} popoverButtonType - The type of the popover button.
 * @param {function} setPopoverButtonType - Function to set the type of the popover button.
 * @param {Object} buttonIcons - The object containing the icons for each category button.
 * @param {function} setButtonIcons - Function to set the icons for each category button.
 * @returns {JSX.Element} Rendered ListCategory component.
 */
export const ListCategory = ({
  categories,
  popoverVisible,
  setPopoverVisible,
  wishListVisible,
  setWishListVisible,
  popoverButtonType,
  setPopoverButtonType,
  buttonIcons,
  setButtonIcons
}) => {
  /**
   * Handles the click event on a category button.
   *
   * @param {Object} category - The category object.
   */
  const handleCategoryClick = (category) => {
    if (category.value === TYPES.BRAND) {
      setPopoverButtonType(TYPES.IMAGE);
    } else if (category.value === TYPES.PRICE) {
      setPopoverButtonType(TYPES.TEXT);
    } else {
      setPopoverButtonType(TYPES.BOTH);
    }

    setButtonIcons((prevIcons) => ({
      ...prevIcons,
      [category.value]:
        prevIcons[category.value] === ICON.DOWN ? ICON.UP : ICON.DOWN
    }));

    setPopoverVisible(!popoverVisible);
  };

  /**
   * Handles the click event on the Wishlist button.
   */
  const handleShowWishList = () => {
    setWishListVisible(!wishListVisible);
  };

  return (
    <div className="category">
      <div className="category-box">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={VARIANTS.PRIMARY}
            text={category.value}
            icon={
              category.value === TYPES.FILTER ? (
                <Icon url={ICON.FILTER} />
              ) : (
                <Icon url={buttonIcons[category.value]} />
              )
            }
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
      <div className="wishlist-box">
        <Button
          variant={VARIANTS.PRIMARY}
          size={SIZES.SMALL}
          imageURL={ICON.UNHEART}
          onClick={handleShowWishList}
        />
      </div>
    </div>
  );
};
