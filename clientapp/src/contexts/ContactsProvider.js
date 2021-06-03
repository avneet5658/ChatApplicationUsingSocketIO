import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const ContactsContext = React.createContext();

export function useContact() {
  return useContext(ContactsContext);
}

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  function createContact(id, name) {
    setContacts((prevContact) => {
      return [...prevContact, { id, name }];
    });
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
