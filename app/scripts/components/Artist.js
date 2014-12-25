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

	 				<div className="ui segment">


						<figure className="artist-thumb" style={artistbgStyle}>
							
						</figure>

						<span className="artist-name"> {this.props.artistName} </span>
						<a href='#' className="artist-remove">
							<i className="icon-remove"></i>
						</a>
					</div>



					<div className="ui card artist-but" onClick={this.handleClick}>
					  <div className="ui image fluid">
					    <img src={this.props.artistImage} />
					  </div>
					  <div className="content">
					    <a className="header">{this.props.artistName}</a>
					    <div className="meta">
					      <span className="date">Joined in 2014</span>
					      <img className="ui avatar image  massive" src={this.props.artistImage} />
					    </div>
					    
					  </div>
					  <div className="extra content">
					    <a>
					      <i className="user icon"></i>
					      22 Friends
					    </a>
					  </div>
					</div>

				</div>
			
 		)

 	}

 });

module.exports=Artist;