import { Box, Flex, HStack, List, Stack, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { trending } from '../../data/trending'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const Trending: FC = () => {
  return (
    <Box>
      <Box
        borderTopRadius={10}
        bgColor="white"
        p={2}
        borderBottomWidth={2}
        borderBottomColor="gray.100"
      >
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontSize="xl">
            Trending
          </Text>
          <HStack>
            <Text color="gray">Lainnya</Text>
            <BsArrowRightShort />
          </HStack>
        </Flex>
      </Box>
      <SimpleBar
        style={{
          maxHeight: '55vh',
        }}
      >
        <Box borderBottomRadius={10} bgColor="white" p={2}>
          {trending.map((data, index) => {
            return (
              <Box key={index}>
                <Text>{data.title}</Text>
              </Box>
            )
          })}
        </Box>
      </SimpleBar>
    </Box>
  )
}

export default Trending
