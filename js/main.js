    // A $( document ).ready() block.
    $(document).ready(function () {
        console.log("ready!");
    });


    var count = 0;
    var countEl = document.getElementById("count");

    function modalFunctionForQuestionOne() {
        var txt;
        var person = prompt('What does HTML stand for');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'hypertext markup language') {
            txt = 'Congragulations! You get $200';
            count += 200;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-200").innerHTML = txt;
    }

    function modalFunctionForQuestionTwo() {
        var txt;
        var person = prompt('What are the HTML elements represented by?');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'tags') {
            txt = 'Congragulations! You get $500';
            count += 500;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-500").innerHTML = txt;
    }

    function modalFunctionForQuestionThree() {
        var txt;
        var person = prompt('What is the root element of an HTML page');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === '<html>') {
            txt = 'Congragulations! You get $1000';
            count += 1000;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("html-1000").innerHTML = txt;
    }

    function modalFunctionForQuestionFour() {
        var txt;
        var person = prompt('What does CSS stand for');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'cascading style sheets') {
            txt = 'Congragulations! You get $200';
            count += 200;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-200").innerHTML = txt;
    }

    function modalFunctionForQuestionFive() {
        var txt;
        var person = prompt('Who oficially recommended CSS1 in 1995?');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'w3c') {
            txt = 'Congragulations! You get $500';
            count += 500;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-500").innerHTML = txt;
    }

    function modalFunctionForQuestionSix() {
        var txt;
        var person = prompt('How do you call a class with the name slam in a CSS style.sheet?');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === '.slam') {
            txt = 'Congragulations! You get $1000';
            count += 1000;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("css-1000").innerHTML = txt;
    }

    function modalFunctionForQuestionSeven() {
        var txt;
        var person = prompt('What is declared to store data in JavaScript');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'variable') {
            txt = 'Congragulations! You get $200';
            count += 200;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-200").innerHTML = txt;
    }

    function modalFunctionForQuestionEight() {
        var txt;
        var person = prompt('Who is the founder of JavaScript');
        if (person == null || person == "") {

        } else if (person.toLowerCase() === 'brendan eich') {
            txt = 'Congragulations! You get $500';
            count += 500;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-500").innerHTML = txt;
    }

    function modalFunctionForQuestionNine() {
        var txt;
        var person = prompt('What comes up when you add 0.1 and 0.2 in the console?');
        if (person == null || person == "") {

        } else if (person === '0.30000000000000004') {
            txt = 'Congragulations! You get $1000';
            count += 1000;
            countEl.innerHTML = count;
            setTimeout(function(){
              $(".close-modal").click();
            }, 500);
        } else {
            txt = 'Good Try! but that was incorrect.';
        }
        document.getElementById("js-1000").innerHTML = txt;
    }
