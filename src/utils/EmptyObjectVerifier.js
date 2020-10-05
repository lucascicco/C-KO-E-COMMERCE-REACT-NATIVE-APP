export const locationVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);
  const postcodeValue = obj.postcode.length < 7;
  const addressValue = obj.street.length < 10;
  const stateValue = obj.state === 'ESTADO' || obj.state === undefined;

  return emptyValue || nullValue || postcodeValue || addressValue || stateValue;
};

export const personalVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);
  const genderValue = obj.gender.length < 7;
  const professionValue = obj.profession.length < 10;
  const cellphoneValue = obj.cellphone.length < 15;
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
