/**
 * @jsx React.DOM
 */
var AppActions = require("../actions/AppActions");

 var Star=React.createClass({
 	handleClick: function(){
		AppActions.clickArtist(this.props.artistName);


	},

 	render: function(){

 		//style for artist background-image

 		var starbgStyle={
 			'background-image': 'url('+this.props.artistImage+')'
 		};
 		

 		return(
 			
	 			<div className="artist-but" onClick={this.handleClick}>
					<figure className="artist-thumb" style={starbgStyle}>
						
					</figure>

					<span className="artist-name"> {this.props.artistName} </span>
					<a href="#" className="artist-remove">
						<i className="icon-remove"></i>
					</a>
				</div>
			
 		)

 	}

 });

module.exports=Star;