import React from 'react';

// const styles = {
//   Container: {
//     position: 'relative',
//     minHeight: '300px',
//     maxHeight: '800px',
//     overflow: 'hidden',
//     marginBottom: '500px',
//   },

//   /* Style the video: 100% width and height to cover the entire window */
//   Video: {
//     width: '100%',
//     height: '100%'
//   },
  
//   /* Add some content at the bottom of the video/page */
//   Content: {
//     position: 'absolute',
//     top: 0,
//     color: '#f1f1f1',
//     backgroundColor: rgba(0, 0, 0, 0.3),
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 0
//   },

//   SubContent: {
//     textAlign: 'center',
//     padding: '10px',
//   },

//   SubContent p {
//     color: #eeeeeead;
//     font-size: 1.3rem;
//   }

//   SubContent button {
//       font-weight: bold;
//       margin-top: 30px;
//       color: #f1f1f1;
//       border: #f1f1f1 1px solid;
//       padding: 10px 5px;
//       background-color: hsla(0, 0%, 0%, 0);
//       font-size: 1.25rem;
//       border-radius: 5px;
//   }
//   .SubContent button:hover {
//       background-color: #f1f1f1;
//       color: #000000c0;
//   }

//   .SubContent img {
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     display: block;
//     margin: 15px auto;
//     border: #f1f1f1 1px solid;
//   }
// }

const BackgroundVideo = () => {
  const videoSource = "https://www.youtube.com/watch?v=aAUXdd-DAh0";
  return (
    <div className="container">
      <video src="" autoPlay="autopaly" loop="loop" muted>
        <source src={videoSource}/>
        Your browser does not support the videotag.
      </video>
    </div>
  );
}

export default BackgroundVideo;