// ==UserScript==
// @name        PayStream Fix Expenses Table Alignment
// @namespace   http://blunn.org/
// @description Fix alignment in expenses table on PayStream
// @include     https://portal.paystream.co.uk/PSC/Expenses/Claim/*
// @version     1
// @grant       none
// ==/UserScript==

// console.log( "Start of PayStream Fix Expenses Table Alignment" );

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
    'tbody#expense-claim-lines-body td[headers=date] '
  +     '{ text-align: right !important; }'
  + 'tbody#expense-claim-lines-body td[headers=type], '
  + 'tbody#expense-claim-lines-body td[headers=business-purpose] '
  +     '{ text-align: left !important; } '
); 

// console.log( "End of PayStream Fix Expenses Table Alignment" );

