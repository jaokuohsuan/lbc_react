var React = require('react');
var Album = require("./Album"),
	AlbumActionCreators = require("../actions/AlbumActionCreators"),
	AlbumStore= require("../stores/AlbumStore");

function getStateInit() {
  return {
    artistAlbums: AlbumStore.getInitData(),
    artist: AlbumStore.getInitData()[0].artistName
  };
}

var AlbumWrap= React.createClass({



	_onChange: function(data) {
		// console.log("_onChange",data);
    	this.setState({artist: data.artist});
    },


	getInitialState: function() {
    	return getStateInit();
  	},
  	componentDidMount: function() {
  		AlbumStore.addChangeListener(this._onChange);

  	},
  	componentWillUnmount: function() {
  		AlbumStore.removeChangeListener(this._onChange);

  	},
	render: function(){
		// console.log('Album-state',this.state);
		var albums = [];
		var indexNum= _.findIndex(this.state.artistAlbums, { 'artistName': this.state.artist });
		// console.log('indexNum:', indexNum);
		this.state.artistAlbums[indexNum].albumList.map(function(artistAlbum) {
           
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

	}

});

module.exports=AlbumWrap;