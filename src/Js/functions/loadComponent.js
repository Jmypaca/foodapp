"use strict";

export default function loadComponent(template = ''){
    return fetch('../components/' + template)
    .then(response=> response.text())
    .then(text=> {
        const html = document.createElement('div');
        html.innerHTML = text;
        return html;
    });
  }