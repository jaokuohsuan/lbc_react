var Dispatcher = require('./Dispatcher');
var copyProperties = require('react/lib/copyProperties');
var AppConstans= require('../contants/AppConstans');
var PayloadSources=AppConstans.PayloadSources;

var AppDispatcher = copyProperties(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },
  handleServerAction: function(action){
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;