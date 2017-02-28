require('isomorphic-fetch');

var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var fetchDataSuccess = function(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		data: data
	};
};

var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
var fetchDataError = function(error) {
	return {
		type: FETCH_DATA_ERROR,
		error: error
	}
}

var fetchExplore = function(searchTerm) {
 return function(dispatch) {
    var url = '/venue/explore/'+ searchTerm;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       var error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then(function(data) {
     console.log("fetch DATA promise: ", data);
     return dispatch(
       fetchDataSuccess(data)
       );
   })
    .catch(function(error) {
     return dispatch(
       fetchDataError(error)
       );
   });
  };
};


var featchSearch = function(searchTerm) {
 return function(dispatch) {
    var url = '/venue/search/'+ searchTerm;
    return fetch(url).then(function(response) {
     if (response.status < 200 || response.status >= 300) {
       var error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
     return response.json();
   })

    .then(function(data) {
     console.log("fetch DATA promise: ", data);
     return dispatch(
       fetchDataSuccess(data)
       );
   })
    .catch(function(error) {
     return dispatch(
       fetchDataError(error)
       );
   });
  };
};

exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;
exports.fetchExplore = fetchExplore;
exports.featchSearch = featchSearch;