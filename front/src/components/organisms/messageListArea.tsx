import { Box } from "@chakra-ui/layout";
import { VFC } from "react";

export const MessageListArea: VFC = () => {
    return (
        <Box
            borderRadius="4"
            border="none"
            borderColor="orange.600"
            minH="200px"
            w="auto"
            px="20px"
            mx="20px"
            my="40px"
            bg="gray.100"
            boxShadow="orange.100"
            // w={{ base: "100px", md: "400px", lg: "600px" }}
        ></Box>
    );
};
