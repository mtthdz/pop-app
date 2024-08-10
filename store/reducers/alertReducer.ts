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
    case 'ALERT_ERROR':
    case 'ALERT_BASIC':
      return {
        ...state,
        ...action.payload
      };
    
    case 'ERROR_CLEAR':
      return {
        ...state,
        ...initialState
      };
    
    default:
      return state;
  }
}

export default alertReducer;