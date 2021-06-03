import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContact } from "../contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContact();

  return (
    <>
      <div>Contacts</div>
      <ListGroup variant="flush">
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Contacts;
