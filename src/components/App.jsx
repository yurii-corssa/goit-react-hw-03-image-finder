import { Component } from 'react';
import { GlobalStyle, Header, Section } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section>
          <Header>
            <Searchbar onSubmit={this.handleSubmit} />
          </Header>
        </Section>
        <Section>
          <ImageGallery searchQuery={this.state.searchQuery} />
        </Section>
      </>
    );
  }
}
