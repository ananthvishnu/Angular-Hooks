## Installation and Usage
npm install animate.css --save

## Import it into your style.css or scss file
@import '~animate.css/animate.min.css';

## CDN LINK
  <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

## Basic usage
<h1 class="animate__animated animate__bounce">An animated element</h1>

## Using @keyframes
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

## CSS Custom Properties (CSS Variables)
/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}

# FOR MORE INFO : https://animate.style/