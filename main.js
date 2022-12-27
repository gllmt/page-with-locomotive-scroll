/*
* ----------------
* Importing styles
* ----------------
*/
import './assets/sass/reset.scss'
import './assets/css/locomotive-scroll.css'
import './assets/sass/app.scss'
/*
* ----------------
* Importing JS 
* ----------------
*/
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger';
/*
/*
* --------------------
* Your javascript here
* --------------------
*/
// console.log("Js works here !")

// Remove Fooc effect :
// Helper function
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
domReady(() => {
// Display body when DOM is loaded
document.body.style.visibility = 'visible';
});

// gsap intro anim :
const TLINTRO = gsap.timeline({
    default: {
      duration: 0,
      ease: 'sine'
    }
})

TLINTRO
    .to('.title', { y: 0, duration: 0.3, delay: .3})
    .to('.link', { x: 0, duration: 0.3, delay: .5},'-=0.4')
    .to('.text', { autoAlpha: 1, duration: 0.5, delay: .5}, '-=0.3')
// ---

/* Locomotive Scroll init */
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scrollContainer"),
    smooth: true
});

window.addEventListener("load", () => locoScroll.update());
window.addEventListener("refresh", () => locoScroll.update());

/* Locomotive Anchor Scroll */
const anchorLinks = document.querySelectorAll('.anchor-link');

anchorLinks.forEach((anchorLink) => {
let hashval = anchorLink.getAttribute('href');
let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locoScroll.scrollTo(target);
    });
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);
