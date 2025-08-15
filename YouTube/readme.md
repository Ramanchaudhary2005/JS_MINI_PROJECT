# YouTube Mini Project

This project is a **YouTube search and view clone** built using **vanilla JavaScript, HTML, and CSS**. It demonstrates how to interact with external APIs, manage UI state, and create a multi-page web application without any frameworks. The project is organized into several modules, each responsible for a specific feature.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
  - [Homepage](#homepage)
  - [Search Page](#search-page)
  - [View Page](#view-page)
  - [History Page](#history-page)
- [API Usage](#api-usage)
- [Styling](#styling)
- [How to Run](#how-to-run)
- [Limitations & Notes](#limitations--notes)
- [Credits](#credits)

---

## Project Overview

The **YouTube Mini Project** allows users to:
- Search for YouTube videos using the RapidAPI YouTube API.
- View video details and play videos.
- See search suggestions as they type.
- Maintain a simple search/view history.

The project is designed for educational purposes, showcasing how to build a small-scale, multi-page web app using only web standards.

---

## Features

- **Live Search Suggestions:** As you type, suggestions appear below the search bar.
- **Trending Videos (optional):** Code included for fetching trending videos.
- **Search Results:** Displays a grid of video cards with thumbnails, titles, and channel info.
- **Video View:** Clicking a video opens a detailed view with an embedded player and metadata.
- **History:** Keeps track of viewed videos and searches.
- **Responsive Design:** Works on both desktop and mobile screens.

---

## Folder Structure

```
YouTube/
│
├── homepage.html         # Main landing/search page
├── homepage.js           # JS logic for homepage (search, suggestions, trending)
├── homepage.css          # Styles for homepage and shared components
├── readme.md             # This documentation
│
├── search/
│   ├── index.html        # Search results page
│   └── search_page.js    # JS logic for search results
│
├── View/
│   ├── index.html        # Video detail/view page
│   └── script.js         # JS logic for video view
│
├── history/
│   ├── index.html        # History page
│   └── script.js         # JS logic for history
```

---

## How It Works

### Homepage

- **File:** `homepage.html`, `homepage.js`, `homepage.css`
- **Functionality:**
  - Search bar with live suggestions (calls YouTube suggestion API).
  - Search button triggers a redirect to the search results page with the query.
  - (Optional) Trending videos fetch logic is present but commented out.
  - Responsive layout with a sidebar and header on larger screens.

### Search Page

- **File:** `search/index.html`, `search/search_page.js`
- **Functionality:**
  - Reads the search query from the URL.
  - Fetches search results from the YouTube RapidAPI endpoint.
  - Renders a grid of video cards.
  - Each card is clickable and redirects to the video view page.

### View Page

- **File:** `View/index.html`, `View/script.js`
- **Functionality:**
  - Reads the video ID from the URL.
  - Fetches video details from the API.
  - Embeds the YouTube player for the selected video.
  - Displays video metadata (title, channel, views, etc.).

### History Page

- **File:** `history/index.html`, `history/script.js`
- **Functionality:**
  - Displays a list of previously searched queries and viewed videos.
  - Data is typically stored in `localStorage` for persistence.
  - Allows users to revisit previous searches or videos.

---

## API Usage

- **YouTube Search & Video Data:**  
  Uses [youtube138.p.rapidapi.com](https://rapidapi.com/Glavier/api/youtube138/) via RapidAPI.
- **API Key:**  
  You must provide your own RapidAPI key in the JS files for the API calls to work.
- **Endpoints Used:**
  - `/search/?q=...` for searching videos.
  - `/video/details/?id=...` for video details.
  - `/v2/trending` for trending videos (optional).
  - Suggestion API for live search suggestions.

**Note:**  
API keys are rate-limited and should be kept secure. Do not expose your key in public repositories.

---

## Styling

- **CSS:**  
  All styling is handled via `homepage.css`, which is shared across pages for consistency.
- **Responsive Design:**  
  Uses CSS grid and media queries for layouts that adapt to different screen sizes.
- **UI Elements:**  
  - Video cards with hover effects.
  - Search bar with suggestion dropdown.
  - Simple, clean color palette.

---

## How to Run

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd JS_MINI_PROJECT/YouTube
    ```

2. **Set your RapidAPI key:**
    - Open `homepage.js`, `search/search_page.js`, and `View/script.js`.
    - Replace the placeholder API key with your own RapidAPI key.

3. **Open in Browser:**
    - Double-click `homepage.html` to open in your browser.
    - Use the app as described above.

4. **Navigation:**
    - Search for videos from the homepage.
    - Click on a video to view details.
    - Use the history page to revisit past searches and views.

---

## Limitations & Notes

- **API Key Required:**  
  The app will not work without a valid RapidAPI key.
- **No Backend:**  
  All logic is client-side; history is stored in `localStorage`.
- **CORS Issues:**  
  Some API endpoints may have CORS restrictions depending on RapidAPI plan.
- **For Learning Only:**  
  This project is not intended for production use.

---

## Credits

- [RapidAPI YouTube138](https://rapidapi.com/Glavier/api/youtube138/) for API access.
- [YouTube](https://youtube.com) for inspiration and data.
- Project by [Your Name/Team],