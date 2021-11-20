import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { VFC } from "react";
import { MessageContent } from "../../types/messageContent";

type Props = {
    messageContent: MessageContent;
};

export const MessageBalloon: VFC<Props> = (props) => {
    const { messageContent } = props;

    return (
        <Flex
            bg="white"
            px={3}
            py={1}
            size="xs"
            borderRadius={4}
            boxShadow="md"
            mb={2}
            align="center"
        >
            <Text fontSize="xs" color="gray.500" mr={1}>
                {messageContent.name}
            </Text>
            <Text fontSize="sm">{messageContent.message}</Text>
            <Spacer />
            <Text fontSize="xs">{messageContent.postat}</Text>
        </Flex>
    );
};
