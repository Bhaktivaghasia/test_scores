"use strict";

// get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter score for first test"));

const score2 = parseInt(prompt("Enter score for second test"));

const score3 = parseInt(prompt("Enter score for third test"));

const score4 = parseInt(prompt("Enter score for fourth test"));

const total = score1 + score2 + score3 + score4;

// calculate the average
const average = parseInt(total/4);

// display in browser page
const html = `<p> Score 1 =${score1}</p>
    <p> Score 2 = &nbsp;${score2}</p>
    <p> Score 3= &nbsp;${score3}</p>
    <p> Score 4 = &nbsp;${score4}</p>
    <p>Average score = &nbsp;${average}</p>`;
document.write(html);