/**
 * @jsx React.DOM
 */

var Album = require("./Album"),
	AlbumActionCreators = require("../actions/AlbumActionCreators");


var AlbumWrap= React.createClass({
	getInitialState: function() {
    	return {};
  	},
	render: function(){
		console.log('Album-props',this.props);
		var albums = [];
		this.props.artistAlbums[0].albumList.forEach(function(artistAlbum) {
           
            albums.push(
            	<li className="album-item">
            	<Album albumName={artistAlbum.albumName} albumCover={artistAlbum.albumCover} />
            	</li>
            );
           
           
        }.bind(this));

		return(

	 			<div className="album-scroll">

			         <ul className="album-item-list">
				         

								{albums}		
		  
		               
					</ul>
				  <div className="album-line">
					<div className="line-inner"></div>
				  </div>
		      </div>
		)

	}

});

module.exports=AlbumWrap;