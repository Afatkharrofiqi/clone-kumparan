import { Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { News } from '@models/News'
import moment from 'moment'
import { FC } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { GoKebabVertical } from 'react-icons/go'
import { HiBadgeCheck } from 'react-icons/hi'

interface CardInfo {
  data: News
  textColor: string
}

const CardInfo: FC<CardInfo> = ({ data, textColor }) => {
  return (
    <Stack direction="column">
      <Text color={textColor} fontWeight="500">
        {data.title}
      </Text>
      <Stack direction="row" alignItems="center">
        <Image
          src={data.avatar}
          borderRadius="full"
          border={'1px solid gray'}
          boxSize="1rem"
          alt={data.title}
        />
        <Text color={textColor}>{data.createdBy}</Text>
        <HiBadgeCheck color="teal" />
      </Stack>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent={'space-between'}
      >
        <HStack gap={7}>
          <Stack direction="row" alignItems="center">
            {data.totalLikes > 0 ? <BsHeartFill color="red" /> : <BsHeart />}
            <Text fontSize="sm" color={textColor}>
              {data.totalLikes}
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <FaRegComment color={textColor} />
            <Text fontSize="sm" color={textColor}>
              {data.totalComments}
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Text fontSize="sm" color={textColor}>
              {moment(data.lastUpdated).format('DD MMM')}
            </Text>
          </Stack>
        </HStack>
        <GoKebabVertical color={textColor} />
      </Flex>
    </Stack>
  )
}

export default CardInfo
