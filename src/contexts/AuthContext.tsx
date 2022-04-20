import React, { createContext, useEffect, useState } from "react";
import { currentUser } from "../helpers/supabase";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  loading: true,
  getUser: () => {},
  refetch: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const refetch = async () => {
    const user = await currentUser();
    setUser(user);
  };

  const getUser = async () => {
    setLoading(true);
    const user = await currentUser();
    if (user) {
      setIsAuthenticated(true);
      setUser(user);
      setLoading(false);
    } else {
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, getUser, refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
