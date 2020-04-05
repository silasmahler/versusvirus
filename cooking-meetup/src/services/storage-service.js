import { LoadingBar } from "quasar";

export function getProfile() {
  return getCurrentUser().profile;
}

export function setProfile(profile) {
  const user = getCurrentUser();
  user.profile = profile;
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function login(username, password) {
  let authenticated = false;
  data.forEach((user) => {
    if (user.username === username) {
      if (user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        authenticated = true;
      }
    }
  });
  return authenticated;
}

export function isAuthenticated() {
  return localStorage.getItem("currentUser");
}

export function logout() {
  if (localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
  }
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

const user = (username, password, role, profile) => {
  return {
    username: username,
    password: password,
    role: role,
    profile: profile,
  };
};

const profile = (name, niche, vitae, recordingDevices, lang, image) => {
  return {
    name: name,
    niche: niche,
    vitae: vitae,
    lang: lang,
    recordingDevices: recordingDevices,
    image: image,
  };
};

const data = [
  user(
    "test",
    "test",
    "user",
    profile(
      "Alfonds",
      "vegan, vegetarian",
      "Hi my name is Alfonds and i like cooking interesting dishes, especially vegan! #LoveThePlane #LoveTheEarth",
      ["smartphone", "camera"]
    )
  ),
  user(
    "test1",
    "test123",
    "user",
    profile(
      "Test 1",
      "vegan",
      "TODO",
      ["smartphone", "notebook"],
      "img/test1.png"
    )
  ),
  user(
    "test2",
    "test123",
    "user",
    profile(
      "Test 2",
      "traditional",
      "TODO",
      ["camera", "notebook"],
      "img/test2.png"
    )
  ),
  user(
    "test3",
    "test123",
    "user",
    profile("Test 3", "italian", "TODO", ["notebook"], "img/test3.png")
  ),
  user(
    "test4",
    "test123",
    "chef",
    profile("Test 4", "french", "TODO", ["smartphone"], "img/test4.png")
  ),
];
