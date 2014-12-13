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
    'thead#expense-claim-lines-header th#total '
  +     '{ text-align: right !important; padding-right: 12px; }'
  + 'tbody#expense-claim-lines-body td[headers=date] '
  +     '{ text-align: right !important; }'
  + 'thead#expense-claim-lines-header th#type, '
  + 'thead#expense-claim-lines-header th#business-purpose, '
  + 'tbody#expense-claim-lines-body td[headers=type], '
  + 'tbody#expense-claim-lines-body td[headers=business-purpose] '
  +     '{ text-align: left !important; } '
); 

// console.log( "End of PayStream Fix Expenses Table Alignment" );

