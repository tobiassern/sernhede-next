import { Layout, Menu } from 'antd';
import Link from 'next/link';
import Header from 'components/Header';

const { Content, Footer } = Layout;

export default function MainLayout({children}) {
  return (
    <Layout className="layout">
      <Header />
      <Content className="site-layout" style={{ padding: '25px 50px', marginTop: 64 }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}