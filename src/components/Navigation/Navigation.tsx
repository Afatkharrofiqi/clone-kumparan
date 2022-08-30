import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import Container from '../Container/Container'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import TopBar from './TopBar'

const Navigation: FunctionComponent = () => {
  return (
    <Box
      h="100%"
      w="100%"
      bg="white"
      display="flex"
      justifyContent="center"
      flex={0}
    >
      <Container>
        <TopBar />
        <MainMenu />
        <SubMenu />
      </Container>
    </Box>
  )
}

export default Navigation
