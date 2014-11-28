/**
 * @jsx React.DOM
 */
 var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");


 var SearchWrap=React.createClass({



 	handleKeyPress: function(evt){
 		
 		
 		if(evt.keyCode == "13"){

 			


 			// var val=this.refs.searchInput.getDOMNode().value;
 			// console.log("evt-keycode:"+evt.keyCode,"val:",val);
 			// evt.preventDefault();
 			SearchActionCreators.addArtistFromSearch(this.state.value);
 			
 		}
 	},
 	handleChange: function (evt) {
 		// var val=this.refs.searchInput.getDOMNode().value;
 		
 		this.setState({value: evt.target.value});
 		console.log('v=',evt.target.value,'this-state',this.state);

 		if (this.state.value.length >= 4) {
 			SearchActionCreators.searchArtistName(this.state.value);
 		}
 		
 		
 	},



 	getInitialState: function() {
    	return {
    		artistNameList: null,
    		value: 'artist or band...'
    	};
  	},

  	componentDidMount: function() {
  		SearchStore.addChangeListener(this._onChange);

  	},
  	componentWillUnmount: function() {
  		SearchStore.removeChangeListener(this._onChange);

  	},


 	render: function(){
 		var nameList=[];

 		if(_.isArray(this.state.artistNameList)){

	 		this.state.artistNameList.map(function(artistName){
	 			nameList.push(
	 				<option value={artistName}>{artistName}</option>
	 			);

	 		});
	 	}


 		return(

 			<div className="search-wrap">
 				<div  className="artist-search" >
				<input type="text" value={this.state.value}  onChange={this.handleChange}  onKeyPress={this.handleKeyPress }  name="artist-search" list="artist-name-list"  autocomplete="on" placeholder="artist or band..." />
				<datalist id="artist-name-list">
					{nameList}			

				</datalist>
			    </div>
					
 			</div>
 		)
 	},
 	_onChange: function(data) {

 		//console.log('on channge');
		
    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchWrap;