/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var SearchStore= require('../stores/SearchStore');
var ArtistServerActionCreators = require("../actions/ArtistServerActionCreators");
var SearchActionCreators = require("../actions/SearchActionCreators");

// menuOption components
var menuOption=React.createClass({

	handleMenuClick: function(evt){
 		this.props.handleMenuClick(evt,this.props.artistName,this.props.index);
 	},

	render: function(){

		//for class
		var cx = React.addons.classSet;
		var menuOptionClass=cx({
 		 	'item': true,
 		 	'selected': this.props.selected
 		 });


		return(

			<div className={menuOptionClass}  key={this.props.artistName} onClick={this.handleMenuClick} >{this.props.artistName}</div>
		)

	}

});
var SearchDropdown=React.createClass({

	handleMenuClick: function(evt,artistName,index){
 		
 		this.setState({
 			showMenu: false,
 			holderContent: artistName,
 			optionIndex: index,
 			value: ""
 		}); 
 		SearchActionCreators.addArtistFromSearch(this.state.artistNameList[index]);		
 		
 	},


 	handleKeyUp: function(evt){
 		
 		// evt.preventDefault();
 	},
 	handleKeyDown: function(evt){



 		this.setState({maxOptionsNumer:this.state.artistNameList.length});





 		switch (evt.keyCode){

 			case 13:
 				

 				this.setState({
		 			showMenu: false,
		 			holderContent: this.state.artistNameList[this.state.optionIndex],
		 			value: ""
		 		});
		 		SearchActionCreators.addArtistFromSearch(this.state.artistNameList[this.state.optionIndex]);		 

 				break;

 			case 38:
 				this.refs.menuList.getDOMNode().focus();
 				if(this.state.optionIndex>0){

	 				this.setState({
	 					optionIndex: this.state.optionIndex-1
	 				}); 
	 			}
 				break;

 			case 40:
 				this.refs.menuList.getDOMNode().focus(); 				

 				if(this.state.optionIndex < this.state.maxOptionsNumer-1){
 				

	 				this.setState({
	 					optionIndex: this.state.optionIndex+1
	 				}); 
	 			}

 				break;

 		};

 	},

 	

 	handleChange: function (evt) {
 
 		var val=evt.target.value;

 		if (val.length >= this.props.startSearchNum) {
 			SearchActionCreators.searchArtistName(val);
 		}

 		this.setState({
 			value: val,
 			holderContent: val
 		})
 		
 		
 	},

 	handleFocus: function(evt){
 		this.setState({
 			showMenu: true
 		});
 		
 	},

 	handleBlur: function(evt){

 	
 		
 		this.setState({
 			showMenu: false
 		});
 	},

 	getInitialState: function() {
    		return {
    			artistNameList: null,    			
    			value: this.props.value,
    			holderContent: null,
    			showMenu: false,
    			optionIndex: 0,
    			maxOptionsNumer: 0
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
 		var nameMenuList=[];
 		var maxOptionsNumer= this.state.artistNameList ? this.state.artistNameList.length : 0; 

 		var cx = React.addons.classSet; 	
 		
 		 var placeHoldClasses = cx({
		    'text': true,
		    'default': this.props.placeholder,
		    'filtered': (this.state.showMenu) && (this.state.value!="")
		  });


 		 var menuClasses=cx({
 		 	'menu transition':true	,
 		 	'visible': this.state.showMenu,
 		 	'hidden': !this.state.showMenu
 		 });

 		 var holderContent= this.state.holderContent!=null ? this.state.holderContent :this.props.placeholder;

 		
 		 

 		if(this.state.artistNameList!= null){

	 		this.state.artistNameList.map(function(artistName,index){
	 			// console.log('index,',index,"state.optionIndex",this.state.optionIndex);	 			
	 			nameList.push(
	 				<option value={artistName} key={artistName}>{artistName}</option>
	 			);
	 			nameMenuList.push(

	 				<menuOption handleMenuClick={this.handleMenuClick} key={artistName}  artistName={artistName} index={index} selected={this.state.optionIndex===index} />

	 			);


	 		}.bind(this));
	 	}


 		return(

 			
 			<div  className="ui search fluid dropdown selection search-dropdown" onBlur={this.handleBlur} onFocus={this.handleFocus}   onKeyDown={this.handleKeyDown}  onKeyUp={this.handleKeyUp} >
				
				<select>
					{nameList}
				</select>
				<i className="dropdown icon"></i>
				<input type="text" className="search"  tabIndex="0" ref="searchDropInput" onChange={this.handleChange}   value={this.state.value}  />
				<div className={placeHoldClasses}>{holderContent}</div>
				<div className={menuClasses} tabIndex="-1" ref="menuList">
					{nameMenuList}
				</div>
			
			</div>
					
 			
 		)
 	},
 	_onChange: function(data) {

 				
    	this.setState({artistNameList: data});
    }

 });

  module.exports=SearchDropdown;