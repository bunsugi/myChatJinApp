import { VFC } from "react";
import { InputArea } from "../molecules/InputArea";

type Props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const NameInputArea: VFC<Props> = (props) => {
    const { text, onChange, onClick } = props;
    return (
        <InputArea
            value={text}
            onChange={onChange}
            onClick={onClick}
            placeholder="名前を入力してください"
            buttonText="登録"
        />
    );
};
