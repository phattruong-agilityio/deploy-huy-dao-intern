// Styles
import './wishList.css';

// Components
import { ProductCard } from '../../Common/ProductCard';
import { Button } from '../../Common/Button';

// Constants
import { SIZES, VARIANTS } from '../../../constants/constant';
import { ICON } from '../../../constants/images';

/**
 * Wishlist component.
 *
 * @param {Object[]} products - The list of products in the wishlist.
 * @param {Function} setWishList - Function to update the wishlist.
 * @param {number[]} wishList - The list of product IDs in the wishlist.
 * @returns {JSX.Element} Rendered Wishlist component.
 */
export const WishList = ({
  products,
  setWishList,
  wishList,
  setWishListVisible
}) => {
  // Filter the products array based on the wishlist
  const wishedProducts = products.filter((product) =>
    wishList.includes(product.id)
  );

  /**
   * Event handler for the close button click.
   * Closes the wishlist popup.
   */
  const handleCloseButtonClick = () => {
    setWishListVisible(false);
  };

  return (
    <div className="wishlist">
      <Button
        variant={VARIANTS.TERTIARY}
        size={SIZES.SMALL}
        imageURL={ICON.BACK}
        onClick={handleCloseButtonClick}></Button>
      <h2 className="wishlist-title">My Wishlist</h2>
      <div className="wishlist-items">
        {wishedProducts.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              addToWishlist={setWishList}
              isAddedToWishList={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
