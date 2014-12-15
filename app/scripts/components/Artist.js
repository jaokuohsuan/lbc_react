/**
 * @jsx React.DOM
 */
var  React = require('react');
var ArtistActionCreators = require("../actions/ArtistActionCreators");

 var Artist=React.createClass({
 	handleClick: function(){
 		// console.log("handleClick");
		ArtistActionCreators.clickArtist(this.props.artistName);
		
	},

 	render: function(){

 		//style for artist background-image

 		var artistbgStyle={
 			'background-image': 'url('+this.props.artistImage+')'
 		};
 		

 		return(
 			
 			
	 			<div className="artist-but" onClick={this.handleClick}>
					<figure className="artist-thumb" style={artistbgStyle}>
						
					</figure>

					<span className="artist-name"> {this.props.artistName} </span>
					<a href='#' className="artist-remove">
						<i className="icon-remove"></i>
					</a>
				</div>
			
 		)

 	}

 });

module.exports=Artist;