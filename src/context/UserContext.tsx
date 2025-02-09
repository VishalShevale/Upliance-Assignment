import { createContext, useState, useContext, ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserContext = createContext<any>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to Use Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
