import ContentLoader from 'react-content-loader';
import { styled } from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

export const ImageLoader = styled(ContentLoader)`
  width: calc((100% - 30px) / 3);
  height: 250px;
`;
