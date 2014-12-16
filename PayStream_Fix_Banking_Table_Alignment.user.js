// ==UserScript==
// @name        PayStream Fix Banking Table Alignment
// @namespace   http://blunn.org/
// @description Fix alignment in banking table on PayStream
// @include     https://portal.paystream.co.uk/PSC/Banking/Index/*
// @version     1
// @grant       none
// ==/UserScript==

// console.log( "Start of PayStream Fix Banking Table Alignment" );

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
    'table#transactions thead th#description, '
  + 'table#transactions thead th#type, '
  + 'table#transactions tbody#rows td[headers=description], '
  + 'table#transactions tbody#rows td[headers=type] '
  +     '{ text-align: left !important; } '
); 

// console.log( "End of PayStream Fix Banking Table Alignment" );

