import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onClose);
  }

  onClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.onClose}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Backdrop>,
      modalRoot
    );
  }
}
