import { IconButton, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { headingData } from '../../data/headingData'
import { GoKebabVertical } from 'react-icons/go'

const MainMenu: FunctionComponent = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {headingData.map((name, index) => {
        return (
          <Text key={index} fontWeight="bold" color="gray">
            {name}
          </Text>
        )
      })}
      <IconButton
        bgColor="transparent"
        aria-label="kebab menu"
        isRound
        icon={<GoKebabVertical />}
      />
    </Stack>
  )
}

export default MainMenu
