import React from 'react';
import swfobject from 'swfobject';

export default React.createClass({
  componentDidMount() {
    var mediaPlayerPath = "/assets/MediaPlayback.swf";
    var playerId = "flashContent";
    var width = 1280;
    var height = 720;
    var minFlashVersion = "10.3.0";
    var xiSwfUrlStr = "";
    var flashVariables = {
      src: "rtmp://10.250.11.26/live/pool",
      streamType: "live",
      autoPlay: "true",
      controlBarAutoHide: "true",
      controlBarPosition: "bottom"
    };
    var params = {
      quality: "best",
      bgcolor:"#000000",
      allowscriptaccess: "sameDomain",
      allowfullscreen: "true"
    };

    swfobject.embedSWF(
      mediaPlayerPath,
      playerId,
      width,
      height,
      minFlashVersion,
      xiSwfUrlStr,
      flashVariables,
      params
    );
  },

  render() {
    return (
      <div>
          <h2 className="page-header">Live</h2>
          <div id="flashContent"></div>
      </div>
    );
  }
});


