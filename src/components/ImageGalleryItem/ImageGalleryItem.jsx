import { ListItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ListItems key={id} onClick={() => onOpenModal(largeImageURL, tags)}>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </ListItems>
    );
  });
};
