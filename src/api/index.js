const partyTypes = () =>
  `https://frontend-api-exercise.herokuapp.com/partytypes`;
const schemas = (partyType) =>
  `https://frontend-api-exercise.herokuapp.com/partytype/${partyType}`;
const testBookParty = () =>
  `https://frontend-api-exercise.herokuapp.com/bookparty`;
const bookParty = () =>
  `https://frontend-api-exercise.herokuapp.com/bookpartyprod`;

export const getPartyTypes = () =>
  fetch(partyTypes())
    .then((res) => res.json())
    .catch((err) => console.log(err));

export const getPartySchema = (partyType) =>
  fetch(schemas(partyType))
    .then((res) => res.json())
    .catch((err) => console.log(err));

export const postBookParty = (partyType, data) => {
  console.table(data);

  return fetch(testBookParty({ partyType, data }), {
    method: 'POST',
    cors: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ party_type: partyType, data }),
  })
    .then((res) => res.text())
    .catch((err) => console.log(err));
};
