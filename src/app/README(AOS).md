
## data-aos: This attribute is used to define the type of animation that should be applied to the element. The attribute value corresponds to the animation type, such as "fade", "fade-up", "zoom-in", etc.


<div data-aos="fade">Content to animate</div>

## data-aos-duration: Specifies the duration of the animation in milliseconds.
<div data-aos="fade" data-aos-duration="1000">Content with custom duration</div>

## data-aos-delay: Delays the start of the animation in milliseconds.
<div data-aos="fade" data-aos-delay="500">Content with delay</div>

## data-aos-offset: Sets the offset (in pixels) from the original trigger point. It determines how far below the viewport's top the element's top should be before triggering the animation.
<div data-aos="fade" data-aos-offset="100">Content with offset</div>
 
## data-aos-anchor: Defines which position of the element regarding the window should trigger the animation. Values can be "top-bottom", "bottom-top", "center-center", etc.
<div data-aos="fade" data-aos-anchor="bottom-top">Content with anchor</div>

## data-aos-easing: Specifies the easing function for the animation. Default is "ease", but you can use other easing functions such as "ease-in", "ease-out", "ease-in-out", etc.
<div data-aos="fade" data-aos-easing="ease-in-out">Content with custom easing</div>

## data-aos-once: If set to "true", the animation will only occur once.
<div data-aos="fade" data-aos-once="true">Content animates only once</div>

## data-aos-mirror: If set to "true", elements will animate out while scrolling past them.
<div data-aos="fade" data-aos-mirror="true">Content mirrors animation</div>

## data-aos-anchor-placement: Defines which position of the element regarding to window should trigger the animation. Values can be "top-bottom", "bottom-top", "center-center", etc.
<div data-aos="fade" data-aos-anchor-placement="top-bottom">Content with anchor placement</div>


** 'https://michalsnik.github.io/aos/' ## This is AOS library link

** npm install aos --save

** CDN
## css
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

## js
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

## INITIALIZE AOS
<script>
  AOS.init();
</script>

## how to initialize AOS in Angular
step 1
npm install aos --save

step 2
configure css file into the angular.json file
"node_modules/aos/dist/aos.css"

step 3
import AOS library into the component
import * as AOS from 'aos';

step 4
TS file configration in NgOnInit
ngOnInit() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them

      // Anchor placement:
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }

  ## OR USE HTML ATTRIBUTES

  `FADE`
  <div data-aos="fade-up"></div>
  <div data-aos="fade-down"></div>
  <div data-aos="fade-right"></div>
  <div data-aos="fade-left"></div>
  <div data-aos="fade-up-right"></div>
  <div data-aos="fade-up-left"></div>
  <div data-aos="fade-down-right"></div>
  <div data-aos="fade-down-left"></div>

  `FLIP`
  <div data-aos="flip-left"></div>
  <div data-aos="flip-right"></div>
  <div data-aos="flip-up"></div>
  <div data-aos="flip-down"></div>

  `ZOOM`
  <div data-aos="zoom-in"></div>
  <div data-aos="zoom-in-up"></div>
  <div data-aos="zoom-in-down"></div>
  <div data-aos="zoom-in-left"></div>
  <div data-aos="zoom-in-right"></div>
  <div data-aos="zoom-out"></div>
  <div data-aos="zoom-out-up"></div>
  <div data-aos="zoom-out-down"></div>
  <div data-aos="zoom-out-right"></div>
  <div data-aos="zoom-out-left"></div>

  `DIFFERENT SETTINGS EXAMPLES`
  <div data-aos="fade-up" data-aos-duration="3000"></div>\
  <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></div>
  <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"></div>
  <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
</div>

<div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
     data-aos-offset="0">
</div>

<div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>

`ANCHOR PLACEMENT`
<div data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom"></div>
<div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"></div>
<div data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
<div data-aos="fade-up" data-aos-anchor-placement="center-center"></div>

THIS IS AOS LIBRARY //






