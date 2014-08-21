/**
 * @jsx React.DOM
 */

 var SearchWrap=React.createClass({


 	render: function(){
 		return(

 			<div className="search-wrap">
 				<form  className="artist-search">
				<input type="text" name="artist-search" list="artist-name-list" id="artist-search" autocomplete="on" placeholder="artist or band..." />
				<datalist className="artist-name-list">
					

				</datalist>
			    </form>
 			</div>
 		)
 	}

 });

  module.exports=SearchWrap;