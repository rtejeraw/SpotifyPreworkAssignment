# Spotify – Prework Assignment

## Overview

This project is an educational demonstration of some of the features of the Spotify music site, designed as a pre-assignment. It uses the public API "https://api.spotify.com/v1" to display data from four endpoints: "search," "albums," "artists," and "tracks.".

This is a simplified version of Spotify's features. For the full experience, please visit (https://open.spotify.com/).

## Features

- Home Page (Search): The project displays the results of a predetermined album search using the "90s rock greatest hits" criteria. It includes controls for searching by "album," "artist," or "track" using the desired criteria.
- Album: Displays the most relevant information for the selected album (image, name and artists), as well as the list of tracks it contains. Clicking on an artist opens the "artist" interface with its details. Clicking on a track opens the "track" interface with its details.
- Artist: Displays the most relevant information for the selected artist (image, name and genres), as well as the list of albums by that artist. Clicking on an album opens the "album" interface with its details.
- Track: Displays the most relevant information for the selected track (album image, name, artists, and the album it belongs to). Clicking on an album opens the "album" interface with its details. Clicking on an artist opens the "artist" interface with their details.
- Search: A search tool present in all interfaces allows you to search for "albums," "artists," or "tracks" using the desired criteria.
- Style: Custom CSS (`style.css`) for fonts, colors, and hover effects.

## Project Structure

- `index.html`: The site's main HTML file.
- `src/style.css`: Custom styles for layout, typography, and visual effects.
- `src/main.js`: Basic logic for content navigation and searching.
- `src/utils/fetchAPI.js`: File that manages API calls and token authentication requests.
- `src/api/startsearch.js`: File that performs the search and displays results for albums, artists, or tracks.
- `src/api/album.js`: File that requests album information from the API (via fetchAPI) and displays it.
- `src/api/artist.js`: File that requests artist information from the API (via fetchAPI) and displays it.
- `src/api/track.js`: File that requests track information from the API (via fetchAPI) and displays it.
- `.env`: API configuration and constants.

## How to Run

1. **Clone the Repository**:
   - Use `git clone https://github.com/rtejeraw/SpotifyPreworkAssignment.git` in your terminal, or download the ZIP from GitHub.
2. **Open the Project**:
   - Navigate to the project folder and open `index.html` in a web browser.
   - For best results, use a local server (e.g., VS Code's Live Server extension) to avoid CORS issues with file-based loading, or if you have node installed, you can use `npx serve` too
3. **Explore**:
   - Click "Home", "Artworks", "Artists", or "Exhibitions" in the navbar to view the content.
   - In "Album", "Artist" o "Track", click an album, artist o track links to navigate and see it in its interface.

Note: Opening `index.html` directly by double-clicking may fail due to CORS restrictions in some browsers, preventing the "Home" page from loading. To ensure full functionality, use a local server as described above (e.g., Live Server or `npx serve`).

## Technical Details

- API: Data is retrieved from `https://api.spotify.com/v1` with the following endpoints:
- `/search?q={criteria}&type={[album, artist, track]}`
- `/albums/{id}`
- `/artists/{id}`
- `/tracks/{id}`

## Purpose

This project meets the prework assignment requirements:

- Structure: Public GitHub repo, HTML, CSS, JS, and README.
- Content: Displays 4 API endpoints with navigation and fresh GET requests.
- Functionality: Runs smoothly, readable code, thoughtful styling, no critical errors.

For feedback or the full Spotify experience, visit [Spotify](https://open.spotify.com/).

## Author

- Raul Tejera (GitHub: [raultejera](https://github.com/rtejeraw))
