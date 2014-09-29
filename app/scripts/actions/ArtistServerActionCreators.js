var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;


module.exports={

  receiveInit: function(rawData) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_INIT,
      rawData: rawData
    });

    console.log('receiveInit');
  },
  receiveArtists: function(rawData){
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.SEARCH_ARTIST_NAME,
      rawData: rawData
    });
    console.log('receiveArtists');

  }

}