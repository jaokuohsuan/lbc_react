// base on https://github.com/compedit/react-youtube/blob/master/lib/createPlayer.js

/**
 * Module dependencies
 */

var load = require('require-sdk');

/**
 * Expose `createPlayer`
 */

module.exports = CreatePlayer;

/**
 * Create a new `player` by requesting and using the YouTube Iframe API
 *
 * @param {String} id - reference to element for player
 * @param {Function} cb
 */

function CreatePlayer(id,cb,vars) {
  var sdk = loadApi();
  var defaultVars={
  		height: '100%',
		width: '100%',
		playerVars: {
			"controls": 2, //change youtube controls bar 
			"autohide": 1, //auto hide contral bar
			"theme": "dark",
			"color": "white",
			"rel": 0

		}
  }
  
  return sdk(function(err) {
    var player = new YT.Player(id,defaultVars);
    return cb(player);
  });
}

/**
 * Load the YouTube API
 *
 * @returns {Function}
 */

function loadApi() {
  var sdk = load('https://www.youtube.com/iframe_api', 'YT');
  var loadTrigger = sdk.trigger();

  /**
   * The YouTube API requires a global ready event handler. 
   * The YouTube API really sucks.
   */

  window.onYouTubeIframeAPIReady = function () {
    loadTrigger();
    delete window.onYouTubeIframeAPIReady;
  };

  return sdk;
}