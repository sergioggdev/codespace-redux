# Master class Redux
Presentacion sobre el problema y la metodologia, y explicacion de la libreria Redux

### Librerias
- redux
- react-redux
### Middlwares 
- redux-devtools-extension
- redux-logger
- Thunk
- redux-observable

### Métodos a usar en la Master Class
*Redux*
- createStore
- applyMiddleware
- bindActionCreators
- combineReducers

*React-redux*
- connect
- Provider

## Ayuda al codigo
### Acciones
```javascript
// Acciones
const nameAction = { payload, type: 'NAME' }

// Creador de acciones
export const creatorNameAction = payload => ({ payload, type: 'NAME' })
````
### Reducers
```javascript
// Funcion reductora Pura 
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

// Combinar varios reducers
combineReducers({ reducer1, reducer2 })
```
### Store
```javascript
// Combinar middleware
applyMiddleware(middleware1, middleware2)

// Creador del Store
createStore(allReducers, {}?, middleware?)
```
### React Connect
```javascript
// Mapear las propiedades del Store
const mapsStateToProps = (state) => ({
  ping: state.ping,

// Mapear el envio de acciones
const mapDispatchToProps = dispatch => ({
  sendTheAlert: () => {dispatch(ALERT_ACTION)}
})

// Mapear el envio de acciones con creadores de Acciones
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ hitPing: pingAction }, dispatch);

// Funcion conectora de Redux y React Component
connect(mapsStateToProps, mapDispatchToProps)(Compoent);
});
```
### Redux Thunk
```javascript
// Creador de Acciones asincronicas
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
```