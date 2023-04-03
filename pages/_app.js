import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Topbar />
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </div>
  );
}
