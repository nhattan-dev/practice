import axios from "axios";

export const url = "http://localhost:8084/api";
const user = JSON.parse(localStorage.getItem("profile"));

export function get(endpoint) {
  return axios.get(url + endpoint, {
    headers: { Authorization: user && user.token },
  });
}

export function put(endpoint, body) {
  return axios.put(url + endpoint, body, {
    headers: { Authorization: user && user.token }
  });
}

export function patch(endpoint, body) {
  return axios.patch(url + endpoint, body, {
    headers: { Authorization: user && user.token }
  });
}

export function post(endpoint, body) {
  return axios.post(url + endpoint, body, {
    headers: { Authorization: user && user.token }
  });
}

export function del(endpoint) {
  return axios.delete(url + endpoint, {
    headers: { Authorization: user && user.token }
  });
}

export const handleError = (error) => {
  console.log(error)
  if (error.response) {
      if (error.response.status === 401) {
          alert('Token is expired.')
          localStorage.removeItem('profile')
          window.location.reload()
      }
      if (error.response.data.errorCode)
          alert(error.response.data.errorCode)
      else if (error.response.data.error)
          alert(error.response.data.error)
      else alert('Cannot connect to server !')
  } else {
      alert('Cannot connect to server !')
  }
}