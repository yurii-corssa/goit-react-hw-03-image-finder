import { Component } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getPhotos } from 'components/services/api';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    searchQuery: '',
    page: 1,
    totalPages: '',
    data: [],
  };

  componentDidMount() {
    console.log('mount');
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('update');
    if (this.state.searchQuery !== this.props.searchQuery) {
      this.setState({ searchQuery: this.props.searchQuery });

      this.fetchData(this.props.searchQuery, this.state.page);
    }

    if (prevState.page !== this.state.page) {
      this.fetchData(this.props.searchQuery, this.state.page);
    }
  }

  async fetchData(currentSQ, page) {
    const data = await getPhotos(currentSQ, page);

    if (page > Math.ceil(data.totalHits / 3)) {
      console.log('end gallery');
      return;
    }

    this.setState({
      data: [...this.state.data, ...data.hits],
    });
  }

  loadMore() {
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    return (
      <>
        <List>
          <ImageGalleryItem data={this.state.data} />
        </List>
        {this.state.data.length > 0 && (
          <Button onClick={() => this.loadMore()}>Load More</Button>
        )}
      </>
    );
  }
}
