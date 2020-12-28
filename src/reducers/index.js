import { combineReducers } from 'redux';

const productsReducer = () => {
  return [
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: '',
      comments: 2,
      image: './coffe.jpg',
    },
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: '',
      comments: 2,
      image: './coffe.jpg',
    },
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: 'BASIC',
      comments: 2,
      image: './coffe.jpg',
    },
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: '',
      comments: 2,
      image: './coffe.jpg',
    },
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: 'BASIC',
      comments: 2,
      image: './coffe.jpg',
    },
    {
      name: 'Coffe Maker',
      price: 105,
      rating: '4.5',
      type: 'BASIC',
      comments: 2,
      image: './coffe.jpg',
    },
  ];
};

export default combineReducers({
  products: productsReducer,
});
