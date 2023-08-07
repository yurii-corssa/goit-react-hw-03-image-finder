import { styled } from 'styled-components';

export const Btn = styled.button`
  width: 100%;
  padding: 15px 15px;
  margin-bottom: 20px;
  color: #fff;
  background-color: var(--main-color);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
  transition: filter 0.2s ease-out;
  &:hover,
  :focus {
    /* background-color: #ce3d64; */
    filter: brightness(1.3);
  }
`;
