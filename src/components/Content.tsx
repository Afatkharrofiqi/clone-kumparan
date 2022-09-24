import { Box, Container, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import CardInfo from '@component/CardInfo';
import CategoryButton from '@component/CategoryButton';
import Trending from '@component/Trending';
import Carousel from 'nuka-carousel';
import { FC } from 'react'

const Content: FC = () => {
  return (
    <Container maxW={'container.xl'} mt={5} alignSelf={'center'}>
      <CategoryButton />
      <Flex maxHeight='55rem' mt={5}>
        <VStack display={'flex'} flex={2} alignSelf={'center'} >
          <Carousel>
            <VStack>
              <VStack position={'relative'}>
                <Image height={'30rem'} objectFit='cover'
                  src="https://tygerbergeisteddfod.co.za/wp-content/uploads/2017/01/wallpaper-music-images-pixel-backgrounds-style-players-wallpapers-lights-large-tssn6-1024x576-1.jpg" />
                <VStack position={'absolute'} bottom={3} left={5}>
                  <CardInfo textColor='white' data={{
                    title: 'Putri Mengaku Dilecehkan Yosua di Magelang',
                    createdBy: 'kumparanNEWS',
                    avatar:
                      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_32,ar_1:1/v1512588407/tufp3tpktdtkkk9uzl25.png',
                    comment: true,
                    totalComments: 4,
                    like: true,
                    totalLikes: 1,
                    lastUpdated: new Date(),
                    image:
                      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ga92qc9e3tb9ws5a0kd782m4.jpg',
                  }} />
                </VStack>
              </VStack>
              <HStack>
                <VStack>
                  <Image height={'15rem'} objectFit='cover' src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg" />
                  <VStack position={'absolute'} bottom={3} left={5}>
                    <CardInfo textColor='white' data={{
                      title: 'Putri Mengaku Dilecehkan Yosua di Magelang',
                      createdBy: 'kumparanNEWS',
                      avatar:
                        'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_32,ar_1:1/v1512588407/tufp3tpktdtkkk9uzl25.png',
                      comment: true,
                      totalComments: 4,
                      like: true,
                      totalLikes: 1,
                      lastUpdated: new Date(),
                      image:
                        'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ga92qc9e3tb9ws5a0kd782m4.jpg',
                    }} />
                  </VStack>
                </VStack>
                <VStack>
                  <Image height={'15rem'} objectFit='cover' src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg" />
                </VStack>
              </HStack>
            </VStack>
          </Carousel>
        </VStack>
        <VStack flex={1} ml={5}>
          <Trending style={{ borderRadius: 10, borderWidth: 1, borderStyle: 'solid', width: '100%', overflow: 'hidden' }} />
        </VStack>
      </Flex >
    </Container >
  )
}

export default Content
