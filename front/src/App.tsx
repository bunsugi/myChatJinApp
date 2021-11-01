import React from "react";
import "./App.css";
// socket.io-clientをインポートする
import { io } from "socket.io-client";

function App() {
    // Webサーバと別ドメインの場合には引数が必要
    const socket = io("http://localhost:3000");
    socket.on("connect", () => {
        console.log(`socket.connectを出力`);
        console.log(socket.connect());
    });

    return (
        <div className="App">
            <h1>画面サーバからの返却</h1>
        </div>
    );
}

export default App;
