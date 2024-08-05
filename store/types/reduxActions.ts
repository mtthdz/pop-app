export type ReduxError = {
  message: string;
}

export type ReduxAction extends Action<string> {
  type: string;
  payload: null | object;
  error?: null | string;
}