const API = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// getUser("prajitzala");

async function getUser(username) {
  const resp = await fetch(API + username);
  const respData = await resp.json();

  createUserCard(respData);
  getRepos(username);
}

async function getRepos(username) {
  const resp = await fetch(API + username + "/repos");
  const respData = await resp.json();

  addReposToCard(respData);
}

const createUserCard = (user) => {
  const cardHTML = `
    <div class = "card">
        <div class ="img-container">
            <img class="avatar" src = "${user.avatar_url}" alt="${user.name}"/>
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class="info">
                <li>${user.followers}
                <b>Followers</b>
                </li>
                <li>${user.following}
                <b>Following</b>
                </li>
                <li>${user.public_repos}
                <b>Repos</b>
                </li>
            </ul>

            <h4>Repos:</h4>
            <div id="repos"></div>
        </div>
    </div>
    `;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repo.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
