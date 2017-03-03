require('isomorphic-fetch');

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = function(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		data: data
	};
};

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = function(error) {
	return {
		type: FETCH_DATA_ERROR,
		error: error
	}
}

export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const fetchFoodSuccess = function(food) {
  return {
    type: FETCH_FOOD_SUCCESS,
    food: food
  };
};

export const FETCH_FOOD_ERROR = 'FETCH_FOOD_ERROR';
export const fetchFoodError = function(error) {
  return {
    type: FETCH_FOOD_ERROR,
    error: error
  }
}

export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const fetchMusicSuccess = function(music) {
  return {
    type: FETCH_MUSIC_SUCCESS,
    music: music
  };
};

export const FETCH_MUSIC_ERROR = 'FETCH_MUSIC_ERROR';
export const fetchMusicError = function(error) {
  return {
    type: FETCH_MUSIC_ERROR,
    error: error
  }
}

export const FETCH_NIGHTLIFE_SUCCESS = 'FETCH_NIGHTLIFE_SUCCESS';
export const fetchNightLifeSuccess = function(nightLife) {
  return {
    type: FETCH_NIGHTLIFE_SUCCESS,
    nightLife: nightLife
  };
};

export const FETCH_NIGHTLIFE_ERROR = 'FETCH_NIGHTLIFE_ERROR';
export const fetchNightLifeError = function(error) {
  return {
    type: FETCH_NIGHTLIFE_ERROR,
    error: error
  }
}

export const FETCH_OUTDOOR_SUCCESS = 'FETCH_OUTDOOR_SUCCESS';
export const fetchOutdoorSuccess = function(outdoor) {
  return {
    type: FETCH_OUTDOOR_SUCCESS,
    outdoor: outdoor
  };
};

export const FETCH_OUTDOOR_ERROR = 'FETCH_OUTDOOR_ERROR';
export const fetchOutdoorError = function(error) {
  return {
    type: FETCH_OUTDOOR_ERROR,
    error: error
  }
}

export const fetchExplore = (searchTerm, location) => {
 return function(dispatch) {
    let url = '/venue/explore/'+ searchTerm + '/' + location;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       let error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then((data) => {
     console.log("fetch DATA promise: ", data);
     return dispatch(
       fetchDataSuccess(data)
       );
   })
    .catch((error) => {
     return dispatch(
       fetchDataError(error)
       );
   });
  };
};

export const fetchFood = (location) => {
 return function(dispatch) {
    let url = '/venue/explore/food/' + location;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       let error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then((data) => {
     console.log("fetch FOOD promise: ", data);
     return dispatch(
       fetchFoodSuccess(data)
       );
   })
    .catch((error) => {
     return dispatch(
       fetchFoodError(error)
       );
   });
  };
};

export const fetchMusic = (location) => {
 return function(dispatch) {
    let url = '/venue/explore/music/' + location;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       let error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then((data) => {
     console.log("fetch MUSIC promise: ", data);
     return dispatch(
       fetchMusicSuccess(data)
       );
   })
    .catch((error) => {
     return dispatch(
       fetchMusicError(error)
       );
   });
  };
};

export const fetchNightLife = (location) => {
 return function(dispatch) {
    let url = '/venue/explore/night&life/' + location;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       let error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then((data) => {
     console.log("fetch NIGHTLIFE promise: ", data);
     return dispatch(
       fetchNightLifeSuccess(data)
       );
   })
    .catch((error) => {
     return dispatch(
       fetchNightLifeError(error)
       );
   });
  };
};

export const fetchOutdoor = (location) => {
 return function(dispatch) {
    let url = '/venue/explore/outdoor/' + location;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       let error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then((data) => {
     console.log("fetch OUTDOOR promise: ", data);
     return dispatch(
       fetchOutdoorSuccess(data)
       );
   })
    .catch((error) => {
     return dispatch(
       fetchOutdoorError(error)
       );
   });
  };
};

// export const fetchSearch = (searchTerm) => {
//  return function(dispatch) {
//     let url = '/venue/search/'+ searchTerm;
//     return fetch(url).then(function(response) {
//      if (response.status < 200 || response.status >= 300) {
//        let error = new Error(response.statusText);
//        error.response = response;
//        throw error;
//      }
//      return response.json();
//    })

//     .then((data) => {
//      console.log("fetch DATA promise: ", data);
//      return dispatch(
//        fetchDataSuccess(data)
//        );
//    })
//     .catch((error) => {
//      return dispatch(
//        fetchDataError(error)
//        );
//    });
//   };
// };

