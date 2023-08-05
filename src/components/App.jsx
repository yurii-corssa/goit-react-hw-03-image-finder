import { Component } from 'react';
import { GlobalStyle, Header, Section } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { getPhotos } from './services/api';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    getPhotos();
    return (
      <>
        <GlobalStyle />
        <Section>
          <Header>
            <Searchbar onSubmit={this.handleSearchQuery} />
          </Header>
        </Section>
      </>
    );
  }
}
