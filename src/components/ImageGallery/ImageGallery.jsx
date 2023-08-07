import { List, ListContainer } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    isLoading: false,
    image: '',
    tags: '',
    isNotFound: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.props;

    if (prevProps.images !== images && images.length > 0) {
      this.setState({ isNotFound: false });
    }

    if (prevProps.images !== images && images.length === 0) {
      this.setState({ isNotFound: true });
    }
  }

  openModal = (image, tags) => {
    this.setState({ isModalOpen: true, image, tags });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  handleIsLoad = value => {
    this.setState({
      isLoading: value,
    });
  };

  render() {
    const { isModalOpen, isLoading, image, tags, isNotFound } = this.state;
    const { images } = this.props;

    return (
      <ListContainer>
        <List>
          <ImageGalleryItem images={images} onOpenModal={this.openModal} />
        </List>
        {!images.length && !isNotFound && (
          <Notification text="Welcome to the image search page! Explore and find captivating pictures using keywords." />
        )}

        {!images.length && isNotFound && (
          <Notification text="Unfortunately, nothing was found for your query. Please try a different search." />
        )}

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
      </ListContainer>
    );
  }
}
