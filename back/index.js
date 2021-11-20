const express = require("express");
const portNumber = 3000; // ポート番号
const app = express(); // Expressを利用したサーバ
const server = require("http").createServer(app); // Expressを用いないserverも必要

// 人数カウント
let userCount = 0;

app.get("/", (req, res) => {
    res.status(200).send("OK!");
});

// サーバーオブジェクトsocketioを作成する
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        // corsモジュールでは上手くCORSできないため、Server作成時の引数にCORSオプションを追加する
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    // ブラウザから接続されたときの処理
    console.log("a user connected");
    userCount++;
    console.log(`${userCount}名が入室中…`);

    // ブラウザが切断したときの処理
    socket.on("disconnect", () => {
        console.log("user disconnected");
        userCount--;
        console.log(`${userCount}名が入室中…`);
    });

    socket.on("chat message", (msg) => {
        io.emit("chat", msg);
    });
});

// serverをPORT3000で待ち受ける。app.listenだとNG。
server.listen(portNumber);
console.log(`Web server is on. PortNumber is ${portNumber}.`);
