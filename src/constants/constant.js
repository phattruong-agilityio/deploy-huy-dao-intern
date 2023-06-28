const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  QUATERNARY: 'quaternary'
};

const TYPES = {
  IMAGE: 'image',
  TEXT: 'text',
  BOTH: 'both',
  FILTER: 'Filter',
  BRAND: 'Brand',
  PRICE: 'Price'
};

const PRICES = [
  {
    id: 1,
    text: 'From 2-4 million VND',
    minPrice: '2000000',
    maxPrice: '4000000'
  },
  {
    id: 2,
    text: 'From 4-8 million VND',
    minPrice: '4000000',
    maxPrice: '8000000'
  },
  {
    id: 3,
    text: 'From 8-15 million VND',
    minPrice: '8000000',
    maxPrice: '15000000'
  },
  {
    id: 4,
    text: 'Over 15 million VND',
    minPrice: '15000000'
  }
];
const CATEGORIES = [
  { id: 1, value: 'Filter' },
  { id: 2, value: 'Brand' },
  { id: 3, value: 'Price' }
];

export { SIZES, VARIANTS, PRICES, TYPES, CATEGORIES };
