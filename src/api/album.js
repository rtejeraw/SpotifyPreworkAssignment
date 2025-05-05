import { fetchAPI } from "../utils/fetchAPI.js";
import { loadTrack } from "./track.js";
import { loadArtist } from "./artist.js";

export async function loadAlbum(container, id) {
  const album = await fetchAPI(`/albums/${id}`);
  console.log(album.genres.length);
  container.innerHTML = `
  <div class="album-card">
    <div class="album-card-header">
      <img src="${album.images[0].url}"></img>
      <div class="album-card-text">
        <h4>Album</h4>
        <h1>${album.name}</h1>
        <h4><b>Artists: </b></h4>
        <div class="artists">${album.artists
          .map(
            (artist) =>
              `<div class="artist" data-id="${artist.id}">${artist.name}</div>`
          )
          .join(", ")}</div>
        ${
          album.genres.length != 0
            ? `<p><b>Genres: </b></br>${album.genres
                .map((genre) => `${genre}`)
                .join(", ")}</p>`
            : ""
        }
      </div>
    </div>
    <div class="album-card-body">
      <div class="track-list-header">
        <div class="track-list-track">Track</div>
        <div class="track-list-title">Title</div>
        <div class="track-list-duration">Duration</div>  
      </div>
      <div>
      ${album.tracks.items
        .map(
          (track, index) =>
            `<div class="track-list-row" data-id="${track.id}">
              <div class="track-list-track">${index + 1}</div>
              <div class="track-list-title">${track.name}</div>
              <div class="track-list-duration">${formatTime(
                track.duration_ms
              )}</div>
            </div>`
        )
        .join("")}
        </div>
      <h3>Release Date</h3>
      <p>${album.release_date}</p>
    </div>
  </div>`;

  container.querySelectorAll(".track-list-row").forEach((track) => {
    track.addEventListener("click", () => {
      toTrack(container, track.getAttribute("data-id"));
    });
  });

  container.querySelectorAll(".artist").forEach((artist) => {
    artist.addEventListener("click", () => {
      toArtist(container, artist.getAttribute("data-id"));
    });
  });
}

function toArtist(app, id) {
  loadArtist(app, id);
}

function toTrack(app, id) {
  loadTrack(app, id);
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;

  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}
