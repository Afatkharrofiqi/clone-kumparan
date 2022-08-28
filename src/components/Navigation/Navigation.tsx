import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import TopBar from './TopBar'

interface NavigationProps {
  flex: string
}

const Navigation: FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  return (
    <Box
      h="100%"
      w="100%"
      bg="white"
      display="flex"
      justifyContent="center"
      {...props}
    >
      <Box w="100%" maxW="65vw">
        <TopBar />
        <MainMenu />
        <SubMenu />
      </Box>
    </Box>
  )
}

export default Navigation
