import {

  Container,
  Badge,
  Link,
  List,
  ListItem,

} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Teams Chat App">
    <Container>
      <Title>
        Teams Chat App <Badge>React, Chat Engine</Badge>
      </Title>
      <P>
	  A Chat App Built using React for The UI. It also includes an integration of The Chat Engine API.It allows for Authentication and Usage by Multiple Users. Log In using: USERNAME: Other, PASSWORD: 12345
      </P>
      <List ml={4} my={4}>
	  <ListItem>
          <Meta>Website</Meta>
          <Link href="https://martin-teams-chat-app.web.app/">
		  https://martin-teams-chat-app.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, ChatEngine, Firebase</span>
        </ListItem>


      </List>





	  <WorkImage src="/images/works/teams.png" alt="" />

      <WorkImage
        src="/images/works/teams1.png"
        alt=""
      />


    </Container>
  </Layout>
)

export default Work
