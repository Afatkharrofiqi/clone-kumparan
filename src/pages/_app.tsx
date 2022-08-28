import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { IconContext } from 'react-icons'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <IconContext.Provider value={{ color: 'black' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
