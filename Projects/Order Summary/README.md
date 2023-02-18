# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
A Order Summary UI designed for mobiles

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![Screenshot of the main UI](./images/Screenshot%20Main.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
Using mobile-first workflow, start implementing from top to bottom, first the HTML in full and then the CSS

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

The usage of the ```margin-<left | right>: auto``` property inside a flex box for the separation of an specific element

To see how you can add code snippets, see below:

```css
#plan_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
/* This position this element fully to the left and keep the flex-properties for the other elements */
#plan_container > #current_plan {
    margin-right: auto;
}
```

### Continued development

Continue studing CSS in deep for techniques litter known but very usefull

### Useful resources

- [Web Dev Simplified](https://youtube.com/shorts/jlvwSorkdIo?feature=share) - This short explains the usage of the ```margin``` property inside a flex-box to separate an element

## Author

- Website - [Richard 'RixCrafts' Garcia](https://www.your-site.com)
- Frontend Mentor - [@RixCrafts](https://www.frontendmentor.io/profile/RixCrafts)
- Twitter - [@Richard891021](https://twitter.com/Richard891021)

## Acknowledgments

Thanks to the Frontend Mentor Team for the posibility to practice
