import React from "react";
import YouTube from "react-youtube";

class Documentary extends React.Component {
  render() {
    const options = {
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <div className="documentary-container">
        <h1 className="documentary-heading">Watch This Documentary</h1>
        <YouTube
          videoId="2C-YC_f4Oag"
          opts={options}
          onReady={this._onReady}
          className="video-player"
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo(); // Ensures video doesn't autoplay immediately
  }
}

export default Documentary;
