import { createContext, useContext, useState } from "react";

interface IAppContext {
  userId: string | null;
  login: (x: string) => void;
  logout: () => void;
  setUserId: any;
}

const AppContext = createContext<IAppContext>(null!);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: any }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const login = (userData: string) => {
    console.log(userData);
    setUserId(userData);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <AppContext.Provider value={{ userId, login, logout, setUserId }}>
      {children}
    </AppContext.Provider>
  );
};
