import '../styles/globals.scss';
import '../styles/login.css';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  return (<>
    <AnimatedCursor
      innerSize={8}
      outerSize={0}
      color='0, 0, 0'
      outerAlpha={0}
      innerScale={3}
    />
    <Component {...pageProps} />
  </>)
}

export default MyApp
