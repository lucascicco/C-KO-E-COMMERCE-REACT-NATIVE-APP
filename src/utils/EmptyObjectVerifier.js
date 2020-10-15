import api from '~/services/api';

export const locationVerifier = async (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  const response_cep = await api.get('checkingCep', {
    params: {
      postcode: obj.postcode,
    },
  });

  const postcodeValidation = !response_cep.data;

  const addressValue = obj.street.length < 7;
  const stateValue = obj.state === 'Estado' || obj.state === undefined;

  return (
    emptyValue || nullValue || addressValue || stateValue || postcodeValidation
  );
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

export const AccountVerifierChange = (obj) => {
  const nameValue = obj.name.length < 6;
  const emailValue = !obj.email.includes('@') || obj.email.length < 7;
  let checkingPasswords = false;

  if (obj.password || obj.oldPassword) {
    checkingPasswords = obj.password === obj.oldPassword || obj.password < 6;
  }

  return checkingPasswords || emailValue || nameValue;
};

export const AccountVerifierCreate = (obj) => {
  const nameValue = obj.name.length < 7;
  const emailValue = !obj.email.includes('@') || obj.email.length < 7;

  const checkingPasswords = obj.password !== obj.secondPassword;

  return checkingPasswords || emailValue || nameValue;
};
