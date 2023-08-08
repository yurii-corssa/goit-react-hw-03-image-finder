import { Component } from 'react';
import { GlobalStyle, Header, Section } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from './services/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loadMoreBtn: false,
    loader: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.handleLoader();

      try {
        const images = await getPhotos(query, page);

        this.setState(prev => ({
          images: [...prev.images, ...images.hits],
          loadMoreBtn: page < Math.ceil(images.totalHits / 12),
        }));
      } catch {
        this.setState({ error: true });
      } finally {
        this.handleLoader();
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleLoader = () => {
    this.setState(prev => ({ loader: !prev.loader }));
  };

  render() {
    const { images, loadMoreBtn, loader, query, error } = this.state;
    const message = {
      galleryEnd: `No more images were found for your query "${query}". Please try another search.`,
      greeting:
        'Welcome to the image search page! Explore and find captivating pictures using keywords.',
      notFound: `Unfortunately, nothing found for your search "${query}". Please try another search.`,
      error:
        'Oops, something went wrong, please reload the page or try again later',
    };

    return (
      <>
        <GlobalStyle />
        <Section>
          <Header>
            <Searchbar onSubmit={this.handleSubmit} />
          </Header>
        </Section>
        <Section>
          {images.length > 0 && <ImageGallery images={images} />}
        </Section>
        <Section>
          {loadMoreBtn && <Button onClick={this.loadMore}>Load More</Button>}
          {images.length > 0 && !loadMoreBtn && (
            <Notification text={message.galleryEnd} />
          )}
          {!images.length && !query && <Notification text={message.greeting} />}
          {!images.length && query && <Notification text={message.notFound} />}
          {error && <Notification text={message.error} />}
          {loader && <Loader />}
        </Section>
      </>
    );
  }
}
