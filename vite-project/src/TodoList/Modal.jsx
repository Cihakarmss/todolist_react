import React from "react";

function Modal(props) {
  const { closeModal, todo, OnDelete } = props;
  function handleClose() {
    if (OnDelete) OnDelete();
    closeModal();
  }

  return (
    <div className="modal">
      <div className="modal-border">
        <h2>Todo Details</h2>
        <p>{todo}</p>
        <button onClick={() => handleClose()}>Delete</button>
      </div>
    </div>
  );
}

export default Modal;
