import React from 'react';
import Modal from 'react-modal';


const OptionalModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      ariaHideApp={false}
      onRequestClose={props.handleHideModal}
      closeTimeoutMS={0}
      className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    <h4 className="modal__body">{props.selectedOption}</h4>
    <button className="button" onClick={props.handleHideModal}>Okay</button>
    </Modal>
  )
}

export default OptionalModal;