import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
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

const dinnerSchema = [
  { key: 'dinner', initialValue: '', type: 'text' },
  { key: 'dessert', initialValue: '', type: 'text' },
  { key: 'start_time', initialValue: undefined, type: 'time' },
  { key: 'end_time', initialValue: undefined, type: 'time' },
  {
    key: 'attendees',
    initialValue: [],
    type: 'text',
    placeholder: 'comma separated',
  },
];

const DinnerParty = ({ schema }) => {
  const { setModalComponent } = useContext(AppState);
  const formik = useFormik({
    initialValues: {
      dinner: 'Pork',
      dessert: 'pies',
      start_time: '18:30',
      end_time: '20:30',
      attendees: 'tony, will',
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
          {dinnerSchema.map((schema) => {
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
                    placeholder={schema.placeholder}
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

export default DinnerParty;
