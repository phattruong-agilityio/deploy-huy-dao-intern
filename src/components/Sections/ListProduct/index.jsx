// Styles
import './listProduct.css';

// Components
import { ProductCard } from '../../Common/ProductCard';

/**
 * Component for rendering a list of products.
 *
 * @param {Object[]} products - The list of products to render.
 * @param {Function} setSelectedProduct - Function to set the selected product.
 * @param {Object[]} wishList - The list of products in the wishlist.
 * @param {Function} setWishList - Function to update the wishlist.
 * @returns {JSX.Element} Rendered ListProduct component.
 */
export const ListProduct = ({
  products,
  setSelectedProduct,
  wishList,
  setWishList
}) => {
  return (
    <div className="list-product">
      {products.map((product) => {
        const isAddedToWishList = wishList.includes(product.id);

        return (
          <div key={product.id}>
            <ProductCard
              product={product}
              setSelectedProduct={setSelectedProduct}
              addToWishlist={setWishList}
              isAddedToWishList={isAddedToWishList}
            />
          </div>
        );
      })}
    </div>
  );
};
