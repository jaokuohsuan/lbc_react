/**
 * @jsx React.DOM
 */

var Album = require("./Album");

var AlbumWrap= React.createClass({
	render: function(){

		return(

	 			<div className="album-scroll">

			         <ul className="album-item-list">
				         <li className="album-item">

								<Album />		
		  
		                </li>
					</ul>
				  <div className="album-line">
					<div className="line-inner"></div>
				  </div>
		      </div>
		)

	}

});

module.exports=AlbumWrap;