import { AlertReducer } from "@/types/alertReducer";

const initialState: AlertReducer = {
  message: null,
  type: null
}

/**
 * Handles global error state for notifications.
 * 
 * TODO: type actions
 * TODO: implement a queue to handle multiple errors
 */
const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ALERT_SUCCESS':
      return {
        ...state,
        message: action.payload.message,
        type: 'success',
      };

    case 'ALERT_ERROR':
      return {
        ...state,
        message: action.payload.message,
        type: 'error',
      };

    case 'ALERT_BASIC':
      return {
        ...state,
        message: action.payload.message,
        type: 'basic',
      };
    
    case 'ALERT_CLEAR':
      return {
        ...state,
        ...initialState
      };
    
    default:
      return state;
  }
}

export default alertReducer;