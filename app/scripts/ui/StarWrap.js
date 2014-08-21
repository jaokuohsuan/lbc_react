/**
 * @jsx React.DOM
 */

var Star = require("./Star");

var StarWrap=React.createClass({


	render:function(){
		return(
			<div className="artist-wrap">
			<div className="artist-line"></div>
			<ul className="artist-catalogue-list">
				<li class="artist-item">
	               
					<Star/>
					
				   
				</li>
			</ul>
		</div>
		)
	}



});


module.exports=StarWrap;