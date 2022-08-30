import { Box, Grid, GridItem } from '@chakra-ui/react'
import { FC } from 'react'
import Container from '../Container/Container'
import CategoryButton from './CategoryButton'
import Trending from './Trending'

const Content: FC = () => {
  return (
    <Box flex={1} w="100%" bg="#f7f7f7" display="flex" justifyContent="center">
      <Container mt={5}>
        <CategoryButton />
        <Grid gap={2} templateColumns="repeat(3, 1fr)" mt={5}>
          <GridItem colSpan={2}>CAROUSEL</GridItem>
          <GridItem>
            <Trending />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Content
