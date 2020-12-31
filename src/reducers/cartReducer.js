const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_SELECTED':
      const productFound = state.find(
        (product) => product.id === action.payload.id
      );

      if (productFound) {
        return state;
      }

      return [...state, action.payload];
    default:
      return state;
  }
};

// const cartReducer = () => {
//   return [
//     {
//       id: 1,
//       title: 'Coffe Maker',
//       price: 75,
//       rating: 4.5,
//       type: 'BASIC',
//       comments: 2,
//       imageSrc: './coffe.jpg',
//     },
//     {
//       id: 2,
//       title: 'Super Coffe Maker',
//       price: 25,
//       rating: 3.5,
//       type: '',
//       comments: 2,
//       imageSrc: './coffe.jpg',
//     },
//     {
//       id: 3,
//       title: 'Coffe Maker',
//       price: 105,
//       rating: 2,
//       type: 'BASIC',
//       comments: 2,
//       imageSrc: './coffe.jpg',
//     },
//   ];
// };

export default cartReducer;
