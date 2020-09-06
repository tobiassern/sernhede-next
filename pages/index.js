import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from 'lib/context/auth';

// export const useInterval = (
//   _callback: (...args: any[]) => any,
//   delay: number
// ) => {
//   const callback = useCallback(_callback, []);
//   useEffect(() => {
//     let id = setInterval(callback, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// };

const Home = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          <a>Go to authenticated route</a>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;