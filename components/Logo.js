import { Box, Image } from "@chakra-ui/react";

export default function Logo({ children, ...rest }) {
  return (
    <Box {...rest}>
      <Image
        src="/Logo.dark.png"
        fallbackSrc="https://via.placeholder.com/250"
        alt="logo"
      />
    </Box>
  );
}
