var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var MusicAPIUtils = require('../utils/MusicAPIUtils');

var ActionTypes = AppConstants.ActionTypes;


module.exports={


  searchArtistName: function(val){
  	AppDispatcher.handleServerAction({
      actionType: ActionTypes.SEARCH_ARTIST_NAME,
      rawData: val
    });

    MusicAPIUtils.getArtistTips(val);

  },

  addArtistFromSearch: function(val){
  	AppDispatcher.handleServerAction({
      actionType: ActionTypes.ENTER_ARTIST,
      rawData: val
    });    

    // MusicAPIUtils.getArtists(val);

  },
  


}