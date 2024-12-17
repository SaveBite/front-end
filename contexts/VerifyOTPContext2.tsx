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
  otpCode: string;
  setOTPCode: Dispatch<SetStateAction<string>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}
//createContext
const VerifyOTPContext = createContext<VerifyOTPContextProps | null>(null);

//createProvider
function VerifyOTPProvider2({ children }: VerifyOTPProviderProps) {
  const [OTPVerified, setOTPVerified] = useState(false); // flag for meet the condition
  const [otpCode, setOTPCode] = useState(" "); // value of the otp
  const [error, setError] = useState(false); // flag for the error state

  return (
    <VerifyOTPContext.Provider
      value={{
        OTPVerified,
        setOTPVerified,
        otpCode,
        setOTPCode,
        error,
        setError,
      }}
    >
      {children}
    </VerifyOTPContext.Provider>
  );
}
//consume provider

function useVerifyOTP2() {
  const context = useContext(VerifyOTPContext);
  if (context === undefined)
    throw new Error("useVerifyOTP is used outside the context");
  return context;
}

export { VerifyOTPProvider2, useVerifyOTP2 };
