/**
 * @jsx React.DOM
 */
var  React = require('react');
var Utube=require('./Utube');



var VideoWrap= React.createClass({


	render: function(){

		return(

	 		<div className="video-wrap">
			  <Utube />
			</div>
 		);

	}
	

});


module.exports=VideoWrap;