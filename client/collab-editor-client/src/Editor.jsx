import { useEffect, useState } from "react";
import { socket, joinDocument } from "./socket";

export default function Editor() {
  const [text, setText] = useState("");

  useEffect(() => {
    joinDocument("shared-notes");

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "sync" || msg.type === "update") {
        setText(msg.content);
      }
    };
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    socket.send(
      JSON.stringify({
        type: "update",
        content: value,
      })
    );
  }

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Start taking notes here..."
      rows={18}
      style={{
        width: "100%",
        fontSize: "16px",
        padding: "12px",
        borderRadius: "6px",
      }}
    />
  );
}
