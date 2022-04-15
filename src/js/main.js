import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import accordions from './accordions';
import modals from './modals';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import guests from './guests';
import introSlider from './introSlider';
import pressCenterSlider from './pressCenterSlider';
import reviewsSlider from './reviewsSlider';
import tabs from './tabs';
import gallerySlider from './gallerySlider';
import locationMap from './location';
import menu from './menu';
import aboutSeasons from './aboutSeasons';
import constructionSlider from './constructionSlider';
import otherNews from './otherNews';
import articleGallery from './articleGallery';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    menu();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    guests();
    introSlider();
    pressCenterSlider();
    reviewsSlider();
    tabs();
    gallerySlider();
    locationMap();
    aboutSeasons();
    constructionSlider();
    otherNews();  
    articleGallery();

});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
