var AppConstants= require('../constants/AppConstants');
var AppDispatcher= require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _data= {};

var AppStore=merge(EventEmitter.prototype,{

    getInitData:function(rawData){      
      return _data;
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

AppStore.dispatchToken=AppDispatcher.register(function(payload){


  var action=payload.action;


  switch(action.actionType){
    case  ActionTypes.RECEIVE_INIT:
      console.log('INIT lalala',action.rawData);
      _data=action.rawData;
    
      

      break;


    default:
          
  }
  

  
});

module.exports=AppStore;

