import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/components/Modal.css';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
