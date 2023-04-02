// import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '@/styles/globals.css';

import Navbar from '../components/Navbar';
import Sidebar from '@/components/Sidebar';

const App = ({ Component, pageProps }) =>  (
        <>
          <Head>
            <title>Quản lý học sinh</title>
            <meta name="description" content="Trang web quản lý học sinh" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className='bg-gray-100 min-h-screen'>
            <Navbar />
            <div>
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
            </div>
          </main>
        </>
)

export default App;
