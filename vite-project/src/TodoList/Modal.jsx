import React from "react";

function Modal(props) {
  const { closeModal, todo } = props;
  
  

  return (
    <div className="modal">
        <div className="modal-border">
      
      <h2>Todo Details</h2>
      <p>{todo}</p>
      <button onClick={closeModal}></button>
    </div>
    </div>
  );
}

export default Modal;
