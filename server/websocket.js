const Y = require("yjs");

const docs = new Map();

function setupWSConnection(ws, wss) {
  let doc;

  ws.on("message", (message) => {
    const data = JSON.parse(message);

    if (data.type === "join") {
      if (!docs.has(data.docId)) {
        docs.set(data.docId, new Y.Doc());
      }
      doc = docs.get(data.docId);

      ws.send(
        JSON.stringify({
          type: "sync",
          content: doc.getText("shared").toString(),
        })
      );
    }

    if (data.type === "update") {
      doc.getText("shared").delete(0, doc.getText("shared").length);
      doc.getText("shared").insert(0, data.content);

      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === 1) {
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
}

module.exports = { setupWSConnection };
