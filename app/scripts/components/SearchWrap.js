/**
 * @jsx React.DOM
 */
var  React = require('react');
var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");
var SearchDropdown = require("./SearchDropdown");


 var SearchWrap=React.createClass({



 	handleMenuClick : function(evt,artist){

  		// SearchActionCreators.addArtistFromSearch(artistName);
 		ArtistServerActionCreators.addArtists(artist);
 		ArtistServerActionCreators.getAlbums(artist);
 			

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

 					<SearchDropdown placeholder="artist name" options={this.state.artistNameList} startSearchNum="4" onMenuClick={this.handleMenuClick} />				
			   
				</div>
 			</div>
 		)
 	},


 	_onChange: function(data) {

 		

    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchWrap;


