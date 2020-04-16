import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import './App.css';
import Column from './components/common/Column';
import { AppState } from './context';
import Modal from './components/Modal';
import MovieParty from './components/MovieParty';
import DinnerParty from './components/DinnerParty';
import PoolParty from './components/PoolParty';

function App() {
  const context = useContext(AppState);
  const {
    partySchemas,
    setModalOpen,
    modalComponent,
    setModalComponent,
  } = context;
  const handleBookParty = (partyType) => {
    const activeSchema = partySchemas.find((s) => s.id === partyType);
    const partyModals = {
      MovieParty: <MovieParty schema={activeSchema} />,
      DinnerParty: <DinnerParty schema={activeSchema} />,
      PoolParty: <PoolParty schema={activeSchema} />,
    };
    setModalComponent(partyModals[partyType]);
    setModalOpen(true);
  };

  return (
    <Fragment>
      <Modal>{modalComponent}</Modal>
      <Container>
        <HeaderText>Let's Book a</HeaderText>

        {partySchemas.map((type) => {
          return (
            <PartyText key={type.id} onClick={() => handleBookParty(type.id)}>
              {type.displayText}
            </PartyText>
          );
        })}
      </Container>
    </Fragment>
  );
}

const Container = styled(Column)`
  z-index: 1;
`;

const HeaderText = styled.div`
  font-family: 'Montserrat';
  font-size: 48px;
  margin-top: 50px;
`;

const PartyText = styled.a`
  font-family: 'Roboto';
  font-size: 32px;
  padding: 24px;
`;

export default App;
