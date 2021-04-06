import axios from 'axios';

const apiObj = axios.create({
  baseURL: 'https://api.jsonbin.io/b/',
  timeout: 3000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

apiObj.defaults.headers.post['Content-Type'] = 'application/json';

const sendError = (status, message, responseJson = {}): Object => {
  const err = {status, message, responseJson};
  throw err;
};

type RequestParam = {
  path: string,
  method?: 'GET',
  params?: Object,
};

export const API = async ({
  path,
  method = 'GET',
  params,
}: RequestParam): Promise<Object> => {
  // TODO PUT and DELETE handling
  let response = {};
  try {
    response = await apiObj.get(`${path}`);
    //Other Methods will comes bellow
  } catch (e) {
    // TODO Error handling
    return sendError(400, 'Something went wrong');
  }
  return response.data;
};
