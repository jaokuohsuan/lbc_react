/**
 * @jsx React.DOM
 */
var  React = require('react');
var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");

 var SearchDropdown=React.createClass({


 	handleKeyPress: function(evt){
 		
 		
 		if(evt.keyCode == "13"){

 			


 			var val=this.refs.searchDropInput.getDOMNode().value;
 			console.log("evt-keycode:"+evt.keyCode,"val:",val);
 			// evt.preventDefault();
 			SearchActionCreators.addArtistFromSearch(val);
 			
 		}
 	},
 	handleChange: function (evt) {
 		var val=this.refs.searchInput.getDOMNode().value;
 		if (val.length >= 4) {
 			SearchActionCreators.searchArtistName(val);
 		}
 		
 		
 	},



 	getInitialState: function() {
    	return {artistNameList: null};
  	},

  	componentDidMount: function() {
  		SearchStore.addChangeListener(this._onChange);

  	},
  	componentWillUnmount: function() {
  		SearchStore.removeChangeListener(this._onChange);

  	},


 	render: function(){
 		var nameList=[];
 		var nameMenuList=[]

 		if(this.state.artistNameList!= null){

	 		this.state.artistNameList.map(function(artistName){
	 			nameList.push(
	 				<option value={artistName} key={artistName}>{artistName}</option>
	 			);
	 			nameMenuList.push(
	 				<div className="item" data-value={artistName} key={artistName}>{artistName}</div>
	 				

	 			);


	 		});
	 	}


 		return(

 			
 			<div  className="ui search dropdown selection"   >
				
				<select>
					{nameList}
				</select>
				<i className="dropdown icon"></i>
				<input type="text" className="search" tabIndex="0" ref="searchDropInput" onChange={this.handleChange}   />
				<div className="text"> t</div>
				<div className="menu transition hidden" tabIndex="-1">
					{nameMenuList}
				</div>

			
			</div>
					
 			
 		)
 	},
 	_onChange: function(data) {

 		//console.log('on channge');
		
    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchDropdown;