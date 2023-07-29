import {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type LoginContextData = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const LoginContext = createContext<LoginContextData>({
  username: "",
  setUsername: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{ username, setUsername, isLogin, setIsLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLoginContext() {
  return useContext(LoginContext);
}
