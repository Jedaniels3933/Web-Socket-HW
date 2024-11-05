import React, { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Socket } from "socket.io-client";

interface SocketProps {
    socket: Socket
}

const MessageInput = ({ socket }: SocketProps) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (event: FormEvent) => {
        event.preventDefault();
        console.log("testing!!!")
      
        socket.emit('message', { data: message })
        setMessage("")
    }

  return (
    <Form onSubmit={handleSendMessage} className="my-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Message"
          autoComplete="off"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MessageInput;
