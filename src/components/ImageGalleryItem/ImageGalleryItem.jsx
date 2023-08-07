import { ItemImage } from 'components/ItemImage/ItemImage';
import { ListItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ListItems key={id} onClick={() => onOpenModal(largeImageURL, tags)}>
        <ItemImage src={webformatURL} alt={tags} />
      </ListItems>
    );
  });
};
