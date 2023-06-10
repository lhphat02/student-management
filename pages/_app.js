import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  const routing = useRouter();

  const checkPage = () => {
    switch (routing.pathname) {
      case '/login':
        <Component {...pageProps} />;
      case '/forgotpassword':
        <Component {...pageProps} />;
      default:
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>;
    }
  };

  return (
    <>
      <Head>
        <title>Quản lý học sinh</title>
        <meta name="description" content="Trang web quản lý học sinh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {routing.pathname === '/login' ||
      routing.pathname === '/forgotpassword' ||
      routing.pathname === '/resetpassword' ? (
        <Component {...pageProps} />
      ) : (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      )}
    </>
  );
}
