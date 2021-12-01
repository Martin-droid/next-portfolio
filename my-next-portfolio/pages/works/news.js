import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="AI News">
    <Container>
      <Title>
        AI News Project <Badge>React, Alan AI</Badge>
      </Title>
      <P>
	  This AI News Application is a Project whose UI is built with ReactJs and the Voice Assistant AI is an integration of The Alan AI API.
      </P>

      <List ml={4} my={4}>
	  <ListItem>
          <Meta>Website</Meta>
          <Link href="https://martinainews.web.app/">
		  https://martinainews.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Alan-AI, Firebase</span>
        </ListItem>
      </List>






        <WorkImage src="/images/works/news.png" alt="walknote" />
        <WorkImage src="/images/works/news2.png" alt="walknote" />

      <WorkImage src="/images/works/news3.png" alt="walknote" />

    </Container>
  </Layout>
)

export default Work
