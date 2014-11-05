var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var AppConstans= require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports={
	clickAlbum: function(index){
		console.log("ActionCreator click album");
		AppDispatcher.handleViewAction({
			actionType: ActionTypes.CLICK_ALBUM,
			index: index
		});
		AppDispatcher.handleRouterAction({
			actionType: ActionTypes.ROUNTER_ALBUM,
			album: index
		});

	}
};