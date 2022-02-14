import { Box } from "@chakra-ui/react";

export const BlurFilterBox = ({ children, ...rest }) => (
  <Box bg="whiteAlpha.900" backdropFilter="auto" backdropBlur="1" {...rest}>
    {children}
  </Box>
);
