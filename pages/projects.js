import { Container, Image, Link } from "@chakra-ui/react";
import { BlurFilterBox } from "components/BlurFilterBox";

// 请求GitHub仓库list的api https://docs.github.com/en/rest/reference/repos （但可能用不到这个）
const xlab2017RepoList = [
  { orgName: "X-lab2017", repoName: "open-digger" },
  { orgName: "X-lab2017", repoName: "github-analysis-report-2019" },
  { orgName: "X-lab2017", repoName: "open-galaxy" },
  { orgName: "hypertrons", repoName: "hypertrons" },
  { orgName: "hypertrons", repoName: "hypertrons-crx" },
];

const ProjectProfile = ({ orgName, repoName }) => (
  <BlurFilterBox p="6">
    <h1> {repoName} </h1>
    <Link href={`https://github.com/${orgName}/${repoName}`} isExternal inline>
      <Image
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${orgName}&repo=${repoName}`}
      />
    </Link>
  </BlurFilterBox>
);

const ProjectProfileGroup = ({ repoList }) => (
  <div>
    {repoList.map(({ orgName, repoName }) => (
      <ProjectProfile orgName={orgName} repoName={repoName} />
    ))}
  </div>
);

export default function Projects() {
  return (
    <div>
      <Container minH={300}></Container>
      <Container
        centerContent
        maxW={["container.md", "container.md", "container.md", "container.xl"]}
      >
        <ProjectProfileGroup repoList={xlab2017RepoList} />
      </Container>
    </div>
  );
}
