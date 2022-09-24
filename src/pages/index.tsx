import { Stack } from '@chakra-ui/react'
import Content from '@component/Content'
import Navigation from '@component/Navigation'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <Stack bg="#f7f7f7" h={'100vh'}>
      <NextSeo title="Clone Kumparan" description="Clone Kumparan Apps" />
      <Navigation />
      <Content />
    </Stack>
  )
}

export default Home
