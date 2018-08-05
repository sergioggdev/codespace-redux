export function firstReducer(state = {}, action) {
  switch (action.type) {
    case "PING":
      return Object.assign({}, state, { ping: action.payload });
    case "PONG":
      return { ...state, pong: action.payload };
    default:
      return state;
  }
}
