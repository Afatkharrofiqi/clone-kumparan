import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Content from '../components/Content/Content'
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
      <NextSeo title="Clone Kumparan" description="Clone Kumparan Apps" />
      <Navigation flex={'0'} />
      <Content />
    </Box>
  )
}

export default Home
