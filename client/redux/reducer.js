const actions = require("./action");

let initialState = {
	list: [],

};

export const reducer = (state, action) => {
	state = state || initialState;
	if (action.type == actions.FETCH_DATA_SUCCESS) {
		eventData = action.data;
		console.log(eventData);
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
