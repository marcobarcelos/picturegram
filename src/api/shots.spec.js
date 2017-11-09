import fetchMock from 'fetch-mock';
import * as shotsApi from './shots';

describe('shots api', () => {
  const shots = [{ id: '1' }, { id: '2' }, { id: '3' }];
  const prev = 'http://prev.com';
  const next = 'http://next.com';
  const linkHeader = `<${prev}>; rel="prev", <${next}>; rel="next"`;

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should have a method to return initial shots', () => {
    fetchMock.getOnce('begin:https://api.dribbble.com/v1/shots?access_token=', {
      body: shots,
      headers: {
        'content-type': 'application/json',
        Link: linkHeader
      }
    });

    const expected = { data: shots, next, prev };

    shotsApi.getInitialShots().then(data => expect(data).toEqual(expected));
  });

  it('should have a method to return next shots', () => {
    const nextLink = 'https://api.dribbble.com/v1/shots?access_token=&page2';

    fetchMock.getOnce('begin:https://api.dribbble.com/v1/shots?access_token=', {
      body: shots,
      headers: {
        'content-type': 'application/json',
        Link: linkHeader
      }
    });

    const expected = { data: shots, next, prev };

    shotsApi.getNextShots(nextLink).then(data => expect(data).toEqual(expected));
  });

  it('should have a method to return shot details', () => {
    const shot = { id: '1' };
    fetchMock.getOnce('begin:https://api.dribbble.com/v1/shots/', {
      body: shot,
      headers: {
        'content-type': 'application/json'
      }
    });

    const expected = shot;

    shotsApi.getShotDetails(1).then(data => expect(data).toEqual(expected));
  });

  it('should treat api errors', () => {
    const nextLink = 'https://api.dribbble.com/v1/shots?access_token=&page2';

    fetchMock.get('begin:https://api.dribbble.com/v1/shots', {
      body: { error: true },
      status: 500,
      headers: { 'content-type': 'application/json' }
    });

    const promises = [
      shotsApi.getInitialShots(),
      shotsApi.getNextShots(nextLink),
      shotsApi.getShotDetails(1)
    ];

    return Promise.all(promises.map(p => p.catch(() => undefined))).then((data) => {
      expect(data[0]).toBe(undefined);
      expect(data[1]).toBe(undefined);
      expect(data[2]).toBe(undefined);
    });
  });
});
