import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppState } from '../../context';
import Column from '../common/Column';

const Modal = ({ children }, props) => {
  const { isModalOpen } = useContext(AppState);

  return (
    <ModalBackground isModalOpen={isModalOpen}>
      <ModalBody {...props}>{isModalOpen && children}</ModalBody>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  background-color: rgba(51, 102, 153, 0.15);
  bottom: 0;
  display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled(Column)`
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid rgba(27, 29, 30, 0.16);
  border-radius: 8px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  justify-content: flex-start;
  max-height: 90vh;
  min-height: 20vh;
  min-width: 736px;
  overflow-y: auto;
  padding: 32px 24px;
  z-index: 10;
`;

export default Modal;
