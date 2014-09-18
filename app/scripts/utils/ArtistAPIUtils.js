
var ArtistServerAction = require('../actions/ArtistServerAction');

var gooogle_key = "AIzaSyAsteyStoDAQ62iG-rc5uDXttHNrtfEVHM";
var lastfm_key = "d971000674f672292bf9638ba253bc54";
var searchkey = "stars"; //Model

module.exports={


   
   getArtists:function(searchkey){
   	
	   	var oReq = new XMLHttpRequest();
	   	oReq.onreadystatechange = function(){

	   		  if ( oReq.readyState == 4) {
		　　　　　
					//get artists
					var _response = {};					
					var response =JSON.parse(oReq.responseText);
					response  = response.results.artistmatches.artist[0];
					_response.artistImage = response.image[2]["#text"];
					_response.artistMbid = response.mbid;
					_response.artistName = response.name;
					delete response;
					console.log( 'artist:',_response);
					ArtistServerAction.receiveArtists(_response );

		　　　} else {
		　　　　　　console.log( "Error: ",oReq.statusText );
		　　　}
	   	}
	    oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchkey+ "&api_key=" + lastfm_key + "&format=json", true);
	    oReq.send(null);

   },
   getAlbums: function(searchkey){
   		var oReq = new XMLHttpRequest();
   		oReq.onreadystatechange = function(){

	   		  if ( oReq.readyState == 4) {
		　　　　　
					//get getAlbums
					var _response = {};
					var response =JSON.parse(oReq.responseText);
					response=response.topalbums.album;
					// _response.albumName = response.name; //get album name
					// _response.albumMbid = response.mbid; // get album mbid
					// _response.albumCover = response.image[3]["#text"]; //get medium thumbnal medium url

					// _response.artistName = response.artist.name; //rename description
					// _response.albumNumber = response.albumNumber;
					// delete response;

					console.log( 'album:',response);
					// ArtistServerAction.receiveArtists(_response );

		　　　} else {
		　　　　　　console.log( "Error: ",oReq.statusText );
		　　　}
	   	}
	    oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + searchkey + "&autocorrect=1&api_key=" + lastfm_key + "&format=json", true);
	    oReq.send(null);
   },
   getTracks: function(albumMbid){
   		var oReq = new XMLHttpRequest();

   		oReq.onreadystatechange = function(){
   			if ( oReq.readyState == 4) {
   				var _response = {};
				var response =JSON.parse(oReq.responseText);
   				console.log( 'track:',response);
   			}else{
   				console.log( "Error: ",oReq.statusText );
   			}

   		}

   		if (albumMbid != "") {
				oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + lastfm_key + "&mbid=" + albumMbid + "&format=json",true);
		} else {
				oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + lastfm_key + "&artist=" + encodeURI(artistName) + "&album=" + encodeURI(albumName) + "&format=json",true);
		}
		oReq.send(null);





   }



};