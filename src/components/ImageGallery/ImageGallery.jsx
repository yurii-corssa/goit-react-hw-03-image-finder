import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    image: '',
    tags: '',
  };

  openModal = (image, tags) => {
    this.setState({ isModalOpen: true, image, tags });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen, image, tags } = this.state;

    return (
      <>
        <List>
          <ImageGalleryItem
            images={this.props.images}
            onOpenModal={this.openModal}
          />
        </List>
        {isModalOpen && (
          <Modal onCloseModal={this.closeModal}>
            <img src={image} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
