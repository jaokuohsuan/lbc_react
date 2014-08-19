/**
 * @jsx React.DOM
 */


 var Star=React.createClass({

 	render: function(){
 		return(
 			
	 			<div className="artist-but">
					<figure className="artist-thumb">	</figure>

					<span className="artist-name"> artistName </span>
					<a href="#" className="artist-remove">
						<i className="icon-remove"></i>
					</a>
				</div>
			
 		)

 	}

 });

module.exports=Star;