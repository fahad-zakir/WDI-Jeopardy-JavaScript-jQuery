// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
});
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
