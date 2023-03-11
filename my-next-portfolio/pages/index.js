import NextLink from 'next/link'
import {

  Container,
  Heading,
  Box,
  Image,

  Button,
  List,
  ListItem,

  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'

import Layout from '../components/layouts/article'
import { Meta } from '../components/work'
import Section from '../components/section'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Nairobi, Kenya!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Martin Ndegwa
          </Heading>
          <p>Software Developer, Mentor and Trainer</p>
		  <List ml={4} my={4}>
		  <ListItem>
			  <a href="01MN_Fullstack.pdf">
          <Meta>View Resume</Meta>
</a>
        </ListItem>
		</List>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/pic-modified.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
		I am a Passionate Software Developer Based in Nairobi, Kenya. I am currently a Systems Developer working for a remote company in Kenya. I am The Founder of Ivy Tree Technologies, A Tech Startup and Academy that Mentors Young Tech Enthusiasts.
        </Paragraph>


        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>






    </Container>
  </Layout>
)

export default Home
