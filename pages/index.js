// import Image from 'next/image'
import { Box, Center, Container, VStack } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <VStack>
      <Container bg="transparent" maxW="container.lg" centerContent>
        <Center h="100vh">
          <Logo maxW="lg" />
        </Center>
      </Container>
    </VStack>
  );
}
