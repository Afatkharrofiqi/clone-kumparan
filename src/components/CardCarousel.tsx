import { HStack, VStack } from "@chakra-ui/react";
import CardCarouselItem from "@component/CardCarouselItem";
import CarouselItem from "@models/CarouselItem";
import { FC } from "react";

interface CardCarousel {
  data: CarouselItem
}

const CardCarousel: FC<CardCarousel> = ({ data: { bigContent, smallContent } }) => {
  return <VStack>
    <CardCarouselItem imageHeight={'30rem'} data={bigContent} />
    <HStack>
      {smallContent.map((data, index) => <CardCarouselItem key={index} imageHeight={'15rem'} data={data} />)}
    </HStack>
  </VStack>
}

export default CardCarousel