import { Container, Flex, VStack } from '@chakra-ui/react'
import CardCarousel from '@component/CardCarousel'
import CategoryButton from '@component/CategoryButton'
import Trending from '@component/Trending'
import { carouselData } from '@data/carouselData'
import Carousel from 'nuka-carousel'
import { FC } from 'react'

const Content: FC = () => {
  return (
    <Container maxW={'container.xl'} mt={5} alignSelf={'center'}>
      <CategoryButton />
      <Flex maxHeight="55rem" mt={5}>
        <VStack display={'flex'} flex={2} alignSelf={'center'}>
          <Carousel>
            {carouselData.map((data, index) => (
              <CardCarousel data={data} key={index} />
            ))}
          </Carousel>
        </VStack>
        <VStack flex={1} ml={5}>
          <Trending
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: 'solid',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </VStack>
      </Flex>
    </Container>
  )
}

export default Content
