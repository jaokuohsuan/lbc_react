var Request = require('superagent');
var ArtistServerActionCreators = require('../actions/ArtistServerActionCreators');

var gooogle_key = "AIzaSyAsteyStoDAQ62iG-rc5uDXttHNrtfEVHM";
var lastfm_key = "d971000674f672292bf9638ba253bc54";
var searchkey = "stars"; //Model

module.exports={


    getInitData: function() {
	    // simulate retrieving data from a database
	    var rawMessages = JSON.parse(localStorage.getItem('artistalbums'));

	    // simulate success callback
	    ArtistServerActionCreators.receiveInit(rawMessages);
    },


  //   getSearchTips: function(){

  //   	var oReq= new XMLHttpRequest();
  //   	oReq.onreadystatechange = function(){

	 //   		  if ( oReq.readyState == 4) {
		// 　　　　　
		// 			//get artists
		// 			var _response = {};					
		// 			var response =JSON.parse(oReq.responseText);
		// 			// response  = response.results.artistmatches.artist[0];
		// 			// _response.artistImage = response.image[2]["#text"];
		// 			// _response.artistMbid = response.mbid;
		// 			// _response.artistName = response.name;
		// 			// delete response;
		// 			console.log( 'artist:',response);
					

		// 　　　} else {
		// 　　　　　　console.log( "Error: ",oReq.statusText );
		// 　　　}
	 //   	}
	 //   	 oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchkey+ "&api_key=" + lastfm_key + "&format=json", true);
	 //   	 oReq.send(null);



  //   },

  getArtistTips:function(searchkey){

  		Request
  			.get('http://ws.audioscrobbler.com/2.0/')
  			.accept('json')
  			.query({'method':'artist.search','artist': searchkey,'api_key':lastfm_key,'format':'json'})
  			.end(function(res){

  				if (res.ok){
  					console.log('res=',res.body);

	  				var _response = {};					
					var response =res.body;
					response  = response.results.artistmatches.artist;
					_response = _.filter(response,'mbid'); //filter out mbid is empty
					_response = _.map(_response,'name'); //get name list 
					delete response;

					ArtistServerActionCreators.receiveArtists(_response);

  				}else{
  					console.error('Oh no! error ' + res.text);
  				}
  				

  			});


   	
	   	// var oReq = new XMLHttpRequest();
	  //  	oReq.onreadystatechange = function(){

	  //  		  if ( oReq.readyState == 4) {
		
			// 		//get artists
			// 		var _response = {};					
			// 		var response =JSON.parse(oReq.responseText);
			// 		response  = response.results.artistmatches.artist;
			// 		_response = _.filter(response,'mbid'); //filter out mbid is empty
			// 		_response = _.map(_response,'name'); //get name list 

			// 		delete response;

			// 		// console.log( 'artist:',_response);
					
					
			// 		ArtistServerActionCreators.receiveArtists(_response);

			// } else {
			// 	// console.log( "Error: ",oReq.statusText );
			// }
	  //  	}
	    //oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchkey+ "&api_key=" + lastfm_key + "&format=json", true);
	    //oReq.send(null);

   },


   
   getArtists:function(searchkey){

   		Request
   			.get('http://ws.audioscrobbler.com/2.0/')
  			.accept('json')
  			.query({'method':'artist.search','artist': searchkey,'api_key':lastfm_key,'format':'json'})
   		   	.end(function(res){

	  				if (res.ok){
	  					console.log('res=',res.body);

		  				var _response = {};					
						var response =res.body;
						response  = response.results.artistmatches.artist[0];
						_response.artistImage = response.image[2]["#text"];
						_response.artistMbid = response.mbid;
						_response.artistName = response.name; 
						delete response;

						ArtistServerActionCreators.addArtists(_response);

	  				}else{
	  					console.error('Oh no! error ' + res.text);
	  				}
	  				

	  		});

   },
   getAlbums: function(searchkey){

   		Request
  			.get('http://ws.audioscrobbler.com/2.0/')
  			.accept('json')
  			.query({'method':'artist.gettopalbums','artist': searchkey,"autocorrect": 1,'api_key':lastfm_key,'format':'json'})
  			.end(function(res){

	  				if (res.ok){
	  					console.log('res=',res.body);
	  					var _response = {};
						var response =res.body;
						response=response.topalbums.album;


	  				}else{
	  					console.error('Oh no! error ' + res.text);
	  				}
	  				

	  		});

   },
   getTracks: function(albumMbid){
   		var queryUrl={};

   		if (albumMbid != ""){
   			queryUrl={'method':'album.getinfo','mbid': albumMbid,'api_key':lastfm_key,'format':'json'};
   		}else{
   			queryUrl={'method':'album.getinfo','artist': artistName,'album': albumName,'api_key':lastfm_key,'format':'json'};
   		}

   		Request
   			.get('http://ws.audioscrobbler.com/2.0/')
   			.accept('json')
   			.query(queryUrl)
   			.end(function(res){

	  				if (res.ok){
	  					
	  					var _response = {};
						var response =res.body;
						console.log( 'track:',response);


	  				}else{
	  					console.error('Oh no! error ' + res.text);
	  				}
	  				

	  		});
   		




   		

  //  		if (albumMbid != "") {
		// 		oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + lastfm_key + "&mbid=" + albumMbid + "&format=json",true);
		// } else {
		// 		oReq.open("GET", "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + lastfm_key + "&artist=" + encodeURI(artistName) + "&album=" + encodeURI(albumName) + "&format=json",true);
		// }
		





   }



};