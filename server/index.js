const WebSocket = require("ws");
const { getDocument, updateDocument } = require("./documentStore");
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "notes.txt");

if (data.type === "update") {
  updateDocument(ws.docId, data.content);

  // Save to file
  fs.writeFileSync(FILE_PATH, data.content, "utf-8");

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "update",
          content: data.content,
        })
      );
    }
  });
}


if (data.type === "join") {
  ws.docId = data.docId;

  let content = "";
  if (fs.existsSync(FILE_PATH)) {
    content = fs.readFileSync(FILE_PATH, "utf-8");
  }

  updateDocument(ws.docId, content);

  ws.send(
    JSON.stringify({
      type: "sync",
      content,
    })
  );
}


const PORT = 3001;

// Create WebSocket server (ONLY ONCE)
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const data = JSON.parse(message.toString());

    // User joins a document
    if (data.type === "join") {
      ws.docId = data.docId;

      const content = getDocument(ws.docId);

      ws.send(
        JSON.stringify({
          type: "sync",
          content,
        })
      );
    }

    // User updates the document
    if (data.type === "update") {
      updateDocument(ws.docId, data.content);

      // Broadcast update to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "update",
              content: data.content,
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
