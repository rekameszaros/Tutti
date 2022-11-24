import { createContext, useState, useContext } from "react";

const Context = createContext();

export default function GlobalContext({ children }) {
  const [contacts, setContacts] = useState([]);

  const initialValues = {
    contacts,
    setContacts,
  };

  return <Context.Provider value={initialValues}>{children}</Context.Provider>;
}

export const useGlobalContext = () => useContext(Context);
