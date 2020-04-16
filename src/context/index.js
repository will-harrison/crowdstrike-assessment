import React, { createContext, useState, useEffect } from 'react';
import { getPartyTypes, getPartySchema } from '../api';

export const AppState = createContext();

export const AppStateProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState({});
  const [partySchemas, setPartySchemas] = useState([]);

  useEffect(() => {
    const buildPartySchema = async () => {
      const rawPartyTypes = await getPartyTypes();
      return Promise.all(
        rawPartyTypes.map(async (type) => {
          const schema = await getPartySchema(type);

          return {
            id: type,
            displayText: `${type.slice(0, -5)} ${type.slice(-5)}`,
            image: '',
            schema,
          };
        })
      );
    };
    buildPartySchema().then((res) => {
      setPartySchemas(res);
    });
  }, []);

  const output = {
    partySchemas,
    isModalOpen,
    setModalOpen,
    modalComponent,
    setModalComponent,
  };

  return <AppState.Provider value={output}>{children}</AppState.Provider>;
};
