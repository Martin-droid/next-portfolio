import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Laravel">
    <Container>
      <Title>
        Property<Badge>Laravel</Badge>
      </Title>
      <P>
	  A Commercial Property Management System built for a Real Estate Firm. It includes a Landing Page, Dashboard, Property and Manager/Tenant Registration System.
      </P>

      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Bootstrap, Laravel, MySQL</span>
        </ListItem>

      </List>



      <WorkImage src="/images/works/property.png" alt="" />
      <WorkImage src="/images/works/loan1.png" alt="" />

    </Container>
  </Layout>
)

export default Work
