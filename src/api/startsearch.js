import { fetchAPI } from "../utils/fetchAPI.js";
import { loadAlbum } from "./album.js";
import { loadArtist } from "./artist.js";
import { loadTrack } from "./track.js";

export async function startSearch(container, searchInput, type) {
  container.innerHTML = `
    <h2>${searchInput.toUpperCase()}</h2>
    <div class="row"></div>
  `;

  const response = await fetchAPI("/search", {
    q: searchInput.replace(" ", "%20"),
    type: type,
  });

  const row = container.querySelector(".row");

  switch (type) {
    case "album":
      response.albums.items.forEach((album) => {
        row.innerHTML += `
            <div class="card" data-type="album" data-id="${album.id}">
              <img src="${album.images[0].url}" />
              <div class="card-body">
                <h3 class="card-title">${album.name.substring(0, 65)}</h3>
                <div>
                  <h4><em>Artists:</em></h4>
                  <ul>${album.artists.map(
                    (a) => "<il>" + a.name + "</il>"
                  )}</ul>
                <div>
              </div>
          </div>
        `;
      });
      break;
    case "artist":
      response.artists.items.forEach((artist) => {
        row.innerHTML += `
        <div class="card" data-type="artist" data-id="${artist.id}">
          <img src="${artist.images[0].url}" />
          <div class="card-body">
            <h3 class="card-title">${artist.name.substring(0, 65)}</h3>
            <div>
              <h4><em>Genres:</em></h4>
              <ul>${artist.genres.map((a) => "<il>" + a + "</il>")}</ul>
            <div>
          </div>
      </div>
      `;
      });
      break;
    case "track":
      response.tracks.items.forEach((track) => {
        row.innerHTML += `
        <div class="card" data-type="track" data-id="${track.id}">
          <img src="${track.album.images[0].url}" />
          <div class="card-body">
            <h3 class="card-title">${track.name.substring(0, 65)}</h3>
            <div>
              <h4><em>Artists:</em></h4>
              <ul>${track.artists.map((a) => "<il>" + a.name + "</il>")}</ul>
            <div>
          </div>
      </div>
      `;
      });
      break;
  }

  container.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      switch (card.getAttribute("data-type")) {
        case "album":
          toAlbum(container, card.getAttribute("data-id"));
          break;
        case "artist":
          toArtist(container, card.getAttribute("data-id"));
          break;
        case "track":
          toTrack(container, card.getAttribute("data-id"));
          break;
      }
    });
  });
}

function toAlbum(app, id) {
  loadAlbum(app, id);
}

function toArtist(app, id) {
  loadArtist(app, id);
}

function toTrack(app, id) {
  loadTrack(app, id);
}
