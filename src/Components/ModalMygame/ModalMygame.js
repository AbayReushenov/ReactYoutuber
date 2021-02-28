import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'grey',
  },
};

function ModalMygame(props) {
  // console.log(props);
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open ModalMygame</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Props</h2>

        <div>object key A: {props.slovo[0].a}</div>
        <div>object key B: {props.slovo[0].b}</div>
        <form>
          <input placeholder={props.slovo[1].a} />

          <button>{props.slovo[1].b}</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default ModalMygame;
