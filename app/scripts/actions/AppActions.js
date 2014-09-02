var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');


var AppActions={
	addArtist: function(artist){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ARTIST,
			artist: artist
		})
	},
	removeArtist: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ARTIST,
			index: index
		})
	},
	clickArtist: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.CLICK_ARTIST,
			index: index
		})
	},
	clickAlbum: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.CLICK_ALBUM,
			index: index
		})
	}

};


module.exports=AppActions;