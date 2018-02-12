# Streaming Video | Text Chat
Streaming video from the Tessel 2 with a USB camera. Integrates Socket.io web chat interface.

### The Stack
* NodeJS
* Express
* Socket.io: "^1.4.8", necessary for Tessel-av integration
* Socket.io-client
* Tessel-av

### The Hardware
* Tessel 2
* USB Camera

#### To Run Locally on your own Tessel 2
* Clone down this repo  
* `cd socket-io-chat`
* `npm install`
* `t2 run index.js`
* `http://192.168.0.42:3000/`, Note: the IP is unique to your device. Edit as necessary.
* See streaming video and chat!

![Demo](https://github.com/podoglyph/streaming-video-text-chat/blob/master/demo.gif)

## License

This project is licensed under the MIT License.
