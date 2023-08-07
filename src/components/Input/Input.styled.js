import { styled } from 'styled-components';

export const InputStyle = styled.input`
  border: none;
  outline: none;
  font-family: 'Exo 2', sans-serif;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);

  &:placeholder {
    color: var(--main-color);
    opacity: 0.6;
  }
`;
