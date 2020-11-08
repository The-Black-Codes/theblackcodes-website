import React from 'react';

const BackgroundVideo = () => {
  const videoSource = "https://res.cloudinary.com/the-black-codes/video/upload/ar_3.62,c_crop/v1588356360/video/TheBlackCodesHistory_y7hb5i.mp4";
  return (
    <div id="background-video">
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1>About The Black Codes</h1>
        <hr />
        <h3>The Then and The Now.</h3>
      </div>
    </div>
  );
}

export default BackgroundVideo;