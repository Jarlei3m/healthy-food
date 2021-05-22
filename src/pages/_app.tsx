import { RegisterProvider } from '../contexts/RegisterContext';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <RegisterProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </RegisterProvider>
  )
}

export default MyApp
