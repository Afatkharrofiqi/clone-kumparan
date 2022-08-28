import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Navigation from '../components/Navigation/Navigation'

const Home: NextPage = () => {
  return (
    <Box
      h="100vh"
      display="flex"
      alignContent="center"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Navigation />
      <Box
        h="100%"
        maxH="100vh"
        w="100%"
        bg="#f7f7f7"
        display="flex"
        justifyContent="center"
      >
        <Box w="100%" maxW="65vw" bg="yellow">
          <NextSeo title="Clone Kumparan" description="Clone Kumparan Apps" />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
