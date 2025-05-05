import { startSearch } from "./api/startsearch.js";

const app = document.querySelector("#app");
const controlbar = document.querySelector("#control");
const basesearch = "rock 90s greatest hits";

function handleNavigation() {
  const hash = window.location.hash || "#home";
  app.innerHTML = '<p class="text-center">Loading...</p>';
  controlbar.innerHTML = "";

  switch (hash) {
    case "#home":
      const searchBar = document.createElement("div");
      searchBar.className = "search-bar";
      searchBar.innerHTML = `
          <input type="text" class="search-input" placeholder="Search for albums..." value="${basesearch}"/>
          <div class="radio-group">
            <input type="radio" class="radio-album" name="search-type" value="album" checked>
            <label for="album">Album</label>
            <input type="radio" class="radio-artist" name="search-type" value="artist">
            <label for="artist">Artists</label>
            <input type="radio" class="radio-track" name="search-type" value="track">
            <label for="track">Tracks</label>
          </div>
          <button class="search-button">Search</button>
      `;

      app.innerHTML = "";
      controlbar.appendChild(searchBar);

      startSearch(app, basesearch, getType());
      break;
    default:
      app.innerHTML = '<p class="text-center">Page not found</p>';
  }

  controlbar.querySelectorAll(".search-button").forEach((button) => {
    button.addEventListener("click", () => {
      startSearch(
        app,
        controlbar.querySelector(".search-input").value,
        getType()
      );
    });
  });
}

function getType() {
  const type = controlbar.querySelector(".radio-album").checked
    ? "album"
    : controlbar.querySelector(".radio-artist").checked
    ? "artist"
    : controlbar.querySelector(".radio-track").checked
    ? "track"
    : "album";
  return type;
}

// Initial load and hash change
window.addEventListener("hashchange", handleNavigation);
window.addEventListener("DOMContentLoaded", handleNavigation);
