import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

export const ListContainer = styled.div`
  padding: 30px 15px;
  margin-bottom: 20px;
  background-color: var(--search-area-bg);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
`;
