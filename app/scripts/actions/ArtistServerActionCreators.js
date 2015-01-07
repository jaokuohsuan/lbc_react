var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// var MusicAPIUtils = require('../utils/MusicAPIUtils');
var ActionTypes = AppConstants.ActionTypes;


module.exports={

  receiveInit: function(rawData) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_INIT,
      rawData: rawData
    });

    // console.log('receiveInit');
  },
  receiveArtists: function(rawData){
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.SEARCH_ARTIST_NAME,
      rawData: rawData
    });
    // console.log('receiveArtists');

  },
  addArtists: function(rawData){
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.ADD_ARTIST,
      rawData: rawData
    });
    // console.log('addArtists');

  },
  getAlbums: function(rawData){
    // console.log("rawData=",rawData);
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.GET_ALBUMS,
      rawData: rawData
    });
    // console.log('rawData.artistName= ',rawData.artistName)

    

  },
  receiveAlbums: function(rawData){
    // console.log("rawData=",rawData);
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_ALBUMS,
      rawData: rawData
    });

  },
  receiveTracks: function (rawData) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_TRACKS,
      rawData: rawData
    });
  }

}