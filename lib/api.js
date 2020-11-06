import fetch from 'isomorphic-unfetch';

export function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export async function sendRequest(path, opts = {}, req) {
  const headers = Object.assign({}, opts.headers || {}, {
    'Content-type': 'application/json; charset=UTF-8'
  });

  return fetch(
    path,
    Object.assign({ method: 'POST' }, opts, { headers, credentials: 'same-origin' })
  );
}

export const fetcher = async function fetcher(url) {
  const result = await sendRequest(url, { method: 'GET', includeStatus: true });

  const data = await result.json();
  if (result.status == 200) {
    return data;
  }

  throw data;
};
