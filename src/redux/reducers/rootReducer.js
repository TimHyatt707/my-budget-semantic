export default function rootReducer (
  currentState = {
    showLogin: false
  }, action
) {
  switch (action.type) {
    case 'SHOW_LOGIN_FORM':
      return { ...currentState, showLogin: true };
    case 'CLOSE_LOGIN_FORM':
      return { ...currentState, showLogin: false };
    default: return currentState;
  }
}
