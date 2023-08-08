import { Image, ListItems } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ImageLoader } from 'components/ImageLoader/ImageLoader';

export class ImageGalleryItem extends Component {
  state = {
    isLoad: false,
  };

  handleIsLoad = () => this.setState({ isLoad: true });

  render() {
    const { image, alt, onClick } = this.props;

    return (
      <ListItems onClick={onClick}>
        <Image
          src={image}
          alt={alt}
          loading="lazy"
          onLoad={this.handleIsLoad}
        />
        {!this.state.isLoad && <ImageLoader />}
      </ListItems>
    );
  }
}
