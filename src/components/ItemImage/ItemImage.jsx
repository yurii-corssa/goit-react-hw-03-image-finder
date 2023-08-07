import { Component } from 'react';
import { Image } from './ItemImage.styled';
// import { ImgLoader } from 'components/ImageLoader/ImageLoader.styled';
import { ImageLoader } from 'components/ImageLoader/ImageLoader';

export class ItemImage extends Component {
  state = {
    isLoad: false,
  };

  handleIsLoad = () => this.setState({ isLoad: true });

  render() {
    const { src, alt } = this.props;

    return (
      <>
        <Image src={src} alt={alt} loading="lazy" onLoad={this.handleIsLoad} />
        {!this.state.isLoad && <ImageLoader />}
      </>
    );
  }
}
