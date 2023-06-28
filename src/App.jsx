// Hooks
import { useState, useRef } from 'react';
import { useProductData } from './hooks/useProductData';

// Constants
import { CATEGORIES } from './constants/constant';
import { BRAND, ICON } from './constants/images';

// Components
import { Popover } from './components/Common/Popover';
import { ListCategory } from './components/Sections/ListCategory';
import { ListBrand } from './components/Sections/ListBrand';
import { ListProduct } from './components/Sections/ListProduct';
import { ProductDetails } from './components/Common/ProductDetails';
import { WishList } from './components/Sections/WishList';

// Styles
import './styles/main.css';

/**
 * Root component of the application.
 *
 * @returns {JSX.Element} Rendered App component.
 */
function App() {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverButtonType, setPopoverButtonType] = useState('');
  const [buttonIcons, setButtonIcons] = useState({
    Brand: ICON.DOWN,
    Price: ICON.DOWN
  });
  const [wishListVisible, setWishListVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishList, setWishList] = useState([]);

  // Track selected brand type for filtering
  const [selectedBrandTypes, setSelectedBrandTypes] = useState([]);

  // Track selected price range for filtering
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const isOpenProductDetailPopup = selectedProduct !== null;

  // Fetch product data
  const products = useProductData();

  /**
   * Get filtered products based on selected brand types and price range.
   *
   * @returns {Array} Filtered products.
   */
  const getFilteredProducts = () => {
    let filtered = products;

    // Filter by brand types
    if (selectedBrandTypes.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrandTypes.includes(product.type)
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      const { min, max } = selectedPriceRange;
      filtered = filtered.filter((product) => {
        const price = parseInt(product.price.replace(/\./g, ''));
        return price >= min && price <= max;
      });
    }

    return filtered;
  };

  const filteredProduct = getFilteredProducts();

  /**
   * Add or remove a product from the wish list.
   *
   * @param {string} productId - ID of the product.
   */
  const addToWishlist = (productId) => {
    const isAdded = wishList.find((productItem) => productItem === productId);

    if (isAdded) {
      const currentList = wishList.filter(
        (productItem) => productItem !== productId
      );

      setWishList(currentList);
    } else {
      setWishList([...wishList, productId]);
    }
  };

  return (
    <div className="container-fluid">
      {/* Category list section */}
      <ListCategory
        categories={CATEGORIES}
        popoverVisible={popoverVisible}
        setPopoverVisible={setPopoverVisible}
        popoverButtonType={popoverButtonType}
        setPopoverButtonType={setPopoverButtonType}
        buttonIcons={buttonIcons}
        setButtonIcons={setButtonIcons}
        wishListVisible={wishListVisible}
        setWishListVisible={setWishListVisible}
      />
      <div className="popup">
        {/* Popover component */}
        {popoverVisible && (
          <Popover
            buttonType={popoverButtonType}
            selectedBrandTypes={selectedBrandTypes}
            setSelectedBrandTypes={setSelectedBrandTypes}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />
        )}
      </div>
      {/* Wish list component */}
      {wishListVisible && (
        <div
          className="modal"
          id="wishlistModal"
          tabIndex="-1"
          aria-labelledby="wishlistModalLabel">
          <div className="modal-dialog">
            <div className="modal-content">
              <WishList
                products={products}
                wishList={wishList}
                setWishList={addToWishlist}
                setWishListVisible={setWishListVisible}
              />
            </div>
          </div>
        </div>
      )}
      <div className="list-container">
        {/* Brand list section */}
        <ListBrand
          brands={BRAND}
          selectedBrandTypes={selectedBrandTypes}
          setSelectedBrandTypes={setSelectedBrandTypes}
        />
      </div>
      <div className="product-container">
        <h3 className="product-title">
          {`${filteredProduct.length} Phone${
            filteredProduct.length > 1 ? 's' : ''
          }`}
        </h3>

        {/* Product list section */}
        <ListProduct
          products={filteredProduct}
          setSelectedProduct={setSelectedProduct}
          wishList={wishList}
          setWishList={addToWishlist}
        />
      </div>
      {isOpenProductDetailPopup && (
        <div
          className="modal"
          id="productDetailsModal"
          tabIndex="-1"
          aria-labelledby="productDetailsModalLabel">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Product details popup */}
              <ProductDetails
                product={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
