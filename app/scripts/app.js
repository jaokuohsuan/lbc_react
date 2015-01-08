/** @jsx React.DOM */

var React = window.React = require('react'),

    ArtistWrap = require("./components/ArtistWrap"),
    VideoWrap = require("./components/VideoWrap"),
    AlbumWrap = require("./components/AlbumWrap"),
    SearchWrap = require("./components/SearchWrap"),
    MusicAPIUtils = require('./utils/MusicAPIUtils'),
    AppStore = require('./stores/AppStore'),
    RounterStore = require('./stores/RounterStore'),
    mountNode = document.getElementById("app");


var MusicExampleData= require('./MusicExampleData'); //ecample Data

//youtube player js
var tag = document.createElement('script');
   
var firstScriptTag = document.getElementsByTagName('script')[0];
   
var player;



function onYouTubeIframeAPIReady() {
  player = new YT.Player('UtubePlayer', {
    height: '100%',
    width: '100%',
    //videoId: 'M7lc1UVf-VE',
    //wmode: 'transparent',
    playerVars: {
      "controls": 2, //change youtube controls bar 
      "autohide": 1, //auto hide contral bar
      "theme": "dark",
      "color": "white",
      "wmode": 'transparent',
      "rel": 0

    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  //to do list ,set to hight quality
  //player.setPlaybackQuality('hd720'); 
}

function onPlayerReady(event) {

  //event.target.playVideo();
}


function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //  setTimeout(stopVideo, 6000);
  //  done = true;
  // }
}

function stopVideo() {
  player.stopVideo();
}
//youtube player js end



React.initializeTouchEvents(true);


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
       // tag.src = "https://www.youtube.com/iframe_api";
       // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   
  },

  componentWillUnmount: function() {
     //RounterStore.removeChangeListener(this._onChange);

    
  },

 
  render: function(){
    return(
      <div className="ui page grid">
          <VideoWrap />  
          <SearchWrap />
          <ArtistWrap />
          <AlbumWrap />
              
      </div>
    );
  }

});


React.renderComponent(<LbcApp />, mountNode);

// <VideoWrap />
