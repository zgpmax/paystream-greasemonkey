// ==UserScript==
// @name        PayStream Expenses Total
// @namespace   http://blunn.org/
// @description Show a total amount for Expenses
// @include     https://portal.paystream.co.uk/PSC/Expenses/*
// @version     1
// @grant       none
// ==/UserScript==

// console.log('Start of PayStream Expenses Total');

var spans =
    document
        .getElementById('expense-claim-lines-body')
        .getElementsByTagName('span');

var i;
var total = 0.00;

for (i = 0; i < spans.length; i++) {
    if (spans[i].className == 'positive-money') {
        var value_text = spans[i].innerHTML;
        var value_float = parseFloat(value_text);

        // console.log('positive money ' + value_float);

        total += value_float;
    }
}

total = total.toFixed(2);

// console.log('Total ' + total);

var table = document.getElementById('expense-claim-lines');

var newTbody = document.createElement('tbody');
newTbody.id = 'expenses-total';
newTbody.innerHTML =
    '<tr>'
  +   '<td colspan="3" style="text-align: left; font-size: 14pt; font-weight: bold;">Total</td>'
  +   '<td class="money" style="padding-right: 12px; font-size: 14pt; font-weight: bold;">'
  +     total
  +   '</td>'
  +   '<td colspan="2"></td>'
  + '</tr>'
;
table.appendChild(newTbody);

// console.log('End of PayStream Expenses Total');
