// import Image from 'next/image'
import { Box, Container, Image, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <Container bg="transparent" maxW="container.lg" centerContent>
        <Box padding="40">
          <Image
            src="/Logo.dark.png"
            fallbackSrc="https://via.placeholder.com/250"
            alt="logo"
          />
        </Box>
      </Container>
    </VStack>
  );
}
