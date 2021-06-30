import React, { useState } from "react";

import Modal from "react-modal";

import "./App.css";
Modal.setAppElement("#root");
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>open Modal</button>

      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setIsOpen(false)}>close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
