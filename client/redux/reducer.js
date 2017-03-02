const actions = require("./action");

let initialState = {
	categorySearch: []
};

const reducer = (state, action) => {
	state = state || initialState;
	if (action.type == actions.FETCH_DATA_SUCCESS) {
		
		let state = Object.assign({}, state, {
			categorySearch: action.data.body.response.groups[0].items
		});
		console.log('fetch data success - category search', state);
		console.log('action success hit!');
		return action.data;
	}
	else if(action.type === actions.FETCH_DATA_ERROR) {
		return {
			error: action.error
		}
	}

	return state;

}

exports.reducer = reducer;