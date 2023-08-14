import { ReactNode, createContext } from "react";
interface AuthInfo {
  name: string;
}
export const AuthContext = createContext<AuthInfo | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const authInfo: AuthInfo = {
    name: "hello world",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
