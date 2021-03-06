
/*
        GLOBAL VARIABLES window.scrollY
*/
const website = document.getElementById('website');
const preloader = document.getElementById('preloader');
const body = document.getElementsByTagName('body')[0];

/*
        HELPER FUNCTIONS
*/
const clName = (property) => {
    return document.getElementsByClassName(property);
}

const qs = (property) => {
    return document.querySelector(`.${property}`);
}

/*
        VARIABLES
*/
//HEADER SECTION VARIABLES
const header = qs('header-navbar');
const burger = qs('header-navbar__burger');
const burgerItem = qs('header-navbar__burger-item');
const links = qs('header-navbar__links');
const linkElement = clName('header-navbar__link-element');
const linkElementItem = clName('header-navbar__link-element-item');

//ABOUT SECTION VARIABLES
const aboutSection = qs('about'); 
const cardItem = clName('card-item');

//PROMOTION SECTION VARIABLES
const promotionSection = qs('promotion');
const promotionLeft = clName('promotion__left');
const promotionRight = clName('promotion__right-text-box');


/*
        ACTIONS
*/

//WINDOW LOAD
window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    setTimeout(() => {
        preloader.classList.add('preloader-off');
        body.classList.remove('no-overflow');
        website.classList.remove('visibility-off');
    }, 2000)
})

//BURGER ON CLICK LISTENER
burger.addEventListener('click', () => {   
    links.classList.toggle('visibility-on');
    burger.classList.toggle('burger-active');
})

//EVENT LISTENER WHICH MAKES STICKY NAVBAR APPEAR
window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 0);

    //TURNING OFF ANIMATIONS ON MOBILE DEVICES
    if(window.innerWidth > 540) {
        setTimeout(() => {
            if (window.scrollY > 200) {
                aboutSectionOpacity();
                aboutSectionAnimation();
            }
            if (window.scrollY > 1150) {
                promotionSectionOpacity();
                promotionSectionAnimation();
            }
        }, 1000);
    }
    else {
        aboutSectionOpacity();
        promotionSectionOpacity();
        console.log("There's no animation for current resolution");
    }
});

//PREVENT DEFAULT FORM
const formInput = qs('form-input__btn').addEventListener('click', e => {
    e.preventDefault();
    alert("You can contact me via link in a copyright section below by clicking to my name! \n\nMessage wasn't sent because site has no connection with a database, just a pure front-end :)");
})

/*
        ANIMATIONS
*/
//ABOUT SECTION ANIMATIONS FUNCTION
const aboutSectionOpacity = () => {
    aboutSection.classList.add('opacityAnimation');
    aboutSection.classList.remove('opacity-off');
}

const aboutSectionAnimation = () => {
    cardItem[0].classList.add('fromLeft');
    cardItem[1].classList.add('fromBottom');
    cardItem[2].classList.add('fromRight');;
}

//PROMOTION SECTION ANIMATION
const promotionSectionOpacity  = () => {
    promotionSection.classList.add('opacityAnimation');
    promotionSection.classList.remove('opacity-off');
}

const promotionSectionAnimation = () => {
    promotionLeft[0].classList.add('fromLeft');    
    promotionRight[0].classList.add('fromRight');
    promotionRight[1].classList.add('fromRight');
    promotionRight[2].classList.add('fromRight');
}

@@include('_glide.js');
@@include('_scroll.js');