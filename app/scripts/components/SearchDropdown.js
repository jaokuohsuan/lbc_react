/**
 * @jsx React.DOM
 */
var  React = require('react/addons');
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
 		var val=this.refs.searchDropInput.getDOMNode().value;
 		if (val.length >= 4) {
 			SearchActionCreators.searchArtistName(val);
 		}
 		this.setState({
 			value: val
 		})
 		
 		
 	},



 	getInitialState: function() {
    		return {
    			artistNameList: null,
    			value: this.props.value
    		};
  	},

  	componentDidMount: function() {
  		SearchStore.addChangeListener(this._onChange);

  	},
  	componentWillUnmount: function() {
  		SearchStore.removeChangeListener(this._onChange);

  	},


 	render: function(){
 		var cx = React.addons.classSet;

 		var nameList=[];
 		var nameMenuList=[];
 	
 		
 		 var placeHoldClasses = cx({
		    'text': true,
		    'default': this.props.placeholder
		  });


 		 var menuClasses=cx({
 		 	'menu transition':true		 	

 		 });

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
				<input type="text" className="search"  tabIndex="0" ref="searchDropInput" onChange={this.handleChange}   value={this.state.value}  />
				<div className={placeHoldClasses} >{this.props.placeholder}</div>
				<div className={menuClasses} tabIndex="-1">
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