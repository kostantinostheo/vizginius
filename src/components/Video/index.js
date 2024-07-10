import React from "react";
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#111827]">
        <h1 className="text-white text-left pl-5 text-[30px] font-bold">Demo Video</h1>
        <ReactPlayer url='https://www.youtube.com/watch?v=0ZyxnmdLHcI' />
    </div>

  );
}

export default Video;