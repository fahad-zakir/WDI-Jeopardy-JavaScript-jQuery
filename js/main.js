// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
});

let score = 0;
score += 200
console.log(score);
function myFunction() {
    var txt;
    var person = prompt('What does HTML stand for');
    if (person == null || person == "") {
    
    } else if (person === 'Hypertext Markup Language') {
        txt = 'Congragulations! You get $200';   
    } else {
        txt = 'Good Try! but that was incorrect.';
    }
    document.getElementById("new").innerHTML = txt;
}
var count = 200;
var countEl = document.getElementById("count");

function plus() {
    count += 200;
    countEl.value = count;
}

function minus() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}
