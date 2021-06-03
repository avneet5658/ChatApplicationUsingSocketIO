import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactsModal from "./NewContactsModal";
import NewConversationModal from "./NewConversationsModel";
const CONVERSTATION_KEY = "conversation";
const CONTACTS_KEY = "contacts";
const Sidebar = ({ id }) => {
  const [activateKey, setActiveKey] = useState(CONVERSTATION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activateKey === CONVERSTATION_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <div style={{ width: "250px" }} className="d-flex flex-column">
        <Tab.Container activeKey={activateKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey={CONVERSTATION_KEY}>Conversation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="border-end overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSTATION_KEY}>
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-end">
            Your Id : <span className="text-muted">{id}</span>
          </div>
          <Button className="rounded-0" onClick={() => setModalOpen(true)}>
            {conversationsOpen ? "New Conversation" : "New Contact"}
          </Button>
        </Tab.Container>
        <Modal animation={false} show={modalOpen} onHide={closeModal}>
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactsModal closeModal={closeModal} />
          )}
        </Modal>
      </div>
    </>
  );
};

export default Sidebar;
