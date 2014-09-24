var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');

var ActionTypes = AppConstants.ActionTypes;

module.exports={
	clickArtist: function(index){
		console.log("ActionCreator clickArtist");
		AppDispatcher.handleViewAction({
			actionType: ActionTypes.CLICK_ARTIST,
			artist: index
		});
	}
};