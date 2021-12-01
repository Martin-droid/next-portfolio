import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/crypto.png'
import thumbWalknote from '../public/images/works/news.png'
import thumbFourPainters from '../public/images/works/teams.png'
import thumbMenkiki from '../public/images/works/zoom.png'
import thumbModeTokyo from '../public/images/works/loan.png'
import thumbStyly from '../public/images/works/property.png'
import thumbPichu2 from '../public/images/works/uber.jpg'
import thumbFreeDBTagger from '../public/images/works/linked.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="crypto" title="Crypto App" thumbnail={thumbInkdrop}>
		  A Powerful Cryptocurrency Web App.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="news"
            title="AI News Project"
            thumbnail={thumbWalknote}
          >
A React-Alan AI News Project.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="teams"
            title="Teams Chat App"
            thumbnail={thumbFourPainters}
          >
          A Chat Application That Allows user to Login, Chat and send image documents.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="zoom" thumbnail={thumbMenkiki} title="Zoom App">
           My Own version of The Zoom Application.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Commercial Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="loan"
            thumbnail={thumbModeTokyo}
            title="Loan App"
          >
           A FullStack Laravel Loan Application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="property" thumbnail={thumbStyly} title="Property Management System">
            A Property Management System custom tailored for a Property Manager.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects I am currently working on.
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="" thumbnail={thumbPichu2} title="Uber">
            React-Native Uber App
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id=""
            thumbnail={thumbFreeDBTagger}
            title="LinkedIn"
          >
           Building LinkedIn Web Application from Scratch.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
