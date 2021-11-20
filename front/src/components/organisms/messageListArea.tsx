import { Box } from "@chakra-ui/layout";
import { VFC } from "react";
import { MessageContent } from "../../types/messageContent";
import { MessageBalloon } from "../molecules/MessageBalloon";

type Props = {
    messageList: MessageContent[];
};

export const MessageListArea: VFC<Props> = (props) => {
    const { messageList } = props;
    return (
        <ul>
            <Box
                borderRadius={4}
                border="none"
                borderColor="orange.600"
                minH="200px"
                w="auto"
                p={4}
                mx="20px"
                my="40px"
                bg="gray.100"
                boxShadow="orange.100"
                // w={{ base: "100px", md: "400px", lg: "600px" }}
            >
                {messageList.map((messageContent, index) => {
                    return <MessageBalloon key={index} messageContent={messageContent} />;
                })}
            </Box>
        </ul>
    );
};
