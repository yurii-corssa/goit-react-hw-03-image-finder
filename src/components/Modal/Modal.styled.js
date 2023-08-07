import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  height: 90vh;
  * {
    height: 100%;
  }
`;
