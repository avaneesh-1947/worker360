import express from "express";
import "./DB/config.js";
import cors from "cors";
import dotenv from "dotenv";
import clientReg from "./api/userSignup.api.js"; 
import workerReg from "./api/wrokerReg.api.js";
import login from "./api/login.api.js";
import signup from "./api/signup.api.js";
import getWorker from "./api/getWorker.api.js";
import http from "http";
import { Server } from "socket.io";




dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

app.use('/userReg', clientReg);
app.use('/workerReg', workerReg);
app.use('/login', login);
app.use('/signup', signup);
app.use('/getWorker', getWorker); // <-- Add this line

const PORT =  3333;

const server = http.createServer(app);


// create socket io server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// socket means user connected to the server
io.on("connection",(socket) =>{
   console.log("a user connected" , socket.id);
  
   // ek room banaya fhir user join karega
   socket.on("join", (roomId) =>{
    socket.join(roomId)
    console.log(`user joined room ${roomId}`)
   })
 
   // jab user leave karega toh yeh room se nikal jayega
   socket.on("leave", (roomId) =>{
    socket.leave(roomId)
    console.log(`user left room ${roomId}`)
   })

   // jab user message send karega toh yeh message server se send karega
   socket.on("send-message", ({data, roomId, senderId }) =>{
    socket.to(roomId).emit("receive-message", {data, senderId})
    console.log(`message sent to room ${roomId}`)
   })



   // when user disconnect from the server
   socket.on("disconnect",() =>{
    console.log("a user disconnected" , socket.id)
   })
   
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});