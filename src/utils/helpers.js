
//sort array in descending order
export const SortInDescending = (key, list) => {
  const data = list.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
  return data;
};



//constructs query string
const constructString = (param, values, key) => {
  const prefix = values[key - 1] ? "&" : "?";
  const name = param;
  const value = values[key];
  if (value) {
    return `${prefix}${name}=${value}`;
  } else {
    return "";
  }
};

//return constructed query string , where arg<<object>> contains the params
export const getQueryString = arg => {
  Object.keys(arg).forEach(key => arg[key] === undefined && delete arg[key]);

  const keys = Object.keys(arg);
  const values = Object.values(arg);

  const queryStringArray = keys.map((param, key) => {
    return constructString(param, values, key);
  });
  const queryString = queryStringArray.join("");

  return queryString;
};

//error message retriver
export const retrieveMessage = err => {
  if (
    err.response &&
    err.response.data &&
    err.response.data.error &&
    err.response.data.error.message
  ) {
    return err.response.data.error.message;
  } else if (err.response && err.response.data && err.response.data.message) {
    return err.response.data.message;
  } else if (err.response && err.response.data) {
    return err.response.data;
  } else if (err.message) {
    return err.message;
  } else {
    return err;
  }
};
