
var React = require('react');
var ArtistActionCreators = require("../actions/ArtistActionCreators");
var albumAmount;

 var Artist=React.createClass({

 	handleClick: function(){
 
		ArtistActionCreators.clickArtist(this.props.artistName);
		
	},



 	render: function(){

 		//add albumAmount

 		if(Array.isArray(this.props.artistalbums)){
			albumAmount=this.props.artistalbums.length;

		}else{
			albumAmount="-";
		}

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
						      <span className="date">{albumAmount} Albums</span>
						      
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