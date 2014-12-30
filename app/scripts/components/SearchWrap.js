/**
 * @jsx React.DOM
 */
var  React = require('react');
var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");
var SearchDropdown = require("./SearchDropdown");


 var SearchWrap=React.createClass({


 	handleKeyPress: function(evt){
 		
 		
 		if(evt.keyCode == "13"){ 			


 			var val=this.refs.searchInput.getDOMNode().value;
 			
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
 	handleMenuClick : function(evt,artist){

 		console.log('ffffffc=',evt,artist);
 		// SearchActionCreators.addArtistFromSearch(artistName);
 		ArtistServerActionCreators.addArtists(artist);	

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

 		// if(this.state.artistNameList!= null){

	 	// 	this.state.artistNameList.map(function(artistName){
	 	// 		nameList.push(
	 	// 			<option value={artistName}>{artistName}</option>
	 	// 		);

	 	// 	});
	 	// }


 		return(

 			<div className="ui grid serach-wrap">
 				<div className="column">

 					<SearchDropdown placeholder="artist name" value={this.props.searchText} options={this.state.artistNameList} startSearchNum="4" onMenuClick={this.handleMenuClick} />				
			   
				</div>
 			</div>
 		)
 	},


 	_onChange: function(data) {

 		

    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchWrap;


  // <div  className="artist-search" >
		// 		<input type="text" value={this.props.searchText} ref="searchInput" onChange={this.handleChange}  onKeyPress={this.handleKeyPress }  name="artist-search" list="artist-name-list"  autocomplete="on" placeholder="artist or band..." />
		// 		<datalist id="artist-name-list">
		// 			{nameList}			

		// 		</datalist>-