// Hooks
import { useState } from 'react';

// Constants
import { PRODUCT_DATABASE } from '../database/products.json';

/**
 * Custom hook to fetch and retrieve product data from the database.
 * Returns an array of products.
 *
 * @returns {Array} Array of products.
 */
export const useProductData = () => {
  const [products, setProducts] = useState([]);

  fetch(PRODUCT_DATABASE)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  return products;
};
