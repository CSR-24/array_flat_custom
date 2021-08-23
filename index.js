function customFlat(data, depth = 0) {
  if (Array.isArray(data)) {
    return data.reduce((acc, curr) => {
      return acc.concat(
        Array.isArray(curr) && depth > 0 ? customFlat(curr, depth - 1) : curr
      );
    }, []);
  }
}

// [1,2, [3,4, [5,6, [7,8]]]]

console.log(
  customFlat([1, 2, [3, 4, [5, 6, [7, [8, [9]]]]]], Number.POSITIVE_INFINITY)
);

// depth = 0 level 1;
