import { useEffect, useState } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [windowAvailable, setWindow] = useState(true)
  useEffect(() => setWindow(false));
  return (
    <div suppressHydrationWarning>
      {windowAvailable ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp
