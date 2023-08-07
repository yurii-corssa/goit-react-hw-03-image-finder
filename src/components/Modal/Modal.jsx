import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.onCloseModal);
    this.props.onLoading(true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onCloseModal);
  }

  render() {
    const { onCloseModal, children } = this.props;

    return createPortal(
      <Backdrop onClick={onCloseModal}>
        <ModalContainer>{children}</ModalContainer>
      </Backdrop>,
      modalRoot
    );
  }
}
