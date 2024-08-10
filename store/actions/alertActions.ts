export const alertSuccess = (message: string) => {
  return { type: 'ALERT_SUCCESS', payload: { message} };
};

export const alertError = (message: string) => {
  return { type: 'ALERT_ERROR', payload: { message } };
};

export const alertBasic = (message: string) => {
  return { type: 'ALERT_BASIC', payload: { message } };
};

export const alertClear = () => {
  return { type: 'ALERT_CLEAR' };
}