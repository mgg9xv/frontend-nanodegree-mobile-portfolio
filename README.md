#  Mobile Portfolio | Front-End Nanodegree
A web optimization project for Udacity's Front-End Web Developer Nanodegree

## Try It Out
[https://mggwxyz.github.io/frontend-nanodegree-mobile-portfolio](https://mggwxyz.github.io/frontend-nanodegree-mobile-portfolio)

## Table of Contents
1. [Project Overview](#project-overview)
1. [Setting up the project](#setting-up-the-project)
1. [Running the project](#running-the-project)
1. [Optimizations](#optimizations)
1. [Resource Links](#resource-links)

## Project Overview
The purpose of this project was to gain experience using [Chrome DevTools](https://developer.chrome.com/devtools) and [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and learn how optimize a website's critical rendering path. This project was part of Udacity's Front-End Web Developer Nanodegree.

## Setting up the project
Clone the project repository into a directory using a bash terminal
```bash
git clone https://github.com/mggwxyz/frontend-nanodegree-mobile-portfolio.git
```
Navigate into the new project directory

```bash
cd frontend-nanodegree-mobile-portfolio
```
Download the project's dependencies

```bash
npm install
```

## Running the project
Once the project has been setup, it can be started up at `http://127.0.0.1:8080`
```bash
npm start
```

## Optimizations

Optimizations were made to the `src/views/js/main.js` to increase the frame rate when scrolling on `src/views/pizza.html`.

* The changePizzaSizes function was altered so that the size of the new pizzas is calculated only once instead of calculating it for each individual pizza. Query Selector functions were replaced getElementById and getElementsByClassName because the latter are much faster.
* The anonymous function called when the 'DOMContentLoaded' was updated so that it would only create the number of pizzas that would be displayed on the screen based on screen size
* The updatePositions function was changed so that the for loop didn't calculate the same values over and over requiring a read each time.

## Resource Links
* [Online Demo](https://mggwxyz.github.io/frontend-nanodegree-mobile-portfolio)
* [Source Code](https://github.com/mggwxyz/frontend-nanodegree-mobile-portfolio)