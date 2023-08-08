import { styled } from 'styled-components';

export const ListItems = styled.li`
  position: relative;
  width: calc((100% - 30px) / 3);
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.7);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out, filter 0.2s ease-out;
`;
