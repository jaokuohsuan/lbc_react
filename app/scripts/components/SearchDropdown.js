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
 		this.props.handleMenuClick(evt,this.props.artists.artistName,this.props.index);
 	},

	render: function(){

		//for class
		var cx = React.addons.classSet;
		var menuOptionClass=cx({
 		 	'item': true,
 		 	'selected': this.props.selected
 		 });

	

		return(

			<div className={menuOptionClass}  key={this.props.artists.artistMbid} onClick={this.handleMenuClick} >



				{this.props.artists.artistName}
				
			</div>
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


 		this.props.onMenuClick(evt,this.state.optionsList[index]);  //to parent
 		// SearchActionCreators.addArtistFromSearch(this.state.optionsList[index]);		
 		
 	},


 	handleKeyUp: function(evt){
 		
 		// evt.preventDefault();
 	},
 	handleKeyDown: function(evt){


 		switch (evt.keyCode){

 			case 13:
 				

 				this.setState({
		 			showMenu: false,
		 			holderContent: this.state.optionsList[this.state.optionIndex].artistName,
		 			value: ""
		 		});

		 		this.handleMenuClick(evt,this.state.optionsList[this.state.optionIndex].artistName,this.state.optionIndex);
		 		// SearchActionCreators.addArtistFromSearch(this.state.optionsList[this.state.optionIndex]);		 

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

 				 // console.log("optionIndex=",this.state.optionIndex,"maxOptionsNumer=" ,this.state.maxOptionsNumer);			

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
 			holderContent: ""
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
    			optionsList: null,    			
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
 		var maxOptionsNumer= this.state.optionsList ? this.state.optionsList.length : 0; 

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

 		
 		 
 		console.log("g=",this.state.optionsList);

 		if(this.state.optionsList!= null){

	 		this.state.optionsList.map(function(artists,index){
	 			 			
	 			nameList.push(
	 				<option value={artists.artistsName} key={artists.artistsName}>{artists.artistsName}</option>
	 			);
	 			nameMenuList.push(

	 				<menuOption handleMenuClick={this.handleMenuClick} key={artists.artistsName}  artists={artists} index={index} selected={this.state.optionIndex===index}  />

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

 				
    	this.setState({
    		optionsList: data,
    		maxOptionsNumer:data.length,
    		optionIndex: 0 //reset index

    	});
    }

 });

  module.exports=SearchDropdown;