export const locationVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);
  const postcodeValue = obj.postcode.length < 7;
  const addressValue = obj.street.length < 10;
  const stateValue = obj.state === 'Estado' || obj.state === undefined;

  return emptyValue || nullValue || postcodeValue || addressValue || stateValue;
};

export const personalVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);
  const genderValue = obj.gender === 'Gênero' || obj.gender === 'Sexo';
  const professionValue = obj.profession === 'Profissão';
  const cellphoneValue = obj.cellphone.length < 14;
  const identificationValue = obj.identification.length < 14;

  return (
    emptyValue ||
    nullValue ||
    genderValue ||
    professionValue ||
    cellphoneValue ||
    identificationValue
  );
};

export const productVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const invalidCategory = obj.category === 0;

  return emptyValue || invalidCategory;
};
