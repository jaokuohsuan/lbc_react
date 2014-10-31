var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');

var ActionTypes = AppConstants.ActionTypes;

module.exports={
	clickArtist: function(index){
		
		AppDispatcher.handleViewAction({
			actionType: ActionTypes.CLICK_ARTIST,
			artist: index
		});
		AppDispatcher.handleRouterAction({
			actionType: ActionTypes.ROUNTER_ARTIST,
			artist: index
		});

	}
};