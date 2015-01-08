
var React = require('react');
var AlbumActionCreators = require("../actions/AlbumActionCreators");

var Album=React.createClass({
 	handleClick: function(evt){
 		// console.log("handleClick");
 		AlbumActionCreators.clickAlbum(this.props.albumName);
 		evt.preventDefault();	
	},


 	render: function(){
 		return(
 			
	 			<a  className="item" onClick={this.handleClick}>
					<div className="ui tiny image">
						<img src={this.props.albumCover} />						
					</div>
					<div className="middle aligned content"> 
						<h4 className="header">{this.props.albumName}</h4>
						<div className="description">{this.props.albumName}</div>
					</div>
				</a>
				
			
 		)
 	}

 });



 module.exports=Album;