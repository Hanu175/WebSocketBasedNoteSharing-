// Create WebSocket connection to backend
export const socket = new WebSocket("ws://localhost:3001");

// Join a shared document
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
