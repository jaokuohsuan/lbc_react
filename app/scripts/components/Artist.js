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

	 				

					<div className="ui card fluid grid" onClick={this.handleClick}>
					    <div className="four wide column">
						  	<figure className="artist-thumb " style={artistbgStyle}>
								
							</figure>
						</div>

					  
					  <div className="content twelve wide column">

						  <div className="middle aligned">
						  	
						    <a className="header">{this.props.artistName}</a>
						    <div className="meta">
						      <span className="date">Joined in 2014</span>
						      
						    </div>
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