/**
 * @jsx React.DOM
 */
var  React = require('react');
var Artist = require("./Artist"),
	ArtistActionCreators = require("../actions/ArtistActionCreators"),
	ArtistStore = require('../stores/ArtistStore'),
  AlbumStore= require('../stores/AlbumStore');
	//RounterStore= require('../stores/RounterStore');


function getStateInit() {
  return {
    artistAlbums: ArtistStore.getInitData()
  };
}


var ArtistWrap=React.createClass({

    _onChange: function(data){
      // console.log("_onChange data:" ,data);
      this.setState({artistAlbums: data});

    },

	  getInitialState: function() {
    	// init satate
    	return getStateInit();
  	},

  	componentDidMount: function() {
      ArtistStore.addChangeListener(this._onChange);

   
    },

    componentWillUnmount: function() {
      ArtistStore.removeChangeListener(this._onChange);

    
    },

	

	render:function(){
		// console.log('artistwrap state',this.state)
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