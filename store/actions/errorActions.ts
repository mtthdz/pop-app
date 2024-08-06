export const errorSet = (payload: string) => {
  return { type: 'ERROR_SET', payload };
};

export const errorClear = () => {
  return { type: 'ERROR_CLEAR' };
}