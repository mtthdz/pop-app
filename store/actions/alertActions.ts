export const alertSuccess = (payload: string) => {
  return { type: 'ALERT_SUCCESS', payload };
};

export const alertError = (payload: string) => {
  return { type: 'ALERT_ERROR', payload };
};

export const alertBasic = (payload: string) => {
  return { type: 'ALERT_BASIC', payload };
};

export const notificationClear = () => {
  return { type: 'ALERT_CLEAR' };
}