import {apiUrl} from "../Constants/Api";
import {TOKEN_BACKUP} from "../Constants/Backup";


const client = async (
  endpoint: string,
  method: string,
  body: {},
  withAuth: boolean = false,
  customConfig: {} = {},
) => {
  const token = localStorage.getItem(TOKEN_BACKUP);
  let error = false;
  let json;

  const headers = withAuth
    ? {'Content-Type': 'application/json', 'Authorization': `Token ${token}`}
    : {'Content-Type': 'application/json'};

  const config = {
    method: method || 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${apiUrl}${endpoint}`, config);

  if (response.status === 401) {
    error = true;
    json = null;
    return {json, error, code: response.status};
  }

  try {
    json = await response.json();
  } catch {
    json = null;
  }

  if (!response.ok) {
    error = true;
  }
  return {json, error, code: response.status};
}


export const get = async (endpoint: string, withAuth: boolean = false, customConfig: {} = {}) =>
  await client(endpoint, 'GET', null, withAuth, customConfig);
export const post = async (endpoint: string, body: {} = {}, withAuth: boolean = false, customConfig: {} = {}) =>
  await client(endpoint, 'POST', body, withAuth, customConfig);
export const patch = async (endpoint: string, body: {} = {}, withAuth: boolean = false, customConfig: {} = {}) =>
  await client(endpoint, 'PATCH', body, withAuth, customConfig);
export const remove = async (endpoint: string, body: {} = {}, withAuth: boolean = false, customConfig: {} = {}) =>
  await client(endpoint, 'DELETE', body, withAuth, customConfig);
