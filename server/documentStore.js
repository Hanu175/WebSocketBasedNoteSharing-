// Simple in-memory document storage
const documents = new Map();

function getDocument(docId) {
  if (!documents.has(docId)) {
    documents.set(docId, "");
  }
  return documents.get(docId);
}

function updateDocument(docId, content) {
  documents.set(docId, content);
}

module.exports = {
  getDocument,
  updateDocument,
};
