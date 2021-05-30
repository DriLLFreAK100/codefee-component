export const getFlexBasis = (item: { size?: number }, totalSize: number) => {
  return `${((item?.size || 1) / totalSize) * 100}%`;
};

export const getTotalSize = (data: { size?: number }[]): number => {
  return data.reduce((a, c) => {
    return a + c?.size || 1;
  }, 0);
};
