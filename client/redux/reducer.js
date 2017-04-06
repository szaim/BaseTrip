const actions = require("./action");
const update = require('immutability-helper');
// const middleware = require('./middleware');


let initialState = {
	categorySearch: [],
	food: [],
	subFood: [],
	nightLife: [],
	subNightLife: [],
	outdoor: [],
	subOutdoor: [],
	selectedEvent: []
};

let foodArray = [];
let nightLifeArray = [];
let outdoorArray = [];
let counter = 4;
let countertwo = 0;


const subCategory = (category, subArray) => {
		console.log('next food hit');
		//Need to remove items from prior foodArray (when click nextFood - foodArray is doubled)
		subArray = [];
		countertwo = counter;
		counter += 4;
		// console.log('state data', state);
		//Add if condition if reaches max counter (30) to reset both counters
		if (counter > category.length) {
			counter = 4;
			countertwo = 0;
		}
		for(var i = countertwo; i < counter; i++) {
			subArray.push(category[i]);
		}

		return subArray;
		
}


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
	else if(action.type === actions.NEXT_FOOD){
		console.log('next food array', foodArray);
			let newstate = Object.assign({}, state, {
			subFood: subCategory(state.food, foodArray)
		});
		return newstate;
		
	}
	else if (action.type === actions.FETCH_FOOD_SUCCESS) {
		//added condition to prevent food list duplication
		if (state.subFood.length >= 4) {
 			return state;
 		} else {
		for(var i = countertwo; i < counter; i++) {
			foodArray.push(action.food.body.response.groups[0].items[i]);
		}
		console.log('foodArray', foodArray);
		state = update(state, {
			food: {$set: action.food.body.response.groups[0].items},
			subFood: {$set: foodArray}
		});
		console.log('fetch food success - category search', state);
		return state;
		}
	}
	else if (action.type === actions.FETCH_FOOD_ERROR) {
		return {
			error: action.error
		}
	}
	//NIGHTLIFE
	else if(action.type === actions.NEXT_NIGHTLIFE){
	console.log('next nightLife array', nightLifeArray);
		let newstate = Object.assign({}, state, {
		subNightLife: subCategory(state.nightLife, nightLifeArray)
	});
	return newstate;
		
	}
	else if (action.type === actions.FETCH_NIGHTLIFE_SUCCESS) {
		//added condition to prevent food list duplication
		if (state.subNightLife.length >= 4) {
 			return state;
 		} else {
		for(var i = countertwo; i < counter; i++) {
			nightLifeArray.push(action.nightLife.body.response.groups[0].items[i]);
		}
		console.log('nightLifeArray', nightLifeArray);

		state = update(state, {
			nightLife: {$set: action.nightLife.body.response.groups[0].items},
			subNightLife: {$set: nightLifeArray}
		});
		console.log('fetch nightLife success - category search', state);
		return state;
		}
	}
	else if(action.type === actions.FETCH_NIGHTLIFE_ERROR) {
		return {
			error: action.error
		}
	}
	//OUTDOOR
	else if(action.type === actions.NEXT_OUTDOOR){
	console.log('next outdoor array', outdoorArray);
		let newstate = Object.assign({}, state, {
		subOutdoor: subCategory(state.outdoor, outdoorArray)
	});
	return newstate;
		
	}
	else if (action.type === actions.FETCH_OUTDOOR_SUCCESS) {
		//added condition to prevent food list duplication
		if (state.subOutdoor.length >= 4) {
 			return state;
 		} else {
		for(var i = countertwo; i < counter; i++) {
			outdoorArray.push(action.outdoor.body.response.groups[0].items[i]);
		}
		console.log('outdoorArray', outdoorArray);
		
		state = update(state, {
			outdoor: {$set: action.outdoor.body.response.groups[0].items},
			subOutdoor: {$set: outdoorArray}
		});
		console.log('fetch outDoor success - category search', state);
		return state;
		}
	}
	else if(action.type === actions.FETCH_OUTDOOR_ERROR) {
		return {
			error: action.error
		}
	}
	// Selected Event
	else if(action.type === actions.SELECT_EVENT) {
		state = update(state, {
			selectedEvent: {$set: action.data}
		});
		console.log('selectd event', state);
		return state;
	}

	return state;

}









exports.reducer = reducer;