import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import TopBar from './TopBar'

const Navigation: FunctionComponent = () => {
  return (
    <Box
      h="100%"
      maxH="15vh"
      w="100%"
      bg="white"
      display="flex"
      justifyContent="center"
    >
      <Box w="100%" maxW="65vw">
        <TopBar />
      </Box>
    </Box>
  )
}

export default Navigation
