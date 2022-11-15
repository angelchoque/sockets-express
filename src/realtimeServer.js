import { Server } from "socket.io";

export default httpServer => {
    const io = new Server(httpServer);

    io.on("connection", socket => {
        const cookie = socket.handshake.headers.cookie
        const username = cookie.split("=").pop()
        socket.on("message", message => {

            io.emit("message", {
                user: username,
                message
            });
    
           })

    });

}