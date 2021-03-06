import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectedConversationIndex } = useConversation();
  return (
    <>
      <ListGroup variant="flush">
        {conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => {
              selectedConversationIndex(index);
            }}
            active={conversation.selected}
          >
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Conversations;
