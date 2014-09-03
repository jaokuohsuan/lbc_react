var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';


var _stars = {};


function createStar(star) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _stars[id] = {
    id: id,
    complete: false,
    text: text
  };
}


function updateStar(id, updates) {
  _stars[id] = merge(_stars[id], updates);
}

function destroyStar(id) {
  delete _stars[id];
}

var StarStore=merge(EventEmitter.prototype,{

	getAll: function(){
		return _stars;
	},
	emitChange: function() {
	    this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	}

});

AppDispatcher.register(function(payload){

	var action=payload.action;
	var text;

	switch(action.actionType){
		case AppConstants.ADD_ARTIST:

			break;
		case AppConstants.REMOVE_ARTIST

			break;
		case AppConstants.CLICK_ARTIST

			break;
		case AppConstants.CLICK_ALBUM
			break;
		default:
      		return true;
	}

	StarStore.emitChange();

	return true;  // No errors.  Needed by promise in Dispatcher.
});

model.exports=StarStore;

