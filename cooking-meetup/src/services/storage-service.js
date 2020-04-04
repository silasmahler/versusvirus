export function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

export function setProfile(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
}
