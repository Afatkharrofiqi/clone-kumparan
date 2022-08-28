import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import Container from '../Container/Container'

const Content: FC = () => {
  return (
    <Box h="100%" w="100%" bg="#f7f7f7" display="flex" justifyContent="center">
      <Container mt={5}>
        <Text>Hello</Text>
      </Container>
    </Box>
  )
}

export default Content
