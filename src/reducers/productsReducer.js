const productsReducer = () => {
  return [
    {
      id: 1,
      title: 'Coffe Maker',
      price: 75,
      rating: 4.5,
      type: 'BASIC',
      comments: 2,
      imageSrc: './coffe.jpg',
    },
    {
      id: 2,
      title: 'Super Coffe Maker',
      price: 25,
      rating: 3.5,
      type: '',
      comments: 2,
      imageSrc: './coffe.jpg',
    },
    {
      id: 3,
      title: 'Coffe Maker',
      price: 105,
      rating: 2,
      type: 'BASIC',
      comments: 2,
      imageSrc: './coffe.jpg',
    },
    {
      id: 4,
      title: 'Coffe Maker',
      price: 105,
      rating: 4.5,
      type: '',
      comments: 5,
      imageSrc: './coffe.jpg',
    },
    {
      id: 5,
      title: 'Coffe Maker',
      price: 120,
      rating: 3,
      type: 'BASIC',
      comments: 10,
      imageSrc: './coffe.jpg',
    },
    {
      id: 6,
      title: 'Coffe Maker',
      price: 110,
      rating: 4.5,
      type: 'BASIC',
      comments: 8,
      imageSrc: './coffe.jpg',
    },
  ];
};

export default productsReducer;
