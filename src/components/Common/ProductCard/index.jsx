// Styles
import './productCard.css';

// Components
import { Button } from '../Button';

// Constants
import { VARIANTS, SIZES } from '../../../constants/constant';
import { ICON } from '../../../constants/images';

/**
 * Product card component.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.product - Product data.
 * @param {Function} props.setSelectedProduct - Function to set the selected product.
 * @param {Function} props.addToWishlist - Function to add the product to the wishlist.
 * @param {boolean} props.isAddedToWishList - Flag indicating if the product is added to the wishlist.
 * @returns {JSX.Element} Rendered product card component.
 */
export const ProductCard = ({
  product,
  setSelectedProduct,
  addToWishlist,
  isAddedToWishList
}) => {
  /**
   * Event handler for the "See More" button click.
   * Sets the visibility of the popup and passes the selected product.
   */
  const handleSeeMoreClick = () => {
    setSelectedProduct(product);
  };

  /**
   * Event handler for heart icon click.
   * Adds or removes the product from the wishlist.
   */
  const wishlistButtonClickHandler = () => {
    addToWishlist(product.id);
  };

  return (
    <div className="product-card">
      <div className="button-box">
        <div className="product-installment">
          {product.installment && (
            <Button
              variant={VARIANTS.TERTIARY}
              size={SIZES.SMALL}
              text={product.installment}
            />
          )}
        </div>
        <div>
          <Button
            variant={VARIANTS.PRIMARY}
            size={SIZES.SMALL}
            imageURL={isAddedToWishList ? ICON.HEART : ICON.UNHEART}
            onClick={wishlistButtonClickHandler}
          />
        </div>
      </div>
      <img src={product.images} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-details">
        <Button
          variant={VARIANTS.TERTIARY}
          size={SIZES.SMALL}
          text={product.version}
        />
        <Button
          variant={VARIANTS.TERTIARY}
          size={SIZES.SMALL}
          text={product.resolution}
        />
      </div>
      <p className="product-price">{product.price}₫</p>
      <Button
        variant={VARIANTS.PRIMARY}
        text="See More"
        onClick={handleSeeMoreClick}
      />
    </div>
  );
};
