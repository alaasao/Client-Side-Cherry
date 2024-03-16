import React from 'react'

const VideoCover = () => {
  return (
    <div>
           <div className="w-screen h-screen">
        <video
          src="../assets/TIGGO_8_PRO.mp4"
          loop
          muted
          autoPlay
          className=" w-screen object-cover"
        ></video>
      </div>
    </div>
  )
}

export default VideoCover
