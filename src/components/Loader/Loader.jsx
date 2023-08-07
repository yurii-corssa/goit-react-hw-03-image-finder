import { LoadWrapper } from './Loader.styled';
import { PuffLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <LoadWrapper>
      <PuffLoader color="#fff" />
    </LoadWrapper>
  );
};
