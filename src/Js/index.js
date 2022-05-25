"use strict";
import loadComponent from "./functions/loadComponent.js";

loadComponent('header.html').then( component =>{    
    document.querySelector('body').innerHTML = '';
    document.querySelector('body').append(component);
});