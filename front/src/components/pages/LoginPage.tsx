import { useState } from "react";
import { useHistory } from "react-router";
import { NameInputArea } from "../organisms/NameInputArea";

export const LoginPage = () => {
    // 名前
    const [name, setName] = useState("");
    const history = useHistory();

    // 名前エリアの文字が変更されたときの処理
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    // 名前が登録されたときの処理
    const onClickJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        history.push("/main", { name: name });
    };

    return (
        <>
            <NameInputArea onChange={onChangeName} onClick={onClickJoin} value={name} />
        </>
    );
};
