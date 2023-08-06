import { Input } from 'components/Input/Input';
import { SearchBar, SearchBtn, SearchIcon } from './Searchbar.styled';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchBar onSubmit={this.handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <SearchBtn type="submit">
          <SearchIcon />
        </SearchBtn>
      </SearchBar>
    );
  }
}
