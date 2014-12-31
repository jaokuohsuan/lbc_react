var keyMirror = require('react/lib/keyMirror');

module.exports={

	ActionTypes: keyMirror({
		ADD_ARTIST: null,
		ENTER_ARTIST: null,
		RECEIVE_ARTIST: null,
		REMOVE_ARTIST: null,
		CLICK_ARTIST: null,
		ROUNTER_ARTIST: null,
		ROUNTER_ALBUM: null,
		CLICK_ALBUM: null,
		RECEIVE_INIT: null,
		SEARCH_ARTIST_NAME: null,
		GET_ALBUMS: null
	}),	
	PayloadSources: keyMirror({
	    SERVER_ACTION: null,
	    VIEW_ACTION: null
	})

};