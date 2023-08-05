// import { ListItem } from './ImageGalleryItem.styled';

import { ListItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ data }) => {
  return data.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ListItems key={id}>
        <img src={webformatURL} alt={tags} />
      </ListItems>
    );
  });
};
