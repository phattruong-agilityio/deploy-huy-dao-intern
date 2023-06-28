// Hooks
import { useState } from 'react';

// Constants
import PRODUCT_DATABASE  from '../database/products';

/**
 * Custom hook to fetch and retrieve product data from the database.
 * Returns an array of products.
 *
 * @returns {Array} Array of products.
 */
export const useProductData = () => {
  const [products, setProducts] = useState(PRODUCT_DATABASE);

  return products;
};
