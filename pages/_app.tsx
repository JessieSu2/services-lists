import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Fonts,
  Navbar,
  theme,
} from 'components'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Fonts />

        <Navbar />
        <Component {...pageProps} />

      </ChakraProvider>
    </QueryClientProvider>
  )
}