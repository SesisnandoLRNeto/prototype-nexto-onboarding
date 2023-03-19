import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userKey = '@expo-firebase-auth-realtime-db:user';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  async function signIn(newUser) {
    try {
      setUser(newUser);
      await AsyncStorage.setItem(userKey, JSON.stringify(newUser));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function signOut() {
    setUser({});
    await AsyncStorage.removeItem(userKey);
  }

  async function loadUser() {
    const userString = await AsyncStorage.getItem(userKey);
    const userData = userString ? JSON.parse(userString) : null;

    return userData && setUser(userData);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
