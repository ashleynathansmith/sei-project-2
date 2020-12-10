# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

`yarn start` to run the development server

`yarn build` to create a build directory


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

//PLAN

  1. Check Insomnia for data API will provide
  - https://itunes.apple.com/search?term=gorillaz&entity=musicTrack
  - keys to use:
    - artistName
    - trackName
    - collectionName
    - artworkURL100 (needs resizing)

  2. Create components folder for pages that will be needed and add files for each page
    - Home
    - SongPage

  3. Create simple functions within each component to check they are working correctly

  4. Add React/Router to create seperate pages for the app (Link/To & Route/Path should always match)
    - Home
    - SongPage

  5. Add JSX/simple styling for home/songpage components (do not add any logic)
    - artist name - tag
    - track name - tag
    - album name - tag
    - artwork - image
    - preview song - audio
    - next - btn
    - previous - btn
    - Bulma? CSS?

  6. Add song data to the page by adding logic to songPage function and mapping through the data within the return
    - API returns 50 songs but only show one song(object) at a time?

  7. Fetch API data and return relevent API data

