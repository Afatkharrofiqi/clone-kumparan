import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FiHome, FiMoon } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiNotification2Line } from 'react-icons/ri'

const TopBar: FunctionComponent = () => {
  return (
    <Stack
      direction="row"
      display="flex"
      my={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flex={1} direction="row">
        <Stack direction="row">
          <Image
            src="/images/logo.png"
            alt="logo kumparan"
            objectFit="cover"
            height={38}
          />
        </Stack>
        <Stack
          flex={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <InputGroup maxWidth="90%">
            <InputLeftElement
              pointerEvents="none"
              color="gray"
              fontSize="1.2em"
            >
              <HiOutlineSearch color="gray" />
            </InputLeftElement>
            <Input placeholder="Cari di sini..." />
          </InputGroup>
        </Stack>
      </Stack>
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        gap={5}
        justifyContent="space-between"
      >
        <Stack direction="row" justifyContent="flex-end" flex={1} gap={2}>
          <IconButton
            aria-label="home"
            bgColor={'transparent'}
            isRound
            icon={<FiHome size="23" color="gray" />}
          />
          <IconButton
            aria-label="dark mode"
            bgColor={'transparent'}
            isRound
            icon={<FiMoon size="23" color="gray" />}
          />
          <IconButton
            aria-label="notification"
            bgColor={'transparent'}
            isRound
            icon={<RiNotification2Line size="23" color="gray" />}
          />
        </Stack>
        <ButtonGroup size="sm">
          <Button bgColor="teal" color="white">
            Masuk
          </Button>
          <Button bgColor="teal" color="white">
            Buat Tulisan
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}

export default TopBar
