/**
 * @jsx React.DOM
 */

var Star = require("./Star");

var StarWrap=React.createClass({


	render:function(){
		console.log('props',this.props)
		var artists = [];
        var lastArtist = null;
        this.props.artistAlbums.forEach(function(artistAlbum) {
           
            artists.push(
            	<li class="artist-item">
            	<Star artistName={artistAlbum.artistName} artistImage={artistAlbum.artistImage} />
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


module.exports=StarWrap;