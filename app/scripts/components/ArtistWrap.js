/**
 * @jsx React.DOM
 */

var Artist = require("./Artist"),
	ArtistActionCreators = require("../actions/ArtistActionCreators"),
	ArtistStore = require('../stores/ArtistStore'),
	AlbumStore= require('../stores/AlbumStore');


function getStateInit() {
  return {
    artistAlbums: ArtistStore.getInitData()
  };
}


var ArtistWrap=React.createClass({

    _onAddArtist: function(data){
      console.log("_onAddArtist data:" ,data);
      this.setState({artist: data.artist});

    },

	  getInitialState: function() {
    	// init satate
    	return getStateInit();
  	},

  	componentDidMount: function() {
      ArtistStore.addChangeListener(this._onAddArtist);
   
    },

    componentWillUnmount: function() {
      ArtistStore.removeChangeListener(this._onAddArtist);
    
    },

	

	render:function(){
		console.log('artistwrap state',this.state)
		var artists = [];
        var lastArtist = null;
        this.state.artistAlbums.map(function(artistAlbum) {
           
            artists.push(
            	<li class="artist-item">
            	<Artist artistName={artistAlbum.artistName} artistImage={artistAlbum.artistImage} />
            	</li>
            );
           
           
        });
		return(
			<div className="artist-wrap">
			<div className="artist-line"></div>
			<ul className="artist-catalogue-list">
				{artists}				
			</ul>
		</div>
		)
	}



});


module.exports=ArtistWrap;