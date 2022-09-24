import { Box, Container } from '@chakra-ui/react'
import MainMenu from '@component/Navigation/MainMenu'
import SubMenu from '@component/Navigation/SubMenu'
import TopBar from '@component/Navigation/TopBar'
import { FunctionComponent } from 'react'

const Navigation: FunctionComponent = () => {
  return (
    <Box bgColor={'white'}>
      <Container maxW={'container.xl'}>
        <TopBar />
        <MainMenu />
        <SubMenu />
      </Container>
    </Box>
  )
}

export default Navigation
