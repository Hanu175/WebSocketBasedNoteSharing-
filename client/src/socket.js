export const socket = new WebSocket("ws://localhost:3001");

export function joinDocument(docId) {
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: "join",
        docId,
      })
    );
  };
}
