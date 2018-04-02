import qs from 'qs';

export const fetchRequest = (url, param) => {
  let resultUrl = '';
  if (param) {
    resultUrl = `${url}?${qs.stringify(param)}`;
  } else {
    resultUrl = url;
  }
  return fetch(
    resultUrl,
    {
      method: 'get',
      credentials: 'include',
    },
  ).then(res => res.json());
};
