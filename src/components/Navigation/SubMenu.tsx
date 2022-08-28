import { Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { subHeadingData } from '../../data/subHeadingData'

const SubMenu: FunctionComponent = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      mb={1}
      gap={2}
    >
      {subHeadingData.map((name, index) => {
        return (
          <Text key={index} color="gray" fontSize={15}>
            {name}
          </Text>
        )
      })}
    </Stack>
  )
}

export default SubMenu
