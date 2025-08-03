

export const login = () => {
  localStorage.setItem('isLoggedIn', 'true');
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
};

export const checkLoginStatus = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};
