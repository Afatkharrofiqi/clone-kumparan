import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { trending } from '../../data/trending'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { FiArrowRight } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { GoKebabVertical } from 'react-icons/go'
import { FaRegComment } from 'react-icons/fa'
import moment from 'moment'

const Trending: FC = () => {
  return (
    <Box>
      <Box
        borderTopRadius={10}
        bgColor="white"
        py={2}
        borderBottomWidth={2}
        borderBottomColor="gray.100"
      >
        <Flex
          justifyContent="space-between"
          position="relative"
          px={3}
          _before={{
            position: 'absolute',
            left: 0,
            top: 1.5,
            bottom: 0,
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
            <Text color="blue.400">Lihat Lainnya</Text>
            <FiArrowRight color="gray" />
          </HStack>
        </Flex>
      </Box>
      <SimpleBar
        style={{
          maxHeight: '70vh',
        }}
      >
        <Box borderBottomRadius={10} bgColor="white" p={2}>
          {trending.map((data, index) => {
            return (
              <Box key={index} m={2}>
                <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                  <GridItem colSpan={3}>
                    <Stack direction="column">
                      <Text fontWeight="500">{data.title}</Text>
                      <Stack direction="row" alignItems="center">
                        <Image
                          src={data.avatar}
                          borderRadius="full"
                          border={'1px solid gray'}
                          boxSize="1rem"
                        />
                        <Text>{data.createdBy}</Text>
                        <HiBadgeCheck color="teal" />
                      </Stack>
                      <Flex direction="row" alignItems="center" gap={7}>
                        <Stack direction="row" alignItems="center">
                          {data.totalLikes > 0 ? (
                            <BsHeartFill color="red" />
                          ) : (
                            <BsHeart />
                          )}
                          <Text fontSize="sm">{data.totalLikes}</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                          <FaRegComment />
                          <Text fontSize="sm">{data.totalComments}</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                          <Text fontSize="sm">
                            {moment(data.lastUpdated).format('DD MMM')}
                          </Text>
                        </Stack>
                        <GoKebabVertical />
                      </Flex>
                    </Stack>
                  </GridItem>
                  <GridItem>
                    <AspectRatio ratio={4 / 4}>
                      <Image src={data.image} rounded={10} />
                    </AspectRatio>
                  </GridItem>
                </Grid>
                <Divider my={3} />
              </Box>
            )
          })}
        </Box>
      </SimpleBar>
    </Box>
  )
}

export default Trending
