const actions = require("./action");

let initialState = {
	categorySearch: [],
	food: [],
	music: [],
	nightLife: [],
	outdoor: []
};

const reducer = (state, action) => {
	state = state || initialState;

	//EXPLORE
	if (action.type == actions.FETCH_DATA_SUCCESS) {
		
		let state = Object.assign({}, state, {
			categorySearch: action.data.body.response.groups[0].items
		});
		console.log('fetch data success - category search', state);
		return state;
	}
	else if(action.type === actions.FETCH_DATA_ERROR) {
		return {
			error: action.error
		}
	}
	//FOOD
	if (action.type == actions.FETCH_FOOD_SUCCESS) {
		
		let state = Object.assign({}, state, {
			food: action.food.body.response.groups[0].items
		});
		console.log('fetch food success - category search', state);
		return state;
	}
	else if(action.type === actions.FETCH_FOOD_ERROR) {
		return {
			error: action.error
		}
	}
	//MUSIC
	if (action.type == actions.FETCH_MUSIC_SUCCESS) {
		
		let state = Object.assign({}, state, {
			music: action.music.body.response.groups[0].items
		});
		console.log('fetch music success - category search', state);
		return state;
	}
	else if(action.type === actions.FETCH_MUSIC_ERROR) {
		return {
			error: action.error
		}
	}
	//NIGHTLIFE
	if (action.type == actions.FETCH_NIGHTLIFE_SUCCESS) {
		
		let state = Object.assign({}, state, {
			nightLife: action.nightLife.body.response.groups[0].items
		});
		console.log('fetch nightlife success - category search', state);
		return state;
	}
	else if(action.type === actions.FETCH_NIGHTLIFE_ERROR) {
		return {
			error: action.error
		}
	}
	//OUTDOOR
	if (action.type == actions.FETCH_OUTDOOR_SUCCESS) {
		
		let state = Object.assign({}, state, {
			outdoor: action.outdoor.body.response.groups[0].items
		});
		console.log('fetch outdoor success - category search', state);
		return state;
	}
	else if(action.type === actions.FETCH_OUTDOOR_ERROR) {
		return {
			error: action.error
		}
	}

	return state;

}

exports.reducer = reducer;