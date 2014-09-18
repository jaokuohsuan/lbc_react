var keyMirror = require('react/lib/keyMirror');

module.exports={


	ActionTypes: keyMirror({
		ADD_ARTIST: 'ADD_ARTIST',
		RECEIVE_ARTIST: 'RECEIVE_ARTIST',
		REMOVE_ARTIST: 'REMOVE_ARTIST',
		CLICK_ARTIST: 'CLICK_ARTIST',
		CLICK_ALBUM: 'CLICK_ALBUM'
	}),
	
	PayloadSources: keyMirror({
	    SERVER_ACTION: null,
	    VIEW_ACTION: null
	})

};