# Tromzo Frontend Challenge

### Problem statement

Develop a pseudo front-end application that allows users to list and browse games developed for different platforms.

### Minimum requirement

- Use web APIs to retrieve the details of various games.
- Utilize the following response parameters:
- title, platform, score, genre, editors_choice, release_year
- Implement the functionality to list all the games in a web page.
- Create a visually-interactive responsive design that lists all the games.
- Submit your screenshots, source code, instructions.

### Additional points

- Implement the following features:
- Search: Search a game by using the name of the game
- Sort: Filter the scores of all the games in ascending or descending order and games based on the platforms such as PS, Microsoft Windows etc.
- Autocomplete feature to search games conveniently

### Guide

- Games API: [https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json](https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json)
- Ideal front-end stack
- JS framework: JavaScript (ReactJS)
- Implement the custom CSS design. The implementation of Bootstrap or Material Design in your application is favorable.
- The application can be built by using client-side scripting and does not require any back-end application.

### Data parameters

The data parameters are as following:

- title: Title of the game
- platform: Name of the platform for which the game is designed
- score: Games rating score
- genre: Genre of the game
- editors_choice: A value that indicates whether this game is the editor’s choice or not

---
## Run GraphQL server
#### 1) Go to backend folder
```
cd backend
```
#### 2) Install Dependencies
```
npm install
```
#### 3) Run
```
node index.js
```

---
## Run frontend
#### 1) Go to frontend folder
```
cd frontend
```
#### 2) Install Dependencies
```
npm install
```
#### 3) Run
```
npm run start
```
#### 4) Navigate to
```
http://localhost:3000
```

---

### Unit Tests
```
npm run test
```

---

### Screenshots
![tromzo-frontend-challenge-screenshot](https://user-images.githubusercontent.com/78440166/139564455-dffb31f8-99d9-4dad-92d6-0c303047214f.png)

