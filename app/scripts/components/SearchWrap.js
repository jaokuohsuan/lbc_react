/**
 * @jsx React.DOM
 */
 var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");


 var SearchWrap=React.createClass({



 	handleKeyPress: function(evt){
 		console.log("evt:"+evt.keyCode);
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

 		if(this.state.artistNameList!= null){

	 		this.state.artistNameList.map(function(artistName){
	 			nameList.push(
	 				<option value={artistName}>{artistName}</option>
	 			);

	 		});
	 	}


 		return(

 			<div className="search-wrap" onKeyPress={this.handleKeyPress}>
 				<form  className="artist-search" >
				<input type="text" value={this.props.searchText} ref="searchInput" onChange={this.handleChange}  name="artist-search" list="artist-name-list"  autocomplete="on" placeholder="artist or band..." />
				<datalist id="artist-name-list">
					{nameList}
					

				</datalist>
			    </form>
					}
 			</div>
 		)
 	},
 	_onChange: function(data) {

 		console.log('on channge');
		
    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchWrap;