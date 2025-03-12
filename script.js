let goodtrips = document.querySelector('.good_trips'),

myScrollFuncGoodTrips = function() {
    var y = window.scrollY;
    let animImg = document.querySelector('.good_trips_img');
    let animTxt = document.querySelector('.good_trips_text');
    if (y > 500) {
        goodtrips.style.visibility = 'visible';
        animImg.classList.add('animation');
        animTxt.classList.add('animation');
    }

    if (y > 2800) {
        animImg.classList.remove('animation');
        animTxt.classList.remove('animation');
    }
}

let gallery = document.querySelector('.gallery')

myScrollFuncGallery = function() {
    var y = window.scrollY;
    let animImg1 = document.querySelector('.gallery_img_1');
    let animImg2 = document.querySelector('.gallery_img_2');
    let animImg3 = document.querySelector('.gallery_img_3');
    let animDecor1 = document.querySelector('.gallery_decor_1');
    let animDecor2 = document.querySelector('.gallery_decor_2');

    if (y > 1300) {
        gallery.style.visibility = "visible";
        animImg1.classList.add('animation');
        animImg2.classList.add('animation');
        animImg3.classList.add('animation');
        animDecor1.classList.add('animation');
        animDecor2.classList.add('animation');
    } 
    
    if (y > 3500) {
        animImg1.classList.remove('animation');
        animImg2.classList.remove('animation');
        animImg3.classList.remove('animation');
        animDecor1.classList.remove('animation');
        animDecor2.classList.remove('animation');
    }
}

let journeys = document.querySelector('.journeys')

myScrollFuncJourneys = function() {
    var y = window.scrollY;
    let animContainerText = document.querySelector('.journeys_container_text');
    let animImg = document.querySelector('.journeys_container_img')
    let animText = document.querySelector('.journeys_text p');

    if (y > 2800) {
        journeys.style.visibility = "visible";
        animContainerText.classList.add('animation');
        animImg.classList.add('animation');
        animText.classList.add('animation');
    }

    if (y > 4300) {
        animContainerText.classList.remove('animation');
        animImg.classList.remove('animation');
        animText.classList.remove('animation');        
    }
}

let comments = document.querySelector('.comments');

myScrollFuncComments = function() {
    var y = window.scrollY;
    let animCommentsImg = document.querySelector('.comments_img');
    let animCommentsImgDecor1 = document.querySelector('.comments_img_decor_1');
    let animCommentsImgDecor2 = document.querySelector('.comments_img_decor_2');
    let animCommentsContainer = document.querySelector('.comments_container');

    if (y > 4900) {
        comments.style.visibility = 'visible';
        animCommentsImg.classList.add('animation');
        animCommentsImgDecor1.classList.add('animation');
        animCommentsImgDecor2.classList.add('animation');
        animCommentsContainer.classList.add('animation');
    }

    if (y > 8000) {
        animCommentsImg.classList.remove('animation');
        animCommentsImgDecor1.classList.remove('animation');
        animCommentsImgDecor2.classList.remove('animation');
        animCommentsContainer.classList.remove('animation');
    }
}

let commentsText = document.querySelector('.comments_text');

myScrollFuncCommentsText = function() {
    var y = window.scrollY;
    let animCommentsText = document.querySelector('.comments_text');
    if (y > 6000) {
        animCommentsText.style.visibility = "visible";
        animCommentsText.classList.add('animation');
    }
}

myScrollFuncHolidayText = function() {
    var y = window.scrollY;
    let animHolidayText = document.querySelector('.holiday_text');

    if (y > 6900) {
        animHolidayText.classList.add('animation');
    }
}

window.addEventListener("scroll", myScrollFuncGoodTrips);
window.addEventListener("scroll", myScrollFuncGallery);
window.addEventListener("scroll", myScrollFuncJourneys);
window.addEventListener("scroll", myScrollFuncComments);
window.addEventListener("scroll", myScrollFuncCommentsText);
window.addEventListener("scroll", myScrollFuncHolidayText);
