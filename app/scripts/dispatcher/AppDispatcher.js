var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var AppConstans= require('../contants/AppConstans');
var PayloadSources=AppConstans.PayloadSources;

var AppDispatcher = copyProperties(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }


});

module.exports = AppDispatcher;