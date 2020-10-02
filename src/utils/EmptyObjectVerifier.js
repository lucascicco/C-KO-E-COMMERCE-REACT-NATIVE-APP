export const locationVerifier = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);
  const freteValue = obj.postcode.length < 7;
  const addressValue = obj.street.length < 10;

  return emptyValue || nullValue || freteValue || addressValue;
};
