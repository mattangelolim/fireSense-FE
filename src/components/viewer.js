// import React, { useEffect, useRef } from "react";
// import io from "socket.io-client";

// const Viewer = ({streams}) => {
//   const remoteVideoRef = useRef();
//   const socketRef = useRef();

//   useEffect(() => {
//     const initWebRTC = () => {
//       const peerConnection = new RTCPeerConnection();

//       peerConnection.ontrack = (event) => {
//         remoteVideoRef.current.srcObject = event.streams[0];
//       };

//       peerConnection.createOffer()
//         .then(offer => peerConnection.setLocalDescription(offer))
//         .then(() => {
//           socketRef.current.emit('viewer-offer', peerConnection.localDescription);
//         });

//       socketRef.current.on('broadcaster-answer', answer => {
//         peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
//       });

//       socketRef.current.on('ice-candidate', iceCandidate => {
//         peerConnection.addIceCandidate(new RTCIceCandidate(iceCandidate));
//       });
//     };

//     socketRef.current = io("http://localhost:9001");

//     socketRef.current.emit("viewer-join", "Viewer connected!");

//     socketRef.current.on('broadcaster-offer', offer => {
//       initWebRTC();
//       socketRef.current.emit('viewer-answer', offer);
//     });

//     return () => {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, [streams]);

//   return (
//     <div>
//       <h1>Viewer</h1>
//       <video id="remoteVideo" ref={remoteVideoRef} autoPlay></video>
//     </div>
//   );
// };

// export default Viewer;
