/** @jsx React.DOM */

var React = window.React = require('react'),

    ArtistWrap = require("./components/ArtistWrap"),
    VideoWrap = require("./components/VideoWrap"),
    AlbumWrap = require("./components/AlbumWrap"),
    SearchWrap = require("./components/SearchWrap"),
    MusicAPIUtils = require('./utils/MusicAPIUtils'),
    AppStore = require('./stores/AppStore'),
    mountNode = document.getElementById("app");

var MusicExampleData= require('./MusicExampleData'); //ecample Data


// ArtistAPIUtils.getAlbums('Stars');  //first run
// ArtistAPIUtils.getTracks('663dc26a-9fec-4123-8911-678f50ab9a7d');  

MusicExampleData.init(); // put example data into localstorage


MusicAPIUtils.getInitData(); //get init data from Utils


function getStateInit() {
  console.log("Example Data");
  return {
    artistAlbums: AppStore.getInitData()
  };
}

var LbcApp=React.createClass({

  getInitialState: function() {
    // init satate
    return getStateInit();
  },

  componentDidMount: function() {
   
  },
  componentWillUnmount: function() {
    
  },


  render: function(){
    return(
      <div>
        <SearchWrap />
        <ArtistWrap artistAlbums={this.state.artistAlbums} />
        <AlbumWrap artistAlbums={this.state.artistAlbums} />
        <VideoWrap />
      </div>
    );
  }

});


React.renderComponent(<LbcApp />, mountNode);


