const actions = require("./action");

let initialState = {
	categorySearch: [],
	food: [],
	music: [],
	nightLife: [],
	outdoor: []
};

let foodArray = [];
let counter = 4;
let countertwo = 0;

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
	//Need to remove items from prior foodArray (when click nextFood - foodArray is doubled)
	//Add if condition if reaches max counter (30) to reset both counters
	else if(action.type === actions.NEXT_FOOD){
		console.log('next food hit');
		countertwo = counter;
		counter += 4;
		
	}
	else if (action.type == actions.FETCH_FOOD_SUCCESS) {
		for(var i = countertwo; i < counter; i++) {
			foodArray.push(action.food.body.response.groups[0].items[i]);
		}
		console.log('foodArray', foodArray);
		let state = Object.assign({}, state, {
			food: foodArray
		});
		console.log('fetch food success - category search', state);
		return state;
	}
	else if (action.type === actions.FETCH_FOOD_ERROR) {
		return {
			error: action.error
		}
	}
	//MUSIC
	else if (action.type == actions.FETCH_MUSIC_SUCCESS) {
		
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
	else if (action.type == actions.FETCH_NIGHTLIFE_SUCCESS) {
		
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
	else if (action.type == actions.FETCH_OUTDOOR_SUCCESS) {
		
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