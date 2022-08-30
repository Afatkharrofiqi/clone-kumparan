import { Box, Flex, HStack, Text } from '@chakra-ui/react'
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
        <Flex
          justifyContent="space-between"
          position="relative"
          _before={{
            position: 'absolute',
            left: '-10px',
            right: '5px',
            top: '0.3rem',
            width: '0.4rem',
            borderRadius: '2px',
            height: '24px',
            background: 'red',
            content: '""',
          }}
        >
          <Text fontWeight="bold" fontSize="24">
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
              <Box key={index} h={100}>
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
