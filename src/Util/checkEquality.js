export const checkEquality = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i].label !== array2[i].label) {
      return false;
    }
    if (array1[i].id !== array2[i].id) {
      return false;
    }

    if (array1[i].options.length !== array2[i].options.length) {
      return false;
    }
  }

  return true;
};
