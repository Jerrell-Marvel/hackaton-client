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
  isLoggedIn: boolean;
  setisLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const LoginContext = createContext<LoginContextData>({
  username: "",
  setUsername: () => {},
  isLoggedIn: false,
  setisLoggedIn: () => {},
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{ username, setUsername, isLoggedIn, setisLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLoginContext() {
  return useContext(LoginContext);
}
