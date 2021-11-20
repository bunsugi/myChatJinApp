import { Box, Flex, Text } from "@chakra-ui/layout";
import { VFC } from "react";

type Props = {
    text: string;
};

export const MessageBalloon: VFC<Props> = (props) => {
    const { text } = props;

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
            <Text fontSize="xs" color="gray.500">
                あやね：
            </Text>
            <Text fontSize="sm">{text}</Text>
        </Flex>
    );
};
