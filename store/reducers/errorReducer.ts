import { ErrorReducer } from "@/types/errorReducer";

const initialState: ErrorReducer = {
  message: null
}

/**
 * Handles global error state for notifications.
 * 
 * TODO: type actions
 * TODO: implement a queue to handle multiple errors
 */
const errorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ERROR_SET':
      return {
        ...state,
        message: action.payload
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

export default errorReducer;