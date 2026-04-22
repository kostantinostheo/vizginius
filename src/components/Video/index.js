import React from "react";
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#111827] gap-6 p-6">
      <h1 className="text-white text-[30px] font-bold">Demo Video</h1>
      <div className="w-full max-w-3xl aspect-video">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=0ZyxnmdLHcI'
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Video;
