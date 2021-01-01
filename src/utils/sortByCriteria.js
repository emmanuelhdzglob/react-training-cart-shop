const sortByCriteria = (arr, criteria) => {
  return arr.sort((a, b) => {
    if (a[criteria] > b[criteria]) {
      return 1;
    }

    if (b[criteria] > a[criteria]) {
      return -1;
    }

    return 0;
  });
};

export default sortByCriteria;
