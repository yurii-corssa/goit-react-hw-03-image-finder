import { List, ListContainer } from './ImageGallery.styled';
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
    this.setState({ isModalOpen: true, image, tags, isLoading: true });
  };

  closeModal = () => this.setState({ isModalOpen: false, image: '', tags: '' });

  isLoadedModal = () => this.setState({ isLoading: false });

  render() {
    const { isModalOpen, isLoading, image, tags } = this.state;
    const { images } = this.props;

    return (
      <ListContainer>
        <List>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              alt={tags}
              onClick={() => this.openModal(largeImageURL, tags)}
            />
          ))}
        </List>

        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img
              src={image}
              alt={tags}
              loading="lazy"
              onLoad={this.isLoadedModal}
            />
            {isLoading && <Loader />}
          </Modal>
        )}
      </ListContainer>
    );
  }
}

// return (
//   <ListContainer>
//     <List>
//       <ImageGalleryItem images={images} onOpenModal={this.openModal} />
//     </List>
//     {!images.length && !isNotFound && (
//       <Notification text="Welcome to the image search page! Explore and find captivating pictures using keywords." />
//     )}

//     {!images.length && isNotFound && (
//       <Notification text="Unfortunately, nothing was found for your query. Please try a different search." />
//     )}

//     {isLoading && <Loader />}
//     {isModalOpen && (
//       <Modal onCloseModal={this.closeModal} onLoading={this.handleIsLoad}>
//         <img
//           src={image}
//           alt={tags}
//           loading="lazy"
//           onLoad={() => this.handleIsLoad(false)}
//         />
//       </Modal>
//     )}
//   </ListContainer>
// );
