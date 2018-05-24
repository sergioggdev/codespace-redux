redux-devtools-extension' , 'redux-logger'
import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
applyMiddleware()
createStore(allReducers, {}, middleware);


export const pingAction = payload => ({ payload, type: 'PING' });
export const pongAction = payload => ({ payload, type: 'PONG' });

combineReducers({todos,counter})
export function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'PING':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}


const mapsStateToProps = (state) => ({
  ping: state.ping,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ hitPing: pingAction }, dispatch);

const mapDispatchToProps = dispatch => ({
  sendTheAlert: () => {dispatch(ALERT_ACTION)}
})

connect(mapsStateToProps, mapDispatchToProps)(Compoent);

// Thunk
export function fetchProduct() {
  return async function(dispatch) {
    dispatch(fetchInit())
    try {
      const data = await fetch()
      return dispatch(fetchSuccess(data))
    } catch(err) {
      dispatch(fetchError(err))
    }
  }
}