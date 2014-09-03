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


function update(id, updates) {
  _stars[id] = merge(_stars[id], updates);
}

function destroy(id) {
  delete _stars[id];
}

