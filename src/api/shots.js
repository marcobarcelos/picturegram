import fetch from 'isomorphic-fetch';

const accessToken = '0bba323e1fa5db8ba1c87715e3a2065e5a17b0b9fa99329e289812eb4e28e3cd';

export function getAllShots() {
  return fetch(`https://api.dribbble.com/v1/shots?access_token=${accessToken}`)
    .then(response => response.json());
}
