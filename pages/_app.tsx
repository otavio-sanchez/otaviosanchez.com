
import Theme from '../styles/theme'
import type { AppProps /*, AppContext */ } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Theme><Component {...pageProps} /></Theme>
}

export default App
