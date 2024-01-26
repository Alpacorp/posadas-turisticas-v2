import { createContext, useState, useMemo } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({
  showModal: false,
  setShowModal: (showModal: boolean) => {},
  idModal: 0,
  setIdModal: (idModal: number) => {},
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [idModal, setIdModal] = useState(0);

  const contextValue = useMemo(
    () => ({
      showModal,
      setShowModal,
      idModal,
      setIdModal,
    }),
    [showModal, setShowModal, idModal, setIdModal]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
