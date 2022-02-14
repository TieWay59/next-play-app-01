import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../componets/navbar";

/*
a better meta-data pattern:

const data_profile = [
  {
    name: "somename",
    //... pre-set attributes
    extras: new Map([
      ["key1", "val1"],
      ["key2", "val2"],
      ["key3", "val3"],
    ]),
  },
];
*/

const profiles = [
  {
    name: "Frank Zhao",
    githubHandle: "frank-zsy",
    joinYear: 2015,
  },
  {
    name: "Yeming Gu",
    githubHandle: "gymgym1212",
    joinYear: 2020,
  },
  {
    name: "Lam Tang",
    githubHandle: "tyn1998",
    joinYear: 2021,
  },
  {
    name: "伍玖",
    githubHandle: "tieway59",
    joinYear: 2021,
  },
];

// https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md
const ConfigGithubReadmeStats = {
  locale: "en",
  hide_border: "true",
  show_icons: "true",
};

const GithubAvatarPng = (handler) =>
  `https://github.com/${handler}.png?size=500`;

/*
因为 GitHub 的 API 每个小时只允许 5 千次请求，我的 https://github-readme-stats.vercel.app/api 
很有可能会触发限制。如果你将其托管在自己的 Vercel 服务器上，那么你就不必为此担心
*/
const GithubReadmeStatsUrl = (config, name) =>
  `https://github-readme-stats.vercel.app/api?username=${name}&`.concat(
    Object.keys(config)
      .map((k) => `${k}=${config[k]}`)
      .join("&")
  );

// TODO: 重新设计卡片参考 https://chakra-ui.com/docs/layout/box#usage-1
const ProfileGroups = () => (
  <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
    {profiles.map((item) => (
      <Box
        borderRadius="md"
        bg="whiteAlpha.900"
        backdropFilter="auto"
        backdropBlur="1"
        maxW={500}
        overflow="hidden"
      >
        <Box
          bgImage={GithubAvatarPng(item.githubHandle)}
          backgroundRepeat="no-repeat"
          bgPosition="center"
          backgroundSize=" 100%"
        >
          <Center
            w="100%"
            bg="whiteAlpha.600"
            backdropFilter="auto"
            backdropBlur="xl"
            borderWidth="1px"
            maxH={300}
          >
            <Image
              marginY={[50, 50, 50, 10]}
              maxW={[100, 200, 200, 200]}
              borderRadius={["full", "full", "lg", "lg"]}
              boxShadow="md"
              src={GithubAvatarPng(item.githubHandle)}
            ></Image>
          </Center>
        </Box>

        <Box p="6">
          <Text fontSize="3xl" fontWeight="bold">
            {item.name}{" "}
          </Text>
          <Text>
            入学年份:
            <Badge borderRadius="full" px="2" colorScheme="primary">
              {item.joinYear}
            </Badge>
          </Text>
          {/* TODO: 需按照需要的标签 */}
          <Text>就读学校:</Text>
          <Text>个人网站:</Text>
          <Text>联系邮箱: </Text>
        </Box>

        <Box p="6">
          <Link
            href={`https://github.com/${item.githubHandle}`}
            isExternal
            inline
          >
            <Image
              src={GithubReadmeStatsUrl(
                ConfigGithubReadmeStats,
                item.githubHandle
              )}
            ></Image>
          </Link>
        </Box>
      </Box>
    ))}
  </SimpleGrid>
);

export default function People() {
  return (
    <div>
      <Container minH={300}></Container>
      <Container
        centerContent
        maxW={["container.md", "container.md", "container.md", "container.xl"]}
      >
        <ProfileGroups></ProfileGroups>
      </Container>
    </div>
  );
}
