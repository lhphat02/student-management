import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function App({ Component, pageProps }) {
  const routing = useRouter();

  return (
    <>
      <Head>
        <title>Quản lý học sinh</title>
        <meta name="description" content="Trang web quản lý học sinh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {routing.pathname !== '/loginpage' ? (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
