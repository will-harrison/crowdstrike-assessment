import React, { useContext } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import formatSubmit from '../../utils/formatSubmit';
import { postBookParty } from '../../api';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import { AppState } from '../../context';
import Confirmation from '../Confirmation';
import Column from '../common/Column';
import Row from '../common/Row';
import Button from '../common/Button';

const poolSchema = [
  { key: 'water_temp', initialValue: '', type: 'int' },
  { key: 'start_time', initialValue: undefined, type: 'time' },
  { key: 'end_time', initialValue: undefined, type: 'time' },
  { key: 'attendees', initialValue: [], type: 'text' },
];

const PoolParty = ({ schema }) => {
  console.log(schema.schema);

  const { setModalComponent } = useContext(AppState);
  const formik = useFormik({
    initialValues: {
      water_temp: 72,
      start_time: '01:01',
      end_time: '13:12',
      attendees: 'will',
    },
    onSubmit: async (values) => {
      const formattedValues = formatSubmit(values);
      const code = await postBookParty(schema.id, formattedValues);
      setModalComponent(<Confirmation code={code} />);
    },
  });

  return (
    <Modal>
      <ModalHeader title={schema.displayText} />
      <FormContainer>
        <Form onSubmit={formik.handleSubmit}>
          {poolSchema.map((schema) => {
            return (
              <Column key={schema.key}>
                <ModalRow>
                  <Label>{schema.key}</Label>
                  <Input
                    type={schema.type}
                    id={schema.key}
                    name={schema.key}
                    onChange={formik.handleChange}
                    value={formik.values[schema.key]}
                    required={schema.required}
                  />
                </ModalRow>
              </Column>
            );
          })}
          <FormContainer>
            <Button type='submit' onClick={formik.handleSubmit}>
              Book Now
            </Button>
          </FormContainer>
        </Form>
      </FormContainer>
    </Modal>
  );
};

const FormContainer = styled(Column)`
  width: 100%;
  align-self: center;
  /* justify-content: space-evenly; */
`;
const ModalRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 8px;
`;

const Form = styled.form`
  align-self: center;
`;

const Label = styled.label`
  padding-right: 5px;
  align-self: flex-end;
`;

const Input = styled.input`
  width: 50%;
  justify-content: flex-end;
`;

export default PoolParty;
