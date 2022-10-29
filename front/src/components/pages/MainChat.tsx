import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { MessageContent } from "../../types/messageContent";
import { MessageListArea } from "../organisms/messageListArea";
import { MessageInputArea } from "../organisms/MessageInputArea";
import { useLocation } from "react-router";

type LoginState = {
    name: string;
};

// socketを接続する。Webサーバと別ドメインの場合には引数が必要。
const socket = io("http://localhost:3000");
socket.on("connect", () => {
    console.log(`接続しました。socket.connectの中身↓`);
    console.log(socket.connect());
});

export const MainChat = () => {
    // -----State定義----------------------------
    // メッセージリスト（全員が送ったメッセージの一覧）
    const [messageList, setMessageList] = useState<MessageContent[]>([]);

    // インプットエリアに入力するメッセージ
    const [message, setMessage] = useState("");
    const { state } = useLocation<LoginState>();
    const { name } = state;

    //------------------------------------------
    // サーバから"chat"イベントが送信されたときの処理   
    // （messageListに、Webサーバから受け取ったメッセージを追加する。）
    useEffect(() => {
        socket.on("chat", (messageContent) => {
            setMessageList((messageList) => [...messageList, messageContent]);
        });
    }, []);

    // インプットエリアの文字が変更されたときの処理
    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    // 「送る」ボタンを押したときの処理。サーバにmessageを送信する。
    //  messageContentオブジェクト（中身は名前/メッセージ/発言時刻）
    const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const date = new Date();
        const messageContent: MessageContent = {
            name: name,
            message: message,
            postat: date.toLocaleString("ja"),
        };

        socket.emit("chat message", messageContent);
        setMessage("");
    };

    return (
        <>
            <MessageListArea messageList={messageList} />
            <MessageInputArea text={message} onChange={onChangeMessage} onClick={onClickSend} />
        </>
    );
};
