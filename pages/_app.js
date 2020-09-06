import { AuthProvider } from 'lib/context/auth';
import Layout from 'components/Layout';
import 'styles/global.scss';
import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>

  );
}

export default App;