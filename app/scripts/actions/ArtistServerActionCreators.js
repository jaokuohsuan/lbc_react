var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;


module.exports={

  receiveInit: function(rawData) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_INIT,
      rawData: rawData
    });
  }

}