/**
 * @jsx React.DOM
 */


 var Album=React.createClass({


 	render: function(){
 		return(
 			<div>
	 			<a href="#" className="album-but">
					<figure className="album-thumb">
						
					</figure>
					<span className="album-title"> albumName </span>
				</a>
				<span className="album-time">album </span>
			</div>
 		)
 	}

 });



 module.exports=Album;