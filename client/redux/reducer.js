const actions = require("./action");
const update = require('react-addons-update');


let initialState = {
	categorySearch: [],
	food: [],
	subFood: [],
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
	if (action.type === actions.FETCH_DATA_SUCCESS) {
		
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
		foodArray = [];
		countertwo = counter;
		counter += 4;
		console.log('state data', state);
		if (counter > state.food.length) {
			counter = 4;
			countertwo = 0;
		}
		for(var i = countertwo; i < counter; i++) {
			foodArray.push(state.food[i]);
		}
		console.log('next food array', foodArray);
			let newstate = Object.assign({}, state, {
			subFood: foodArray
		});
		return newstate;
	}
	else if (action.type === actions.FETCH_FOOD_SUCCESS) {

		for(var i = countertwo; i < counter; i++) {
			foodArray.push(action.food.body.response.groups[0].items[i]);
		}
		console.log('foodArray', foodArray);
		// let state = Object.assign({}, state, {
		// 	food: action.food.body.response.groups[0].items,
		// 	subFood: foodArray
		// });
		state = update(state, {
			food: {$set: action.food.body.response.groups[0].items},
			subFood: {$set: foodArray}
		});
		console.log('fetch food success - category search', state);
		return state;
	}
	else if (action.type === actions.FETCH_FOOD_ERROR) {
		return {
			error: action.error
		}
	}
	//NIGHTLIFE
	else if (action.type === actions.FETCH_NIGHTLIFE_SUCCESS) {
		
		let newstate = Object.assign({}, state, {
			nightLife: action.nightLife.body.response.groups[0].items
		});
		console.log('fetch nightlife success - category search', state);
		return newstate;
	}
	else if(action.type === actions.FETCH_NIGHTLIFE_ERROR) {
		return {
			error: action.error
		}
	}
	//OUTDOOR
	else if (action.type === actions.FETCH_OUTDOOR_SUCCESS) {
		
		let newstate = Object.assign({}, state, {
			outdoor: action.outdoor.body.response.groups[0].items
		});
		console.log('fetch outdoor success - category search', state);
		return newstate;
	}
	else if(action.type === actions.FETCH_OUTDOOR_ERROR) {
		return {
			error: action.error
		}
	}

	return state;

}

exports.reducer = reducer;