export type ReduxError = {
  message: string;
}

export type ReduxAction = {
  type: string;
  payload: null | object;
  error?: null | string;
}