import io from "socket.io-client"

let socket;

export const init = () =>{
    console.log("sunucuya baglaniliyor");

    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Sunucuya basariyla baglanildi"));
};

export const send = (color) =>{
    socket.emit("newColor", color);
};

export const subscribe = (cb) => {
    socket.on("receive", (color)=>{
        console.log(color);
        cb(color);
    })
}