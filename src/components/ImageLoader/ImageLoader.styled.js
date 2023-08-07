import ContentLoader from 'react-content-loader';
import { styled } from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

export const ImgLoader = styled(ContentLoader)`
  width: 100%;
  height: 100%;
`;
