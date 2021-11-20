import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { VFC } from "react";
import { PrimaryButton } from "../button/PrimaryButton";

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    buttonText: string;
};

export const InputArea: VFC<Props> = (props) => {
    const { value, onChange, placeholder, onClick, buttonText } = props;
    return (
        <Flex align="center" justifyContent="center">
            <Input
                placeholder={placeholder}
                value={value}
                w="80%"
                size="md"
                p={3}
                onChange={onChange}
                _focus={{ boxShadow: "none" }}
            />
            <PrimaryButton onClick={onClick} disabled={!value}>
                {buttonText}
            </PrimaryButton>
        </Flex>
    );
};
