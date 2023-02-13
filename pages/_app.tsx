import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { GlobalStyle } from '@/styles/Globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark'
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </>
  )
}
