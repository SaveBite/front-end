"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LoginFormProviderProps {
  children: ReactNode;
}
interface LoginFormContextProps {
  selectedForm: number;
  setSelectedForm: Dispatch<SetStateAction<number>>;
}
//create context
const LoginFormContext = createContext<LoginFormContextProps | null>(null);

//create Provider
function LoginFormProvider({ children }: LoginFormProviderProps) {
  //1-> login with image
  //2->login with password
  //3->lost img form
  const [selectedForm, setSelectedForm] = useState(1);

  return (
    <LoginFormContext.Provider value={{ selectedForm, setSelectedForm }}>
      {children}
    </LoginFormContext.Provider>
  );
}
//consume context
function useLoginForm() {
  const context = useContext(LoginFormContext);
  if (context === undefined)
    throw new Error("useLoginForm is being used outside its provider");
  return context;
}

export { LoginFormProvider, useLoginForm };
