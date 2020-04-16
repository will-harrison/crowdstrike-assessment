import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppState } from '../../context';

import Row from '../common/Row';
import closeIcon from '../../assets/close.png';

const ModalHeader = ({ title }) => {
  const { setModalOpen } = useContext(AppState);
  return (
    <ModalRow justify='space-between'>
      <Title>{title}</Title>
      <Icon
        src={closeIcon}
        alt='Close modal'
        onClick={() => setModalOpen(false)}
      />
    </ModalRow>
  );
};

const ModalRow = styled(Row)`
  width: 100%;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  justify-self: center;
`;

const Title = styled.div`
  flex: 2;
  font-size: 24px;
  font-weight: bold;
  justify-self: flex-start;
  letter-spacing: 0.24em;
  margin-left: 12px;
  text-transform: uppercase;
`;

export default ModalHeader;
