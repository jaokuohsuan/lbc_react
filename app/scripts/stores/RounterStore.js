var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var merge = require('react/lib/merge');
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';



var RounterStore = merge(EventEmitter.prototype, {

	// getInitData:function(rawData){      

	//    },

	// getAll: function(){

	// },
	emitChange: function(action) {
		this.emit(CHANGE_EVENT, action);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});


RounterStore.dispatchToken = AppDispatcher.register(function(payload) {

	var action = payload.action;


	switch (action.actionType) {


		case ActionTypes.ROUNTER_ARTIST:


			var routes = {
				

				'/:action.artist': function() {
					console.log("rounter Success", action.artist);
				}
			};

			var router = Router(routes).init();

			router.setRoute('/'+action.artist);
		

			

			// console.log("ROUNTER...:", action.artist+'--', router);



			break;
		case ActionTypes.ROUNTER_ALBUM:


			break;


		default:

	}



});


module.exports = RounterStore;