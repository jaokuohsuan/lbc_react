

var gooogle_key = "AIzaSyAsteyStoDAQ62iG-rc5uDXttHNrtfEVHM";
var lastfm_key = "d971000674f672292bf9638ba253bc54";
var searchkey = "stars"; //Model

module.exports={


   
   getArtists:function(searchName){
   	
	   	var oReq = new XMLHttpRequest();
	   	oReq.onreadystatechange = function(){

	   		  if ( oReq.readyState == 4 && oReq.status == 200 ) {
		　　　　　　alert( oReq.responseText );
					//get artists
					var rawArtist=JSON.parse(xhr.responseText);

		　　　} else {
		　　　　　　alert( oReq.statusText );
		　　　}
	   	}
	    oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchName + "&api_key=" + lastfm_key + "&format=json", true);
	    oReq.send(null);

   }



};