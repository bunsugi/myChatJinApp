import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { VFC } from "react";

type Props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const InputArea: VFC<Props> = (props) => {
    const { text, onChange, onClick } = props;
    return (
        
        <Flex align="center">
            <Input
                variant="flushed"
                placeholder="なにか文字を入力してください"
                value={text}
                w="80%"
                size="md"
                p={3}
                border="none"
                onChange={onChange}
            />
            <Button
                m={2}
                bg="orange.500"
                color="white"
                _hover={{ opacity: 0.7 }}
                onClick={onClick}
                disabled={!text}
            >
                送る
            </Button>
        </Flex>
    );
};
