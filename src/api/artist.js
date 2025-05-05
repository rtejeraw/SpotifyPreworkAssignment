import { fetchAPI } from "../utils/fetchAPI.js";
import { loadAlbum } from "./album.js";

export async function loadArtist(container, id) {
  const artist = await fetchAPI(`/artists/${id}`);
  const albums = await fetchAPI(`/artists/${id}/albums`);

  container.innerHTML = `
  <div class="album-card">
    <div class="album-card-header">
      <img src="${artist.images[0].url}"></img>
      <div class="album-card-text">
        <h4>Artist</h4>
        <h1>${artist.name}</h1>
        <p><b>Genres: </b></br>${artist.genres
          .map((genre) => `${genre}`)
          .join(", ")}</p>
      </div>
    </div>
    <div class="album-card-body">
      <h3>Albums</h3>
      <div class="track-list-header">
        <div class="track-list-track"></div>
        <div class="track-list-title">Title</div>
        <div class="track-list-duration">Date</div>  
      </div>
      <div>
      ${albums.items
        .map(
          (album) =>
            `<div class="track-list-row" data-id="${album.id}">
              <div class="track-list-track"><img src="${album.images[0].url}"></img></div>
              <div class="track-list-title">${album.name}</div>
              <div class="track-list-duration">${album.release_date}</div>
            </div>`
        )
        .join("")}
        </div>
    </div>
  </div>`;

  container.querySelectorAll(".track-list-row").forEach((album) => {
    album.addEventListener("click", () => {
      toAlbum(container, album.getAttribute("data-id"));
    });
  });
}

function toAlbum(app, id) {
  loadAlbum(app, id);
}
