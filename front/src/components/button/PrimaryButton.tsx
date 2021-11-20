import { Button } from "@chakra-ui/button";
import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    loading?: boolean;
    color?: string;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, onClick, disabled = false, loading = false, color = "orange.500" } = props;
    return (
        <Button
            ml={2}
            bg={color}
            color="white"
            _hover={{ opacity: 0.7 }}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
        >
            {children}
        </Button>
    );
});
