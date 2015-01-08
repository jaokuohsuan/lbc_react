/**
 * @jsx React.DOM
 */
var  React = require('react');
var VideoWrap= React.createClass({


	render: function(){

		return(

	 		<div className="video-wrap">
			  <div id="UtubePlayer"></div>
			</div>
 		);

	}
	

});


 module.exports=VideoWrap;