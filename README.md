# Frontend-Nanodegree Mobile Portfolio Project
The purposed of this project was to gain experience using [Chrome DevTools](https://developer.chrome.com/devtools) and [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and learn how optimize a website's critical rendering path.

## Quick Links
* [GitHub Repository](http://github.com/mgg9xv/frontend-nanodegree-mobile-portfolio)
* [GitHub Pages](http://mgg9xv.github.io/frontend-nanodegree-mobile-portfolio)
* [Original Udacity README.md](./ORIGINAL-REAME.md)

## Table of Contents
1. [Downloading Project](#downloading-project)
1. [Running Project](#running-project)
1. [Optimization Made](#optimizations-made)

## Downloading Project <a href="downloading-project"></a>
Clone the repo into a directory using a terminal
```
git clone https://github.com/mgg9xv/frontend-nanodegree-mobile-portfolio.git
```


## Running Project <a href="running-project"></a>
1. Navigate to the frontend-nanodegree-mobile-portfolio directory that was created when downloading the project
    ```
    cd frontend-nanodegree-mobile-portfolio
    ```
1. Download node modules
    ```
    npm install
    ```
1. Run Grunt Task Runner
    ```
    grunt minimize
    ```
    >This will remove the `dist` directory, minimize all the html, css, and javascript files in the `src` directory, and copy them into a newly created `dist` directory.
    **IMPORTANT: Any code changes should be made in src. Then run `grunt minimize` to minimize the files into `dist`**

1. Navigate into `dist` directory
    ```
    cd dist
    ```
1. Open `index.html` using your favorite browser
    ```
    open index.html
    ```


## Optimizations Made <a href="optimizations-made"></a>

Optimizations were made to the `views/js/main.js` to increase the frame rate when scrolling on `views/pizza.html`.

* The changePizzaSizes function was altered so that the size of the new pizzas is calculated only once instead of calculating it for each individual pizza.
* The anonymous function called when the 'DOMContentLoaded' was updated so that it would only create the number of pizzas that would be displayed on the screen based on screen size
* The updatePositions function was changed so that the for loop didn't calculate the same values over and over requiring a read each time.
