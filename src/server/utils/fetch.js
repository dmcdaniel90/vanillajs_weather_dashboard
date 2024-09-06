import ky from 'ky';

/**
 * Fetches data from API
 * @param {string} url
 * @returns {Promise<any>}
 */

export default async function fetch(url) {
  return ky
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .json();
}
