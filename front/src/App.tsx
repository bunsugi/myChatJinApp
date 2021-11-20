import React, { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { ChakraProvider } from "@chakra-ui/react";
import { MessageListArea } from "./components/organisms/messageListArea";
import { InputArea } from "./components/molecules/InputArea";

// socketを接続する。Webサーバと別ドメインの場合には引数が必要。
const socket = io("http://localhost:3000");
socket.on("connect", () => {
    console.log(`接続しました。socket.connectの中身↓`);
    console.log(socket.connect());
});

function App() {
    // メッセージリスト（全員が送ったメッセージの一覧）
    const [messageList, setMessageList] = useState<string[]>([]);
    // インプットエリアに入力するメッセージ
    const [message, setMessage] = useState("");

    // サーバから"chat"イベントが送信されたときの処理
    // （messageListに、Webサーバから受け取ったメッセージを追加する。）

    useEffect(() => {
        socket.on("chat", (msg) => {
            setMessageList((messageList) => [...messageList, msg]);
        });
    }, []);

    // インプットエリアの文字が変更されたときの処理。
    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    // 「送る」ボタンを押したときの処理。サーバにmessageを送信する。
    const onClickSend = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        socket.emit("chat message", message);
        setMessage("");
    };

    return (
        <ChakraProvider>
            <>
                <MessageListArea messageList={messageList} />

                <InputArea
                    text={message}
                    onChange={onChangeMessage}
                    onClick={onClickSend}
                />
            </>
        </ChakraProvider>
    );
}

export default App;
