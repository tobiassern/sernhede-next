import { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { firebaseClient } from 'config/firebaseClient';

const AuthContext = createContext({user: null});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      // console.log(`auth changed`);
      // console.log(user ? user.uid : 'NO USER');
      if (!user) {
        setUser(false);
        nookies.set(undefined, 'token', '', {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, 'token', token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

//https://github.com/vriad/next-firebase-ssr