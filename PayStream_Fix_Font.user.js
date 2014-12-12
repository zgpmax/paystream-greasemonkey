// ==UserScript==
// @name        PayStream Fix Font
// @namespace   http://blunn.org/
// @description Fix the VAGRoundedLight font on PayStream
// @include     https://portal.paystream.co.uk/*
// @version     1
// @grant       none
// ==/UserScript==

// console.log( "Start of PayStream Fix Font" );

function addCss(cssString) {
    var head = document.getElementsByTagName('head')[0];

    if (!head) {
        console.log("No head");
        return;
    }

    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
}

addCss(
    'body, h1, h2, h3, h4, thead th, thead td, '
  + '.ui-widget, .ui-widget input, .ui-widget select, .ui-widget textarea, '
  + '.ui-widget button, td.money '
  +     '{ font-family: sans-serif; }'
); 

// console.log( "End of PayStream Fix Font" );

