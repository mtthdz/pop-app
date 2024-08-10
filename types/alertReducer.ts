export interface AlertReducer {
  message: null | string;
  type: null | 'error' | 'success' | 'basic';
}