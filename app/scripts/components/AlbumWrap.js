/**
 * @jsx React.DOM
 */

var Album = require("./Album"),
	AlbumActionCreators = require("../actions/AlbumActionCreators"),
	AlbumStore= require("../stores/AlbumStore");


var AlbumWrap= React.createClass({
	getInitialState: function() {
    	return {artist: 'Stars'};
  	},
  	componentDidMount: function() {
  		AlbumStore.addChangeListener(this._onChange);

  	},
  	componentWillUnmount: function() {
  		AlbumStore.removeChangeListener(this._onChange);

  	},
	render: function(){
		console.log('Album-props',this.props);
		var albums = [];
		var indexNum= _.findIndex(this.props.artistAlbums, { 'artistName': this.state.artist });
		console.log('indexNum:', indexNum);
		this.props.artistAlbums[indexNum].albumList.map(function(artistAlbum) {
           
            albums.push(

            	<li className="album-item">
            	<Album albumName={artistAlbum.albumName} albumCover={artistAlbum.albumCover} />
            	</li>
            );
           
           
        });

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

	},

	_onChange: function(data) {
		console.log("_onChange",data);
    	this.setState({artist: data.artist});
    }

});

module.exports=AlbumWrap;