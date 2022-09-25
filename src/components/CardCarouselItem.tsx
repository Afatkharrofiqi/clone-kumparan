import { Image, VStack } from '@chakra-ui/react'
import CardInfo from '@component/CardInfo'
import { News } from '@models/News'
import { FC } from 'react'

interface CardCarouselItem {
  imageHeight: number | string
  data: News
}

const CardCarouselItem: FC<CardCarouselItem> = ({ imageHeight, data }) => {
  return (
    <VStack position={'relative'} borderRadius={10} overflow="hidden">
      <Image
        height={imageHeight}
        width={'100rem'}
        objectFit="cover"
        src={data.image}
        alt={data.title}
      />
      <VStack position={'absolute'} bottom={3} left={5}>
        <CardInfo textColor="white" data={data} />
      </VStack>
    </VStack>
  )
}

export default CardCarouselItem
