export const onChange_onlyText = (text, callback) => {
  if (/^[a-zA-Z ]+$/.test(text) || text === '') {
    callback(text);
  }
};

export const onChange_onlyNumber = (text, callback) => {
  if (/^[0-9]+$/.test(text) || text === '') {
    callback(text);
  }
};

export const onChange_numberComma = (text, callback) => {
  if (/^[0-9\,]+$/.test(text) || text === '') {
    callback(text);
  }
};
