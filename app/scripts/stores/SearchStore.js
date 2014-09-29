var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var merge = require('react/lib/merge');
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';


var _artistName= {};




function updateArtist(id, updates) {
  _artists[id] = merge(_artists[id], updates);
}

function destroyArtist(id) {
  delete _artists[id];
}


function clickArtist(id){
	console.log('click:',id);
}



var SearchStore=merge(EventEmitter.prototype,{

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

SearchStore.dispatchToken=AppDispatcher.register(function(payload){

	var action=payload.action;
	var text;

	switch(action.actionType){
		case  ActionTypes.ADD_ARTIST:

			break;
		case  ActionTypes.REMOVE_ARTIST:

			break;
		case  ActionTypes.SEARCH_ARTIST_NAME:
			//AppDispatcher.waitFor([AlbumStore.dispatchToken]);  //waitFor example
			console.log("search neame gg:",action.rawData);
			SearchStore.emitChange(action.rawData);

			break;

		default:
      		
	}
	

	
});

module.exports=SearchStore;

