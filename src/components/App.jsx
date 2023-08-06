import { Component } from 'react';
import { GlobalStyle, Header, Section } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from './services/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loadMoreBtn: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      this.setState({ page: 1 });

      const images = await getPhotos(query, page);

      this.setState({
        images: [...images.hits],
        loadMoreBtn: page < Math.ceil(images.totalHits / 3),
      });
    }

    if (prevState.page !== page && prevState.query === query) {
      const images = await getPhotos(query, page);

      this.setState(prev => ({
        images: [...prev.images, ...images.hits],
        loadMoreBtn: page < Math.ceil(images.totalHits / 3),
      }));
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, loadMoreBtn } = this.state;
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
        </Section>
      </>
    );
  }
}
