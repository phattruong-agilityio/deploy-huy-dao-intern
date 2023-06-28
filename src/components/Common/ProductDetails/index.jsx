// Styles
import './productDetails.css';

// Component
import { Button } from '../Button';

// Constants
import { ICON } from '../../../constants/images';
import { VARIANTS, SIZES } from '../../../constants/constant';

/**
 * Component for displaying product details.
 *
 * @param {Object} product - The product object.
 * @param {function} setIsPopup - Callback function to close the popup.
 * @returns {JSX.Element} Rendered ProductDetails component.
 */
export const ProductDetails = ({ product, setSelectedProduct }) => {
  //
  const price = product.price
    ? product.price.toString().replace(/\./g, '')
    : '';
  //
  const discountedPrice =
    price && product.discount ? (price * (100 - product.discount)) / 100 : NaN;

  //
  const formattedDiscountedPrice = isNaN(discountedPrice)
    ? 'Invalid price'
    : discountedPrice.toLocaleString('vi-VN');

  /**
   * Handles the click event of the close button.
   */
  const handleCloseButtonClick = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-wrapper">
      <div>
        <Button
          imageURL={ICON.BACK}
          variant={VARIANTS.TERTIARY}
          className="button-back"
          onClick={handleCloseButtonClick}></Button>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-content">
        <div>
          <img
            src={product.images}
            alt={product.name}
            className="product-img"></img>
        </div>
        <div className="product-info">
          <div className="product-box">
            <h3 className="product-title">Product information</h3>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price">
            <p className="price-present">{formattedDiscountedPrice}₫</p>
            <p className="price-old">{product.price}₫</p>
            {product.discount && (
              <p className="product-discount">-{product.discount}%</p>
            )}
            {product.installment && (
              <Button
                variant={VARIANTS.TERTIARY}
                size={SIZES.SMALL}
                text={product.installment}></Button>
            )}
          </div>
          <Button
            variant={VARIANTS.PRIMARY}
            size={SIZES.LARGE}
            text="Buy Now"></Button>
        </div>
      </div>
    </div>
  );
};
