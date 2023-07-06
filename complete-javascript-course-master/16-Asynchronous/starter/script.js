'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const createImage = (imgPath) => {
    return new Promise((resolve)=>{
        const image = document.createElement('img')
        document.getElementById('img').src = imgPath
        image.onload = function () {
            alert ("The image has loaded!");        
        };
    })
}

