import { Box, Text } from "@chakra-ui/layout";
import { VFC } from "react";

type Props = {
    text: string;
};

export const MessageBalloon: VFC<Props> = (props) => {
    const { text } = props;

    return (
        <Box bg="white" px={3} py={1} size="xs" borderRadius={4} boxShadow="md" mb={2}>
            <Text fontSize="sm">{text}</Text>
        </Box>
    );
};
