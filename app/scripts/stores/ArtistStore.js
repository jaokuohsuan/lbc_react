var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var merge = require('react/lib/merge');
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';


var _artist= {};





function createArtist(artist) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _artists[id] = {
    id: id,
    complete: false,
    text: text
  };
}


function updateArtist(id, updates) {
  _artists[id] = merge(_artists[id], updates);
}

function destroyArtist(id) {
  delete _artists[id];
}


function clickArtist(id){
	console.log('click:',id);
}



var ArtistStore=merge(EventEmitter.prototype,{

	getInitData:function(rawData){      
      return _artist;
    },

	getAll: function(){
		return _artists;
	},
	emitChange: function(action) {
	    this.emit(CHANGE_EVENT,action);
	},
	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	}

});

ArtistStore.dispatchToken=AppDispatcher.register(function(payload){

	var action=payload.action;
	var text;

	switch(action.actionType){
		case  ActionTypes.RECEIVE_INIT:     	
     	  	_artist=action.rawData; 
     	break;
		case  ActionTypes.ADD_ARTIST:
			
			_artist.push(action.rawData);
			ArtistStore.emitChange(_artist);

			break;
		case  ActionTypes.REMOVE_ARTIST:

			break;
		case  ActionTypes.CLICK_ARTIST:
			//AppDispatcher.waitFor([AlbumStore.dispatchToken]);  //waitFor example
			ArtistStore.emitChange(_artist);

			break;

		default:
      		
	}
	

	
});

module.exports=ArtistStore;

