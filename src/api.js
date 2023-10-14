// /* eslint-disable */
export const baseURL = 'https://skypro-music-api.skyeng.tech';

export async function getPlaylistId(id) {
  const response = await fetch(`${baseURL}/catalog/track/${id}`);

  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

export async function registerUser(login, password) {
  const response = await fetch(`${baseURL}/user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
      username: `${login}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function authUser(login, password) {
  const response = await fetch(`${baseURL}/user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function getToken(login, password) {
  const response = await fetch(`${baseURL}/user/token/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}
