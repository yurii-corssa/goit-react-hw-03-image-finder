// import { ListItem } from './ImageGalleryItem.styled';

import { ListItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ListItems key={id}>
        <img src={webformatURL} alt={tags} />
      </ListItems>
    );
  });
};
