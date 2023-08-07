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
