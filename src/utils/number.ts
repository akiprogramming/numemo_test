export const canBeNumber = (x: string): boolean => {
  return !!parseFloat(x);
};

export const isNumberType = (x: any): boolean => {
  return Number.isFinite(x);
};
