/** @jsx React.DOM */

var ArtistWrap = require("./components/ArtistWrap"),
    VideoWrap = require("./components/VideoWrap"),
    AlbumWrap = require("./components/AlbumWrap"),
    SearchWrap = require("./components/SearchWrap"),
    MusicAPIUtils = require('./utils/MusicAPIUtils'),
    AppStore = require('./stores/AppStore'),
    RounterStore = require('./stores/RounterStore'),
    mountNode = document.getElementById("app");


// 這行 production 時可拿掉
window.React = React; // export for http://fb.me/react-devtools

var MusicExampleData= require('./MusicExampleData'); //ecample Data


// ArtistAPIUtils.getAlbums('Stars');  //first run
// ArtistAPIUtils.getTracks('663dc26a-9fec-4123-8911-678f50ab9a7d');  

MusicExampleData.init(); // put example data into localstorage
MusicAPIUtils.getInitData(); //get init data from Utils


//try to get url for router to init state

function getRountingState(){

  

}



var LbcApp=React.createClass({

  _onChange: function(data){

  },


  getInitialState: function() {

      //return getStateInit();
      return {}


  },


  componentDidMount: function() {

      //RounterStore.addChangeListener(this._onChange);

   
  },

  componentWillUnmount: function() {
     //RounterStore.removeChangeListener(this._onChange);

    
  },

 
  render: function(){
    return(
      <div>
        <SearchWrap />
        <ArtistWrap  />
        <AlbumWrap  />
        <VideoWrap />
      </div>
    );
  }

});


React.render(<LbcApp />, mountNode);

