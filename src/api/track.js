import { fetchAPI } from "../utils/fetchAPI.js";
import { loadAlbum } from "./album.js";
import { loadArtist } from "./artist.js";

export async function loadTrack(container, id) {
  const track = await fetchAPI(`/tracks/${id}`);

  container.innerHTML = `
  <div class="album-card">
    <div class="album-card-header">
      <img src="${track.album.images[0].url}"></img>
      <div class="album-card-text">
        <h4>Track</h4>
        <h1>${track.name}</h1>
        <h4><b>Artists: </b></h4>
        <div class="artists">${track.artists
          .map(
            (artist) =>
              `<div class="artist" data-id="${artist.id}">${artist.name}</div>`
          )
          .join(", ")}</div>
        <h4>Album</h4>
        <div class="album" data-id="${track.album.id}">${track.album.name}</div>
      </div>
    </div>
  </div>`;

  container.querySelectorAll(".album").forEach((album) => {
    album.addEventListener("click", () => {
      toAlbum(container, album.getAttribute("data-id"));
    });
  });

  container.querySelectorAll(".artist").forEach((artist) => {
    artist.addEventListener("click", () => {
      toArtist(container, artist.getAttribute("data-id"));
    });
  });
}

function toAlbum(app, id) {
  loadAlbum(app, id);
}

function toArtist(app, id) {
  loadArtist(app, id);
}
