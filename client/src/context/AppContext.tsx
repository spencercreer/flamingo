import { createContext, useContext, useState, useEffect } from "react";

interface IAppContext {
  userId: string | null;
  isAuthenticated: boolean;
  login: (x: string) => void;
  logout: () => void;
}

const AppContext = createContext<IAppContext>(null!);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: any }) => {
  const [userId, setUserId] = useState<string | null>(null);
  // TODO Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (userData: string) => {
    console.log(userData);
    setIsAuthenticated(true);
    setUserId(userData);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <AppContext.Provider value={{ userId, isAuthenticated, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
