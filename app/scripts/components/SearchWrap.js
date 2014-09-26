/**
 * @jsx React.DOM
 */
 var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");


 var SearchWrap=React.createClass({



 	handleKeyPress: function(evt){
 		console.log("evt:"+evt.keyCode);
 	},
 	handleChange: function (evt) {
 		var val=this.refs.searchInput.getDOMNode().value;
 		if (val.length >= 4) {
 			ArtistServerActionCreators.searchArtistName(val);
 		}
 		
 		
 	},



 	getInitialState: function() {
    	return {artistNameList: null};
  	},


 	render: function(){
 		return(

 			<div className="search-wrap" onKeyPress={this.handleKeyPress}>
 				<form  className="artist-search" >
				<input type="text" value={this.props.searchText} ref="searchInput" onChange={this.handleChange}  name="artist-search" list="artist-name-list"  autocomplete="on" placeholder="artist or band..." />
				<datalist id="artist-name-list">
					

				</datalist>
			    </form>
 			</div>
 		)
 	}

 });

  module.exports=SearchWrap;