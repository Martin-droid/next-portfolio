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
  <Layout title="Zoom">
    <Container>
      <Title>
        Zoom <Badge>React</Badge>
      </Title>
      <P>
      This is a Zoom Clone Project made using React Js. It allows The Users to Create a Meeting by Generating a Link that the host shares with the Members.
      </P>


      <List ml={4} my={4}>
	  <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ckv9yrsyf145832idk0zkacwx83-9j14xvrke-martin-droid.vercel.app/">
		  https://ckv9yrsyf145832idk0zkacwx83-9j14xvrke-martin-droid.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Vercel</span>
        </ListItem>

      </List>


	  <WorkImage src="/images/works/zoom.png" alt="" />
	  <WorkImage src="/images/works/zoom3.png" alt="" />
	  <WorkImage src="/images/works/zoom4.png" alt="" />

    </Container>
  </Layout>
)

export default Work
