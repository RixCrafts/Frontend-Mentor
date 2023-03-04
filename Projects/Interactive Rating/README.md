# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
An simple but interactive rating card

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

- ![Main UI](./images/Screenshot%20main.png)
- ![Response UI](./images/Screenshot%20response.png)

### Links

- Solution URL: [GitHub Specific Repo](https://github.com/RixCrafts/Frontend-Mentor/tree/master/Projects/Interactive%20Rating)
- Live Site URL: [GitHub Pages](https://rixcrafts.github.io/Frontend-Mentor/Projects/Interactive%20Rating/index.html)
- Frontend Mentor Projects Hub: [Hub on GitHub](https://github.com/RixCrafts/Frontend-Mentor)
- Lvie Frontend Mentor Projects Hub: [Hub on GitHub Pages](https://rixcrafts.github.io/Frontend-Mentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned
A very elegant way of transition.

```css
.response {
    visibility: hidden;
    opacity: 0;
}
```
```js
let response = document.querySelector(".response");
response.style.visibility = "visible";
response.style.opacity = 1;
```

### Continued development

Improve speed in analysis and implementation through practice

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - Main Doc

## Author

- Website - [Richard 'RixCrafts' Garcia](https://www.your-site.com)
- Frontend Mentor - [@RixCrafts](https://www.frontendmentor.io/profile/RixCrafts)
- Twitter - [@Richard891021](https://twitter.com/Richard891021)

## Acknowledgments

Thanks to the Frontend Mentor Team for the posibility to practice