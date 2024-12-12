"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface VerifyOTPProviderProps {
  children: ReactNode;
}
interface VerifyOTPContextProps {
  OTPVerified: boolean;
  setOTPVerified: Dispatch<SetStateAction<boolean>>;
}
//createContext
const VerifyOTPContext = createContext<VerifyOTPContextProps | null>(null);

//createProvider
function VerifyOTPProvider({ children }: VerifyOTPProviderProps) {
  const [OTPVerified, setOTPVerified] = useState(false);

  return (
    <VerifyOTPContext.Provider value={{ OTPVerified, setOTPVerified }}>
      {children}
    </VerifyOTPContext.Provider>
  );
}
//consume provider

function useVerifyOTP() {
  const context = useContext(VerifyOTPContext);
  if (context === undefined)
    throw new Error("useVerifyOTP is used outside the context");
  return context;
}

export { VerifyOTPProvider, useVerifyOTP };
