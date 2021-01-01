const filterBasedOnState = (arr, basic, lowerLimit, upperLimit) => {
  return arr.filter((product) => {
    const inPriceRange =
      product.price >= lowerLimit && product.price <= upperLimit;

    if (basic === 'yes') {
      return product.type === 'BASIC' && inPriceRange;
    }

    if (basic === 'no') {
      return product.type === '' && inPriceRange;
    }

    return inPriceRange;
  });
};

export default filterBasedOnState;
