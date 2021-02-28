import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function ModalCodeevolution() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Codeevolution</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
          content: {
            color: 'red',
          },
        }}
      >
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a ModalCodeevolution</div>
      </Modal>
    </div>
  );
}

export default ModalCodeevolution;
