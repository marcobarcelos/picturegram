import { DRIBBBLE_API_ACCESS_TOKEN } from '../config';

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}

function getLinkByRel(links, rel) {
  const link = links.find(elem => elem.endsWith(`rel="${rel}"`));
  return link && link.match(/<(.+?)>;/)[1];
}

function processListResponse(response) {
  const links = response.headers.get('link').split(',');
  const [prev, next] = ['prev', 'next'].map(rel => getLinkByRel(links, rel));

  return response.json().then(data => ({ data, prev, next }));
}

export function getInitialShots() {
  return fetch(`https://api.dribbble.com/v1/shots?access_token=${DRIBBBLE_API_ACCESS_TOKEN}&&per_page=24`)
    .then(handleErrors)
    .then(response => processListResponse(response));
}

export function getNextShots(nextLink) {
  return fetch(nextLink)
    .then(handleErrors)
    .then(response => processListResponse(response));
}

export function getShotDetails(shotId) {
  return fetch(`https://api.dribbble.com/v1/shots/${shotId}?access_token=${DRIBBBLE_API_ACCESS_TOKEN}`)
    .then(handleErrors)
    .then(response => response.json());
}
