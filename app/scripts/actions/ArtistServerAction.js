var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;


module.exports={


  receiveArtist: function(rawMessages) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ARTIST,
      rawMessages: rawMessages
    });
  }

}