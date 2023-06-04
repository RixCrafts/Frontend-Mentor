# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
Build a Profile card component that work equaly for desktop and mobile views, only the background is changing. 

### The challenge

- Build out the project to the designs provided

### Screenshot

![Main UI - Desktop](./design/Main%20UI.png)
![Main UI - Mobile](./design/Main%20UI%20-%20Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
For simplicity when developing the UI, I put the design image as the bodys background and place the 'main' element right next to it so is easy to compare, then build from top to bottom and after that center everything making the body a flex box.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

The usage of the 'before' and 'after' pseudo-element for background effects.


```css
main::before {
    content: "";
    background-image: url(./images/bg-pattern-top.svg);
    background-repeat: no-repeat;
    background-position: left bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -30vh;
    left: -20vw;
    z-index: -1;
}

main::after {
    content: "";
    background-image: url(./images/bg-pattern-bottom.svg);
    background-repeat: no-repeat;
    background-position: left top;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -50vh;
    right: -55vw;
    z-index: -1;
}
```

### Continued development

Keep building Frontend Mentor projects to optimize my workflow

### Useful resources

- [MDN Doc](https://developer.mozilla.org/en-US/) - MDN Documentation

## Author

- Website - [Richard 'RixCrafts' Garcia](https://www.your-site.com)
- Frontend Mentor - [@RixCrafts](https://www.frontendmentor.io/profile/RixCrafts)
- Twitter - [@Richard891021](https://twitter.com/Richard891021)

## Acknowledgments

Thanks to the Frontend Mentor Team for the posibility to practice