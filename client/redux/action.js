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

export const fetchExplore = (searchTerm) => {
 return function(dispatch) {
    let url = '/venue/explore/'+ searchTerm;
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


export const featchSearch = (searchTerm) => {
 return function(dispatch) {
    let url = '/venue/search/'+ searchTerm;
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

