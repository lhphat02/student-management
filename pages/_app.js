import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../components/Sidebar';
import Script from 'next/script';

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
        <script>// _ // (") // (-"-) //(_`/._)</script>
      </Head>

      <Script>
        {console.log(
          "//                       _oo0oo_\r\n//                      o8888888o\r\n//                      88\" . \"88\r\n//                      (| -_- |)\r\n//                      0\\  =  /0\r\n//                    ___/`---'\\___\r\n//                  .' \\\\|     |// '.\r\n//                 / \\\\|||  :  |||// \\\r\n//                / _||||| -:- |||||- \\\r\n//               |   | \\\\\\  -  /// |   |\r\n//               | \\_|  ''\\---/''  |_/ |\r\n//               \\  .-\\__  '-'  ___/-. /\r\n//             ___'. .'  /--.--\\  `. .'___\r\n//          .\"\" '<  `.___\\_<|>_/___.' >' \"\".\r\n//         | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |\r\n//         \\  \\ `_.   \\_ __\\ /__ _/   .-` /  /\r\n//     =====`-.____`.___ \\_____/___.-`___.-'=====\r\n//                       `=---='\r\n//\r\n//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n//            Ph\u1EADt ph\u00F9 h\u1ED9, kh\u00F4ng bao gi\u1EDD BUG\r\n//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        )}
      </Script>

      {routing.pathname === '/login' ||
      routing.pathname === '/forgotpassword' ||
      routing.pathname === '/resetpassword' ? (
        <div className="flex items-center justify-center w-full min-h-screen px-20">
          <Component {...pageProps} />
        </div>
      ) : (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      )}
    </>
  );
}
