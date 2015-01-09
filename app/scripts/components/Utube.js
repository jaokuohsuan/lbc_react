//base on https://github.com/compedit/react-youtube

var  React = require('react');
var  CreatePlayer = require('../utils/CreatePlayer');

var  internalPlayer,
 	 playerReadyHandle,
     stateChangeHandle;



var Utube=React.createClass({

	getDefaultProps: function() {
	    return {
	      id: 'react-yt-player',
	      height: '100%',
		  width: '100%',
	      autoplay: false,
	      onPlayerReady: noop,
	      onVideoReady: noop,
	      onPlay: noop,
	      onPause: noop,
	      onEnd: noop
	    };
	},

	componentDidMount: function() {
	    var self = this;

	    CreatePlayer(this.props.id, function(player) {
	      self._setupPlayer(player);
	      // console.log('gg')

	    });
	},

	_destroyGlobalEventHandlers: function() {
	    delete window[playerReadyHandle];
	    delete window[stateChangeHandle];
	 },

	_loadVideo: function(videoID) {
	    if (this.props.autoplay) {
	      internalPlayer.loadVideoById(videoID);
	    } else {
	      internalPlayer.cueVideoById(videoID);
	    }
	},

	_setupPlayer: function(player){
		internalPlayer = player;
		this._globalizeEventHandlers();
        this._bindEvents();

	},
	_handlePlayerReady: function() {
		console.log('gagagaag');
		this._loadVideo("2g811Eo7K8U");
    	this.props.onPlayerReady();
  	},
  	_globalizeEventHandlers: function() {
    	playerReadyHandle = this._globalize(this._handlePlayerReady,"playerReadyHandle");
    	stateChangeHandle = this._globalize(this._handlePlayerStateChange,"stateChangeHandle");
 	},

 	_globalize: function(variable) {
	  var alias = makeid(10);
	  window[alias] = variable;
	  return alias;
	},

	_bindEvents: function() {
	    internalPlayer.addEventListener('onReady', playerReadyHandle);
	    internalPlayer.addEventListener('onStateChange', stateChangeHandle);
	 },

	_unbindEvents: function() {
	    internalPlayer.removeEventListener('onReady', playerReadyHandle);
	    internalPlayer.removeEventListener('onStateChange', stateChangeHandle);
	},


	render: function(){

		return(
			<div id={this.props.id}></div>
		);
	}
});

//for empty function
function noop() {}
// make random string
function makeid(num){
	// var num= num ? num : 5;
	num= num || 5;

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < num; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    };
    return text;
}


module.exports=Utube;