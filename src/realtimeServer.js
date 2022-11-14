import { Server } from "socket.io";

export default httpServer => {
    const io = new Server(httpServer);

    io.on("connection", socket => {

        console.log(socket.id);

    });

}