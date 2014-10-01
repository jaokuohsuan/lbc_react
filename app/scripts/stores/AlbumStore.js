var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var ActionTypes = AppConstants.ActionTypes;


var CHANGE_EVENT = 'change';


var _album= {};


// function createArtist(artist) {
//   // Hand waving here -- not showing how this interacts with XHR or persistent
//   // server-side storage.
//   // Using the current timestamp in place of a real id.
//   var id = Date.now();
//   _artists[id] = {
//     id: id,
//     complete: false,
//     text: text
//   };
// }


function updateAlbum(id, updates) {
  _album[id] = merge(_album[id], updates);
}

function destroyAlbum(id) {
  delete _album[id];
}


function clickAlbum(id){
	console.log('click:',id);
}



var AlbumStore=merge(EventEmitter.prototype,{

	


	getInitData:function(rawData){      
      return _album;
    },

	getAll: function(){
		return _album;
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

AlbumStore.dispatchToken=AppDispatcher.register(function(payload){

	var action=payload.action;
	var text;

	switch(action.actionType){
		case  ActionTypes.RECEIVE_INIT:
     		console.log('INIT lalala',action.rawData);
     	  	_album=action.rawData; 
     	break;
		case  ActionTypes.ADD_ARTIST:

			break;
		case  ActionTypes.REMOVE_ARTIST:

			break;
		case  ActionTypes.CLICK_ARTIST:
			AlbumStore.emitChange(action);
			break;
		case  ActionTypes.CLICK_ALBUM:

			break;

		default:
      		
	}
	

	
});

module.exports=AlbumStore;

