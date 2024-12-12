"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface NoUserContextType {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
interface NoUserPropviderProps {
  children: ReactNode;
}
// define context
const NoUserContext = createContext<NoUserContextType | null>(null);

//provideContext
function NoUserProvider({ children }: NoUserPropviderProps) {
  const [visible, setVisible] = useState(false);

  return (
    <NoUserContext.Provider value={{ visible, setVisible }}>
      {children}
    </NoUserContext.Provider>
  );
}
//hook to get to the context
function useNoUser() {
  const context = useContext(NoUserContext);
  if (context === undefined)
    throw new Error("useNoUser is being used outside its provider");
  return context;
}
export { NoUserProvider, useNoUser };
