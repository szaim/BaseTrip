var actions = require("./action");

var initialState = {
	list: [],

};

var reducer = function(state, action) {
	state = state || initialState;
	if (action.type == actions.FETCH_DATA_SUCCESS) {
		characterData = action.data;
		return {

			list: action.data
		}
	}
	else if(action.type === actions.FETCH_DATA_ERROR) {
		return {
			error: action.error
		}
	}

	return state;

}

module.exports = reducer;