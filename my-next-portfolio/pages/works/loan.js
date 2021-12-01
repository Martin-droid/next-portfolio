import {
  Container,
  Badge,

  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Loan App">
    <Container>
      <Title>
        Loan App<Badge>Laravel</Badge>
      </Title>
      <P>A Laravel Commercial Application that I made for a client, It is built for a Loan Financing Institution. It includes a Landing Page, Authentication System, Loan Application Form, Admin Backend System and a Report Genarator.</P>

      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Bootstrap, Laravel, MySQL</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/loan.png" alt="" />
      <WorkImage src="/images/works/loan2.png" alt="" />
    </Container>
  </Layout>
)

export default Work
