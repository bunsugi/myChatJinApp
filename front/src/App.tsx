import React, { useState, memo, useEffect } from "react";
import "./App.css";
// socket.io-clientをインポートする
import { io } from "socket.io-client";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";

// socketを接続する。Webサーバと別ドメインの場合には引数が必要。
const socket = io("http://localhost:3000");
socket.on("connect", () => {
    console.log(`socket.connectの中身：`);
    // console.log(socket.connect());
    console.log(socket);
});

function App() {
    // メッセージリストを定義
    const [messageList, setMessageList] = useState<string[]>([]);
    // メッセージを定義
    const [message, setMessage] = useState("");

    // サーバから"chat message"イベントが送信されたときの処理
    // messageListに送信されたメッセージを追加する
    // ここがめっちゃ実行されている。なのでuseEffectを入れた。
    useEffect(() => {
        socket.on("chat message", (msg) => {
            setMessageList([...messageList, msg]); // 元のmessageListにmsgを追加してみる
            console.log("setMessageList"+msg);
            console.log(messageList)
        });
    });

    // Inputの文字が変更されたときの処理
    // messageに値を格納する
    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("setMessage");
        setMessage(e.target.value);
    };

    // ボタンを押したときの処理
    const onClickSend = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log("onClickSend");
        e.preventDefault();
        socket.emit("chat message", message);
        setMessage("");
    };
    return (
        <ChakraProvider>
            <>
                <ul>
                    {messageList.map((data) => {
                        // indexを消してみる
                        return <li key={data}>{data}</li>;
                    })}
                </ul>
                <Input
                    placeholder="なにか文字を入力してください"
                    value={message}
                    onChange={onChangeMessage}
                />
                <Button onClick={onClickSend}>送る</Button>
            </>
        </ChakraProvider>
    );
}

export default App;
