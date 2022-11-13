// const socket = io()

// function checkSocketStatus() {
//   console.log("Estado del socket: " + socket.connected);
// }

// socket.on('connect', () => {
//   console.log('El socket' + socket.id + ' se a conectado');
//   checkSocketStatus();
// });

// socket.on('connect_error', () => {
//   console.log("I cant reconnect")
// })

// socket.on('disconnect', () => {
//   console.log('El socket' + socket.id + ' se a desconectado');
//   checkSocketStatus();
// });

// socket.io.on('reconnect_attempt', () => {
//   console.log("Try reconnect")
// })

// socket.io.on('reconnect', () => {
//   console.log("I'm ready, reconnected")
// })

// socket.on("welcome", (data) => {
//   console.log(data)
//   text.textContent = data
// })

// const emit_to_server = document.querySelector("#emit_to_server")
// emit_to_server.addEventListener('click', () => {
//   socket.emit('server', "hola desde el frontend")
// })

// socket.on('name_emit', data => {
//   console.log(data)
// })

// const emitToLast = document.querySelector('#hello-last')
// emitToLast.addEventListener('click', () => {
//   socket.emit('last', "hola :D")
// })

// socket.on('saludo', (message) => {
//   emitToLast.textContent = message
// })

// // on - once - off
// socket.on("on", () => {
//   console.log("se emite varias veces")
// })

// socket.once("once", () => {
//   console.log("se emite una sola vez")
// })

// const listener = () => {
//   console.log("se apaga el evento")
// }

// socket.on('off', listener)

// setTimeout(() => {
//   socket.off('off', listener)
// }, 2500)

// ===================
// const drawCircle = position => {
//   circle.style.top = position.top
//   circle.style.left = position.left
// }
// const drag = e => {
//   // const clientX = e.clientX
//   // const clientY = e.clientY

//   const position = {
//     top: e.clientY + "px",
//     left: e.clientX + "px"
//   }
//   drawCircle(position)
//   socket.emit("circle position", position)
//   // circle.style.top = clientY + "px"
//   // circle.style.left = clientX + "px"
// }

// const circle = document.querySelector('#circle')
// circle.addEventListener('mousedown', e => {
//   document.addEventListener('mousemove', drag)
// })
// circle.addEventListener('mouseup', e => {
//   document.removeEventListener('mousemove', drag)
// })
// socket.on('move circle', position => {
//   // circle.style.top = position.top
//   // circle.style.left = position.left
//   drawCircle(position)
// })

// // ===============0
// // salas

// const connectRoom1 = document.querySelector("#connectRoom1")
// const connectRoom2 = document.querySelector("#connectRoom2")
// const connectRoom3 = document.querySelector("#connectRoom3")

// connectRoom1.addEventListener('click', () => {
//   socket.emit('connect to room', 'room1')
// })

// connectRoom2.addEventListener('click', () => {
//   socket.emit('connect to room', 'room2')
// })

// connectRoom3.addEventListener('click', () => {
//   socket.emit('connect to room', 'room3')
// })

// const sendMessage = document.querySelector("#sendMessage")

// sendMessage.addEventListener('click', () => {
//   const message = prompt("Mensaje")
//   socket.emit('message room', message)
// })

// // Recibir el evento y el mensaje
// socket.on('send message', data => {
//   const {room, message} = data
//   const li = document.createElement("li")
//   li.textContent = message

//   document.querySelector(`#${room}`).append(li)
// })


const user = prompt("Escribe tu usuario")
const profes = [
  "Juan",
  "GNDX",
  "RETAX"
]

let socketNamespace, group;

const chat = document.querySelector('#chat')
const namespace = document.querySelector("#namespace")

if (profes.includes(user)) {
  socketNamespace = io("/teach")
}