import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ images, loadMoreBtn, onLoadMore }) => {
  return (
    <>
      <List>
        <ImageGalleryItem images={images} />
      </List>
      {loadMoreBtn && <Button onClick={onLoadMore}>Load More</Button>}
    </>
  );
};
