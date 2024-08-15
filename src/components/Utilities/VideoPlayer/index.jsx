"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = (props) => {
  const { videoId } = props;

  const options = {
    width: "300px",
    height: "200px",
  };

  const [isOpen, setIsOpen] = useState(true);
  const handlerCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  }
  const Player = () => {
    return (
        <div className="fixed bottom-0 right-0">
            <button className="bg-red-500 text-white px-3 float-right" onClick={handlerCloseButton}>X</button>
          <YouTube
            videoId={videoId}
            onReady={(event) => event.target.pauseVideo()}
            opts={options} 
          />
        </div>
      );
  }
//   jika isOpen true munculkan player jika tidak null
  return isOpen ? <Player /> : null;
};
export default VideoPlayer;
