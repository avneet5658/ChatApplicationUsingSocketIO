import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return <div>{id ? dashboard : <Login onIdSubmit={setId} />}</div>;
}

export default App;
