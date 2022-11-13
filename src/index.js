import express from "express";
import { createServer } from 'http';
import path from "path";
import { Server } from "socket.io";
import * as url from 'url';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// const socketsOnline = []

io.on('connection', (socket) => {
  // socketsOnline.push(socket.id)
  // console.log(io.engine.clientsCount)
  // console.log(socket.id);

  // socket.on('disconnect', () => {
  //   console.log("Socket " + socket.id + "is disconnected")
  //   // socketsOnline = [...socketsOnline.filter(i => i !== socket.id)]
  // })

  // socket.conn.once('upgrade', () => {
  //   console.log("HTTP Long-Polling to " + socket.conn.transport.name)
  // })

  // // Emisión básica
  // socket.emit('welcome', "Ahora estas conectado")

  // socket.on('server', (data) => {
  //   console.log(data)
  // })

  // // emit to everyone

  // io.emit("name_emit", socket.id, ' is connected')

  // socket.on('last', (message) => {
  //   const lastSocket = socketsOnline.at(-1)
  //   io.to(lastSocket).emit("saludo", message)
  // })

  // // on - once - off

  // socket.emit('on', "Hola on")
  // socket.emit('on', "Hola on")
  // socket.emit('on', "Hola on")

  // socket.emit('once', "Hola once")
  // socket.emit('once', "Hola once")

  // socket.emit('off', "hola off")
  // setTimeout(() => {
  //   socket.emit('off', "hola off 2")
  // }, 3000)

  // ========================

  // socket.on("circle position", position => {
  //   // for all 
  //   // io.emit('move circle', position)
  //   // broadcast - all without user emit
  //   socket.broadcast.emit('move circle', position)
  // })


  // // SALAS =================

  // socket.connectedRoom = ""
  // socket.on('connect to room', room => {
  //   // Por defecto estamos conectado a una sala que es la global

  //   socket.leave(socket.connectedRoom)
  //   switch (room) {
  //     case "room1":
  //       socket.join('room1')
  //       socket.connectedRoom = "room1"
  //       break;
        
  //     case "room2":
  //       socket.join('room2')
  //       socket.connectedRoom = "room2"
  //       break;
        
  //     case "room3":
  //       socket.join('room3')
  //       socket.connectedRoom = "room3"
  //       break;
      
  //     default:
  //       break;
  //   }
  // })

  // socket.on('message room', message => {
  //   // Sala a la que esta conectada
  //   const room = socket.connectedRoom
  //   // enviar a una sala seleccionada
  //   io.to(room).emit('send message',{message, room})
  // })

  // ===========0
  // NAMESPACES

  

});

httpServer.listen(3000);