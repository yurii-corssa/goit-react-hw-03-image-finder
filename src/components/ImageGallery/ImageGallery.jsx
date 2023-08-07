import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    isLoading: false,
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

  handleIsLoad = value => {
    console.log('re');
    this.setState({
      isLoading: value,
    });
  };

  render() {
    const { isModalOpen, isLoading, image, tags } = this.state;

    return (
      <>
        <List>
          <ImageGalleryItem
            images={this.props.images}
            onOpenModal={this.openModal}
          />
        </List>
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onCloseModal={this.closeModal} onLoading={this.handleIsLoad}>
            <img
              src={image}
              alt={tags}
              loading="lazy"
              onLoad={() => this.handleIsLoad(false)}
            />
          </Modal>
        )}
      </>
    );
  }
}
