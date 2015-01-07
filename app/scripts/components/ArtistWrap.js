/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
            	
            	<Artist artistName={artistAlbum.artistName} artistImage={artistAlbum.artistImage} artistalbums={artistAlbum.albumList} />
            
            );
           
           
        });
		return(
			<div className="ui grid">

			
			<div className="column">
     
				  {artists}			
       
			</div>
		</div>
		)
	}



});


module.exports=ArtistWrap;

// <div className="artist-line"></div>