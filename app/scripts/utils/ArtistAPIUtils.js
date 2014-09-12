
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
					var rawArtists=JSON.parse(oReq.responseText);
					　console.log( 'lalala:',rawArtists);
					ArtistServerAction.receiveArtists(rawArtists);

		　　　} else {
		　　　　　　console.log( "Error: ",oReq.statusText );
		　　　}
	   	}
	    oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchkey+ "&api_key=" + lastfm_key + "&format=json", true);
	    oReq.send(null);

   }



};