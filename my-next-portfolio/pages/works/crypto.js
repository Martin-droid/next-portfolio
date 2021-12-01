import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crypto">
    <Container>
      <Title>
        Crypto App <Badge>React</Badge>
      </Title>
      <P>
	  A very Powerful Cryptocurrency App that has in-depth data about all cryptocurrencies, Exchange rates, and Markets.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://crypto-f699b.web.app/">
		  https://crypto-f699b.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, Rapid API, Charts.js, Ant Design</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/crypto2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/crypto3.png" alt="Inkdrop" />
	  <WorkImage src="/images/works/crypto4.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
