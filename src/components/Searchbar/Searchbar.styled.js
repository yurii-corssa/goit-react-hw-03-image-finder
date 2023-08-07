import { styled } from 'styled-components';
import { Search } from 'components/Icons/Search';

export const SearchBar = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;
  overflow: hidden;
  color: var(--light-font);
  background-color: var(--search-area-bg);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
`;

export const SearchBtn = styled.button`
  position: relative;
  width: 40px;
  height: 100%;
  border: none;
  outline: none;
  background-color: var(--search-area-bg);
  color: var(--main-color);
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
