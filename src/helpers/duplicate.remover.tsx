export const removeDuplicateBy = (arr: any[], key: string) => {
  // store all the keys from the arrays
  const keys: {}[] = arr.map((item: any) => item[key]);
  //   Filter and Append to new Array if the key isn't included from the above variabel
  const filtered = arr.filter(
    (item, index) => !keys.includes(item[key], index + 1)
  );
  return filtered;
};

// Usage Examples --> removeDuplicateBy([{id: "1"}, {id: 2}], id)
