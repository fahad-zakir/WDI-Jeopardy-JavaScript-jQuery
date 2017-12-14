    // A $( document ).ready() block.
    $(document).ready(function () {
        console.log("ready!");
    });


    function modalFunctionForQuestionsOne() {
        var txt;
        var person = prompt('What does HTML stand for');
        if (person == null || person == "") {

        } else if (person === 'Hypertext Markup Language') {
            txt = 'Congragulations! You get $200';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-200").innerHTML = txt;
    }

    function modalFunctionForQuestionsTwo() {
        var txt;
        var person = prompt('What are the HTML elements represented by?');
        if (person == null || person == "") {

        } else if (person === 'Tags') {
            txt = 'Congragulations! You get $500';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-500").innerHTML = txt;
    }

    function modalFunctionForQuestionsThree() {
        var txt;
        var person = prompt('What is the root element of an HTML page');
        if (person == null || person == "") {

        } else if (person === '<html>') {
            txt = 'Congragulations! You get $1000';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-1000").innerHTML = txt;
    }

    function modalFunctionForQuestionsFour() {
        var txt;
        var person = prompt('What does CSS stand for');
        if (person == null || person == "") {

        } else if (person === 'Cascading Style Sheets') {
            txt = 'Congragulations! You get $200';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-200").innerHTML = txt;
    }

    function modalFunctionForQuestionsFive() {
        var txt;
        var person = prompt('Who oficially recommended CSS1 in 1995?');
        if (person == null || person == "") {

        } else if (person === 'W3C') {
            txt = 'Congragulations! You get $500';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-500").innerHTML = txt;
    }

    function modalFunctionForQuestionsSix() {
        var txt;
        var person = prompt('How do you call a class with the name slam in a CSS style.sheet?');
        if (person == null || person == "") {

        } else if (person === '.slam') {
            txt = 'Congragulations! You get $1000';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-1000").innerHTML = txt;
    }

    function modalFunctionForQuestionsSeven() {
        var txt;
        var person = prompt('What is declared to store data in JavaScript');
        if (person == null || person == "") {

        } else if (person === 'Variable') {
            txt = 'Congragulations! You get $200';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-200").innerHTML = txt;
    }

    function modalFunctionForQuestionsEight() {
        var txt;
        var person = prompt('Who is the founder of JavaScript?');
        if (person == null || person == "") {

        } else if (person === 'Brendan Eich') {
            txt = 'Congragulations! You get $500';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-500").innerHTML = txt;
    }

    function modalFunctionForQuestionsNine() {
        var txt;
        var person = prompt('What comes up when you add 0.1 and 0.2 in the console?');
        if (person == null || person == "") {

        } else if (person === '0.30000000000000004') {
            txt = 'Congragulations! You get $1000';
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-1000").innerHTML = txt;
    }

 
 var count = 0;
 var countEl = document.getElementById("count");

 function plus() {
     console.log("plus is clicked!")
     count += 200;
     countEl.value = count;
 }

 
     