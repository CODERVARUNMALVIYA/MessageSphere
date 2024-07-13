const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {

console.log( "A user connected" );

socket.on('mohit', msg => {
    socket.broadcast.to(msg.roomname).emit('varun',msg.message)
    

});
socket.on('join-room',roomname=>{
    socket.join(roomname)
})
});
// end of socket.io logic
 

module.exports = socketapi;