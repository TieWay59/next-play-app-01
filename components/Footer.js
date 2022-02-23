import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "./Logo";

const ExternalLinkItemsData = [
  {
    title: "X-lab Github",
    url: "https://github.com/orgs/X-lab2017/repositories",
  },
  {
    title: "X-lab Bilibili",
    url: "https://space.bilibili.com/510793367",
  },
  { title: "hypertrons", url: "https://github.com/hypertrons" },
  {
    title: "Chaoss China Bilibili",
    url: "https://space.bilibili.com/1292724697",
  },
];

const ExternalLinkItem = ({ itemData: { title, url } }) => (
  <Box p="1">
    <Link
      color="whiteAlpha.700"
      _hover={{ color: "whiteAlpha.900" }}
      href={url}
    >
      <Text w={[20, 40, 40, 40]} textAlign="right">
        {title}
      </Text>
    </Link>
  </Box>
);

const ExternalLinkItemGroup = ({ children, ...rest }) => (
  <VStack {...rest}>
    {ExternalLinkItemsData.map((item) => (
      <ExternalLinkItem itemData={item} />
    ))}
  </VStack>
);

export default function Footer({ children }) {
  return (
    <Flex bg="black">
      <Box flex={[0, 0, 0, 1]}></Box>
      <Box flex={4} p="4">
        <Logo width="40" />
      </Box>
      <Spacer />
      <ExternalLinkItemGroup flex={2} p="4" />
      <Box flex={[0, 0, 0, 1]}></Box>
    </Flex>
  );
}
