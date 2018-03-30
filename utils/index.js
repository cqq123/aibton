import qs from 'qs';

export const fetchRequest = (url, param) => {
  const resultUrl = `${url}?${qs.stringify(param)}`;
  return fetch(
    resultUrl,
    {
      method: 'get',
      credentials: 'include',
    },
  ).then(res => res.json());
};
