const API_CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID;
const API_CLIENT_SECRET = import.meta.env.VITE_API_CLIENT_SECRET;
const AUTHORIZATION_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1";

export async function fetchAPI(endpoint, params = {}) {
  const token = await getToken();
  var url = BASE_URL + endpoint;

  Object.entries(params).forEach(([key, value], index) => {
    if (index === 0) {
      // Si es el primer elemento (index 0)
      url += "?";
    } else {
      url += "&";
    }
    url += `${key}=${value}`;
  });
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer" + " " + token.access_token,
    },
  });

  return await response.json();
}

export async function getToken() {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_secret: API_CLIENT_SECRET,
      client_id: API_CLIENT_ID,
    }),
  };
  const body = await fetch(AUTHORIZATION_URL, request);
  const response = await body.json();
  return response;
}
