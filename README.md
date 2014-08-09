# simple-signaling-server

This is a dead simple implementation of a signaling server for WebRTC using socket.io.
It handles *offers*, *answers* and *candidates*. In the diagram below you can see a
more details about the interaction between WebRTC applications and the signaling server.

![RTCPeerConnection diagram](https://raw.githubusercontent.com/satanas/simple-signaling-server/master/doc/RTCPeerConnection-diagram.png)

## Installing

```npm install simple-signaling-server```

## Running the server

```node server.js [port]```

## Using on the client side

To use the signaling server on the client side you can use something like:

```javascript
<script src="https://cdn.socket.io/socket.io-1.0.6.js"></script>

socket.on('new', function(data) {
  // Create the offer and the send it to the other peers
  socket.emit(offer);
});

socket.on('offer', function(data) {
  // Set remote description and send the answer
  socket.emit(answer);
});

socket.on('answer', function(data) {
  // Set remote description
});

socket.on('candidate', function(data) {
  // Add ICE candidate to RTCPeerConnection
});
```

## License

MIT. Copyright (c) Wil Alvarez
