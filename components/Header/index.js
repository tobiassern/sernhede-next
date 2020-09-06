import Link from 'next/link';
import { Menu, Avatar } from 'antd';
import { LoadingOutlined, LoginOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useAuth } from 'lib/context/auth';

import styles from './header.module.scss';

export default function Header() {
  const router = useRouter();
  const { user } = useAuth();

  console.log(user === null);
  console.log(user === false);

  return (
    <header className={styles['header']} >
      <Link href="/"><a><div className="logo">Logo</div></a></Link>
      <Menu mode="horizontal" selectedKeys={router.pathname} className={styles['menu']}>
        {user === null && <Menu.Item key="loading" icon={<LoadingOutlined />} />}
        {user &&
          <Menu.Item 
            key="/profile"
            icon={
              <Avatar 
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                size="small"
              />
            }
          >
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Menu.Item>
        }
        {user === false && 
          <Menu.Item key="/login" icon={<LoginOutlined />}>
            <Link href="/login">
              <a>
                Login
              </a>
            </Link>
          </Menu.Item>
        }
      </Menu>
    </header>
  );

}