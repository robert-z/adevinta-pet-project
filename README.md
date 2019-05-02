# Adevinta's Pet Project

This repository contains my solution to the Pet Project proposed by [Adevinta](https://www.adevinta.com/).

See deployed version [here](http://pet-project.robert-z.surge.sh/)


![](https://media.giphy.com/media/g4UC350lAZzss5LpSK/giphy.gif)

* [🤔 Project explanation (by Adevinta)](#-project-explanation)
* [🚀 Environment setup](#-environment-setup)

## 🤔 Project explanation

### Introduction
As a new frontend developer at Schibsted Spain, you will be working with cutting edge tecnologies as **react, ddd, es6, webpack, sui** and more... To have a first contact with the tech stack for your first week, you will be working on a side pet project that will work as a simulated scenario of what you will face in our real life projects.

### What we expect of this course

First of all, **THIS IS NOT A TEST**. Keep calm, learn and enjoy the new things that are going to come. We don't expect that you learn all the core concepts at 100% so if you feel that you are not catching up everything at the first read, try to read it again or ask your mentor for whatever you want.

### About the pet project

What we want is a project that using the [themoviedb api](https://www.themoviedb.org/documentation/api) lets us access a site were we can find movies, get a list of it and go to their detail.

#### We will base our project on the schibsted web convergence tools and conventions that are basically the next ones:

- [sui-ssr](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr)
- [sui-studio](https://github.com/SUI-Components/sui/tree/master/packages/sui-studio)
- [sui-domain](https://github.com/SUI-Components/sui/tree/master/packages/sui-domain)
- [sui-theme](https://github.com/SUI-Components/sui-theme)

There is some useful information of the frontend team at Schibsted Spain [here](https://confluence.schibsted.io/display/ST/Frontend)

### How much time do we have to build that project?

There's not fixed time to build the project but we think that 10 work days are enough to have all the parts that we demand.

The main idea is to be doing this project with your mentor for the first days. And after that, try to work alone on it asking whatever you want to your mentor.

### How is the project structured?

Almost all the Schibsted Spain projects need the following main repositories to work. According to that we splitted the learning process in four parts:

**1 - Domain (business logic) repository:** [frontend-mv--lib-movies](https://github.schibsted.io/scmspain/frontend-all--pet-project/tree/master/3-frontend-mv--lib-movies)

**2 - Web server repository:** [frontend-mv--web-app](https://github.schibsted.io/scmspain/frontend-all--pet-project/tree/master/4-frontend-mv--web-app)

## 🚀 Environment setup 

1. Clone this project: 
```sh
$ git clone https://github.com/robert-z/adevinta-pet-project.git
```

2. Move to the project folder: 
```sh
$ cd adevinta-pet-project
```

3. Move to the app folder
```sh
$ cd app
```

4. Install dependecies
```sh
$ npm i
```

5. Start server
    * 5.1 Start development server
        ```sh
        $ npm start
        ```
    * 5.2 Start production server (Server Side Rendering)
        ```sh
        $ npm run ssr
        ```

6. Demo is available at [http://localhost:3000](http://localhost:3000)