var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;


module.exports={


  receiveArtists: function(rawArtists) {
    AppDispatcher.handleServerAction({
      type: AppConstants.RECEIVE_ARTIST,
      rawArtists: rawArtists
    });
  }

}