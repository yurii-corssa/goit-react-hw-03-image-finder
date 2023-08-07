import { Component } from 'react';
import { GlobalStyle, Header, Section } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from './services/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loadMoreBtn: false,
    loader: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      this.handleLoader();
      this.setState({ page: 1 });

      const images = await getPhotos(query, page);

      this.setState({
        images: [...images.hits],
        loadMoreBtn: page < Math.ceil(images.totalHits / 12),
      });
      this.handleLoader();
    }

    if (prevState.page !== page && prevState.query === query) {
      this.handleLoader();

      const images = await getPhotos(query, page);

      this.setState(prev => ({
        images: [...prev.images, ...images.hits],
        loadMoreBtn: page < Math.ceil(images.totalHits / 12),
      }));
      this.handleLoader();
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleLoader = () => {
    this.setState(prev => ({ loader: !prev.loader }));
  };

  render() {
    const { images, loadMoreBtn, loader } = this.state;
    return (
      <>
        <GlobalStyle />
        <Section>
          <Header>
            <Searchbar onSubmit={this.handleSubmit} />
          </Header>
        </Section>
        <Section>
          <ImageGallery
            images={images}
            loadMoreBtn={loadMoreBtn}
            onLoadMore={this.loadMore}
          />
          {loader && <Loader />}
          {loadMoreBtn && <Button onClick={this.loadMore}>Load More</Button>}
        </Section>
      </>
    );
  }
}
