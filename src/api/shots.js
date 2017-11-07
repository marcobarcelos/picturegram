import fetch from 'isomorphic-fetch';

const accessToken = '0bba323e1fa5db8ba1c87715e3a2065e5a17b0b9fa99329e289812eb4e28e3cd';

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
  return fetch(`https://api.dribbble.com/v1/shots?access_token=${accessToken}&&per_page=24`)
    .then(response => processListResponse(response));
}

export function getNextShots(nextLink) {
  return fetch(nextLink)
    .then(response => processListResponse(response));
}

export function getShotDetails(shotId) {
  return fetch(`https://api.dribbble.com/v1/shots/${shotId}?access_token=${accessToken}`)
    .then(response => response.json());
}
