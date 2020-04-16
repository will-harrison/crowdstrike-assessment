import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useFormik } from 'formik';
import formatSubmit from '../../utils/formatSubmit';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import { AppState } from '../../context';
import Confirmation from '../Confirmation';
import Row from '../common/Row';
import Column from '../common/Column';
import Button from '../common/Button';
import { postBookParty } from '../../api';

const movieSchema = [
  { key: 'movie', initialValue: '', type: 'text', required: true },
  { key: 'rating', initialValue: '', type: 'text', required: true },
  { key: 'runtime', initialValue: '', type: 'number', required: true },
  { key: 'start_time', initialValue: '', type: 'time', required: true },
  { key: 'end_time', initialValue: '', type: 'time', required: true },
  { key: 'attendees', initialValue: [], type: 'text', required: true },
];

const MovieParty = ({ schema }) => {
  const { setModalComponent } = useContext(AppState);
  const formik = useFormik({
    initialValues: {
      movie: 'Bambi',
      rating: 'R',
      runtime: 45,
      start_time: '01:01',
      end_time: '02:02',
      attendees: 'Will, tony',
    },
    onSubmit: async (values) => {
      const formattedValues = formatSubmit(values);
      const code = await postBookParty('MovieParty', formattedValues);
      setModalComponent(<Confirmation code={code} />);
    },
  });

  return (
    <Modal>
      <ModalHeader title={schema.displayText} />
      <FormContainer>
        <Form onSubmit={formik.handleSubmit}>
          {movieSchema.map((schema) => {
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
  align-self: flex-end;
  text-transform: capitalize;
  font-family: 'Montserrat';
`;

const Input = styled.input`
  width: 50%;
  justify-content: flex-end;
`;

export default MovieParty;
