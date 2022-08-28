import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface ContainerProps {
  mt?: number
  children: JSX.Element[] | JSX.Element
}

const Container: FunctionComponent<ContainerProps> = ({ mt, children }) => {
  return (
    <Box w="100%" maxW="65vw" mt={mt}>
      {children}
    </Box>
  )
}

export default Container
