import { Input } from 'components/Input/Input';
import { SearchBar, SearchBtn, SearchIcon } from './Searchbar.styled';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    console.log(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchBar onSubmit={this.handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
        <SearchBtn type="submit">
          <SearchIcon />
        </SearchBtn>
      </SearchBar>
    );
  }
}
