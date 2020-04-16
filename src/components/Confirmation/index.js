import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import Column from '../common/Column';

const Confirmation = ({ code }) => {
  const title = code.includes('error')
    ? 'Hmm, something went wrong'
    : 'Confirmation code';
  return (
    <Modal>
      <ModalHeader title={title} />
      <FormContainer>
        <div>{code}</div>
      </FormContainer>
    </Modal>
  );
};

const FormContainer = styled(Column)`
  width: 100%;
  height: 50px;
  align-self: center;
`;
export default Confirmation;
