export function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

export function setProfile(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
}

export function login(username, password) {
  let authenticated = false;
  data.forEach(user => {
    if (user.username === username) {
      if (user.password === password) {
        console.log('login successful');
        localStorage.setItem('currentUser', JSON.stringify(user));
        authenticated = true;
      }
    }
  });
  return authenticated;
}

export function isAuthenticated() {
  return localStorage.getItem('currentUser');
}

export function logout() {
  if (localStorage.getItem('currentUser')) {
    localStorage.removeItem('currentUser');
  }
}

const data = [
  {username: 'test1', password: 'test123'},
  {username: 'test2', password: 'test123'},
  {username: 'test3', password: 'test123'},
  {username: 'test4', password: 'test123'}
];
