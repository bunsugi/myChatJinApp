const express = require("express");
const portNumber = 3000; // ポート番号
const app = express(); // Expressを利用したサーバ
const server = require("http").createServer(app); // Expressを用いないserverも必要

// 別オリジンからのアクセスを許可する（１）
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("OK!");
});

// サーバーオブジェクトsocketioを作成する
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {                      // corsモジュールでは上手くCORSできないため、Server作成時の引数にオプションを追加する
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => { // ブラウザから接続されたときの処理
    console.log("a user connected");
    socket.on("disconnect", () => { // ブラウザが切断したときの処理
        console.log("user disconnected");
    });
    // socket.on("chat message", (msg) => {
    //     console.log("message: " + msg);
    //     io.emit("chat message", msg);
    // });
});

// serverをPORT3000で待ち受ける。app.listenだとNG。
server.listen(portNumber);
console.log(`Web server is on. PortNumber is ${portNumber}.`);
