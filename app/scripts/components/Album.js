/**
 * @jsx React.DOM
 */

var AlbumActionCreators = require("../actions/AlbumActionCreators");

 var Album=React.createClass({
 	handleClick: function(){
 		console.log("handleClick");
	
	},


 	render: function(){
 		return(
 			<div>
	 			<a href="#" className="album-but" onClick={this.handleClick}>
					<figure className="album-thumb">
						<img src={this.props.albumCover} />
						
					</figure>
					<span className="album-title"> {this.props.albumName} </span>
				</a>
				<span className="album-time">album </span>
			</div>
 		)
 	}

 });



 module.exports=Album;