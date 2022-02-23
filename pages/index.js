// import Image from 'next/image'
import { Box, Container, VStack } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <VStack>
      <Container bg="transparent" maxW="container.lg" centerContent>
        <Box padding="40">
          <Logo />
        </Box>
      </Container>
    </VStack>
  );
}
