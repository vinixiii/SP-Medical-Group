export const parseJWT = () => {
  const payload = localStorage.getItem('token').split('.')[1];

  return JSON.parse(window.atob(payload));
};

export const userAuthenticated = () => localStorage.getItem('token') !== null;
