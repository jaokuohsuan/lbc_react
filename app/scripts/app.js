/** @jsx React.DOM */

var React = window.React = require('react'),
    Timer = require("./components/Timer"),
    ArtistWrap = require("./components/ArtistWrap"),
    VideoWrap = require("./components/VideoWrap"),
    AlbumWrap = require("./components/AlbumWrap"),
    SearchWrap = require("./components/SearchWrap"),
    AppActions = require("./actions/AppActions"),
    ArtistAPIUtils = require('./utils/ArtistAPIUtils'),
    mountNode = document.getElementById("app");


ArtistAPIUtils.getAlbums('Stars');  //first run

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Timer />
      </div>
    );
  }
});


var ARTISTALBUMS=[
  {
    artistName: 'Stars',
    artistImage: "http://userserve-ak.last.fm/serve/126/132927.jpg",
    albumList: [
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267895.png", albumName: "Set Yourself on Fire"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/48195537.png",albumName: "The Five Ghosts"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/84741451.png",albumName: "The North"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267899.png",albumName: "In Our Bedroom After the War"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/83357751.png",albumName: "Heart"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86272985.jpg",albumName: "Do You Trust Your Friends?"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/81470979.jpg",albumName: "Nightsongs"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/64466735.jpg",albumName: "The Bedroom Demos"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273099.jpg",albumName: "The Comeback EP"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273071.jpg",albumName: "A Lot of Little Lies for the Sake of One Big Truth"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273103.jpg",albumName: "Dead Child Stars"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/39574519.jpg",albumName: "Your Ex-Lover Is Dead"},
      {albumCover: "http://images.amazon.com/images/P/B00009L822.01._SCMZZZZZZZ_.jpg",albumName: "Elevator Love Letter"},
      {albumCover: "http://images.amazon.com/images/P/B000A1OFTQ.01._SCMZZZZZZZ_.jpg",albumName: "Ageless Beauty"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/7198433.jpg",albumName: "Morning Becomes Eclectic"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/61231285.jpg",albumName: "It's Alchemy!"}
    ]
  },
  {
    artistName: 'Muse',
    artistImage: "http://userserve-ak.last.fm/serve/126/35147389.jpg",
    albumList: [
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267895.png", albumName: "Set Yourself on Fire"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/48195537.png",albumName: "The Five Ghosts"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/84741451.png",albumName: "The North"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267899.png",albumName: "In Our Bedroom After the War"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/83357751.png",albumName: "Heart"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86272985.jpg",albumName: "Do You Trust Your Friends?"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/81470979.jpg",albumName: "Nightsongs"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/64466735.jpg",albumName: "The Bedroom Demos"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273099.jpg",albumName: "The Comeback EP"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273071.jpg",albumName: "A Lot of Little Lies for the Sake of One Big Truth"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273103.jpg",albumName: "Dead Child Stars"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/39574519.jpg",albumName: "Your Ex-Lover Is Dead"},
      {albumCover: "http://images.amazon.com/images/P/B00009L822.01._SCMZZZZZZZ_.jpg",albumName: "Elevator Love Letter"},
      {albumCover: "http://images.amazon.com/images/P/B000A1OFTQ.01._SCMZZZZZZZ_.jpg",albumName: "Ageless Beauty"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/7198433.jpg",albumName: "Morning Becomes Eclectic"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/61231285.jpg",albumName: "It's Alchemy!"}
    ]
  },
  {
    artistName: 'Garbage',
    artistImage: "http://userserve-ak.last.fm/serve/126/81384615.png",
    albumList: [
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267895.png", albumName: "Set Yourself on Fire"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/48195537.png",albumName: "The Five Ghosts"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/84741451.png",albumName: "The North"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/62267899.png",albumName: "In Our Bedroom After the War"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/83357751.png",albumName: "Heart"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86272985.jpg",albumName: "Do You Trust Your Friends?"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/81470979.jpg",albumName: "Nightsongs"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/64466735.jpg",albumName: "The Bedroom Demos"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273099.jpg",albumName: "The Comeback EP"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273071.jpg",albumName: "A Lot of Little Lies for the Sake of One Big Truth"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/86273103.jpg",albumName: "Dead Child Stars"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/39574519.jpg",albumName: "Your Ex-Lover Is Dead"},
      {albumCover: "http://images.amazon.com/images/P/B00009L822.01._SCMZZZZZZZ_.jpg",albumName: "Elevator Love Letter"},
      {albumCover: "http://images.amazon.com/images/P/B000A1OFTQ.01._SCMZZZZZZZ_.jpg",albumName: "Ageless Beauty"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/7198433.jpg",albumName: "Morning Becomes Eclectic"},
      {albumCover: "http://userserve-ak.last.fm/serve/300x300/61231285.jpg",albumName: "It's Alchemy!"}
    ]
  }  


];




var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];



var LbcApp=React.createClass({

  render: function(){
    return(
      <div>
        <SearchWrap />
        <ArtistWrap artistAlbums={this.props.artistAlbums} />
        <AlbumWrap artistAlbums={this.props.artistAlbums} />
        <VideoWrap />
      </div>
    );
  }

});


// React.renderComponent(<TodoApp />, mountNode);
React.renderComponent(<LbcApp artistAlbums={ARTISTALBUMS} />, mountNode);

