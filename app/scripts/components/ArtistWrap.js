/**
 * @jsx React.DOM
 */

var Artist = require("./Artist"),
	ArtistActionCreators = require("../actions/ArtistActionCreators"),
	ArtistStore = require('../stores/ArtistStore'),
	AlbumStore=require('../stores/AlbumStore');
var ArtistWrap=React.createClass({
	

	render:function(){
		console.log('props',this.props)
		var artists = [];
        var lastArtist = null;
        this.props.artistAlbums.forEach(function(artistAlbum) {
           
            artists.push(
            	<li class="artist-item">
            	<Artist artistName={artistAlbum.artistName} artistImage={artistAlbum.artistImage} />
            	</li>
            );
           
           
        }.bind(this));
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