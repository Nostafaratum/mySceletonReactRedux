import React from 'react';

class ModalWindow extends React.Component {
  state = {
    isOpen: false,
  };

  closeModal = e => {
    if (
      e.target.classList[0] === 'modal-wrapper' ||
      e.target.classList[0] === 'modal-wrapper__inner' ||
      e.target.classList[0] === 'close'
    ) {
      this.props.closeModal(e);
    }
  };

  render() {
    return (
      <div className="modal-wrapper" onClick={this.closeModal}>
        <div className="modal-wrapper__inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ModalWindow;
