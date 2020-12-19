const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const index = require("./routes/index");

app.use(index);
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const server = http.createServer(app);

const options = {
  cors: true,
  origins: ["http://127.0.0.1:5000"],
};
const io = socketIo(server, options);

const activeUsers = new Set();

io.on("connection", (socket) => {
  console.log("new client connected");

  socket.on("new user", (data) => {
    socket.userId = data;
    activeUsers.add(data);
    io.emit("new user", [...activeUsers]);
  });
  socket.on("disconnect", () => {
    activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});

server.listen(port, () => console.log(`listening on port ${port}`));
