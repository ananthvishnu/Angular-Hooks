## HOW TO USE SWIPPER IN ANGULAR 16
**Step 1: Install Swiper.js
npm install swiper

**Step 2: Import Swiper Styles
/* styles.scss or styles.css */
@import '~swiper/swiper-bundle.css';

**Step 3: Configure Angular.json
"node_modules/swiper/swiper-bundle.min.css",
"node_modules/swiper/swiper-bundle.min.js"

**Step 4: Configure the app.module.ts file
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TeamComponent } from './team/team.component';

// register Swiper custom elements
register();

  schemas:[CUSTOM_ELEMENTS_SCHEMA]

## USE THE SWIPPER IN YOUR COMPONENT
import Swiper from 'swiper';

ngOnInit(): void {
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
}

## USE HTML CLASSNAMES OR SWIPPER TAGS
<section id="clients" class="clients">
    <div class="container" data-aos="zoom-in">

      <div class="clients-slider swiper">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide"><img src="../../assets/img/clients/client-1.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-2.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-3.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-4.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-5.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-6.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-7.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/clients/client-8.png" class="img-fluid" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </section>

  ## OR
<swiper-container>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

// MORE INFO : https://swiperjs.com/element