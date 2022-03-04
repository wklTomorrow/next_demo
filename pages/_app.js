import App from 'next/app'
import '../styles/globals.css'
function MyApp({ Component, pageProps, isMobile }) {
  return <Component {...pageProps} isMobile={isMobile} />
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const isMobile = () => (/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(appContext.ctx.req.headers['user-agent']))

  return { ...appProps, isMobile: isMobile()}
}

export default MyApp
