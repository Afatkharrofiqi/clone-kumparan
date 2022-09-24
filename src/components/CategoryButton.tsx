import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { categoryContent } from '@data/categoryContent'
import { FC } from 'react'

const CategoryButton: FC = () => {
  return (
    <Stack direction="row" gap={2} justifyContent="center" mt={2}>
      {categoryContent.map((name, index) => {
        return (
          <ButtonGroup key={index} size="xs" color="blue.400">
            <Button
              fontWeight="bold"
              outlineColor="blue.400"
              background="transparent"
            >
              {name}
            </Button>
          </ButtonGroup>
        )
      })}
    </Stack>
  )
}

export default CategoryButton
