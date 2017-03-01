const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const reducer = require('./reducer').reducer;
// console.log(reducer)
const store = createStore(reducer, applyMiddleware(thunk));

module.exports = store;