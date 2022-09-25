import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { CSSProperties, FC } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { FiArrowRight } from 'react-icons/fi'
import { trending } from '@data/trending'
import CardInfo from '@component/CardInfo'

interface TrendingCard {
  style?: CSSProperties | undefined
}

const Trending: FC<TrendingCard> = (style) => {
  return (
    <Box {...style}>
      <Box
        bgColor="white"
        position='relative'
        overflow='hidden'
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
      <SimpleBar style={{
        height: '42.3rem'
      }}>
        <Box bgColor="white" p={2} position='relative'>
          {trending.map((data, index) => {
            return (
              <Box key={index} m={2}>
                <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                  <GridItem colSpan={3}>
                    <CardInfo data={data} textColor='black' />
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
