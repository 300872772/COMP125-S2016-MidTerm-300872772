/**
 * FileName: app.js
 * @author: Md Mamunur Rahman
 * website: http://comp125-s2016-midterm-300872772.azurewebsites.net
 * @description: This file is the main javascript file for this web site
 */

// IIFE (Immediately Invoked Function Expression)
(function () {
    "use strict";


    /**
     * This function calls all other functions 
     * 
     * @function InitialFunction
     * @returns {void}
     */
    function InitialFunction() {

        ContatctFormEventHandling();
        InsertParagraphData();
    }


function InsertParagraphData(){

    var IntroParagraph = document.getElementById("IntroParagraph");

var introParaData = "Now is the time to travel to Greece." 
+"The country may be going through an economic crisis,"
+"but many travellers say that it hasn't impacted the experience of visiting."+
"Plus, there may be some great deals." 
+"Greece has 1,400 islands, though only 230 of them are inhabited." 
+"And while everyone knows about Santorini and Mykonos, there are "
+"gorgeous lesser-known islands in Greece, too.";

IntroParagraph.innerHTML = introParaData;

}





    /**
     * This functionhanding event for conatct form
     * 
     * @function ContatctFormEventHandling
     * @returns {void}
     */
    function ContatctFormEventHandling() {

        var contactForm = document.getElementById("contactForm").addEventListener("submit", getFormData);

    }

    /**
     * This function collect data from element of form in concat page
     * 
     * @function getFormData
     * @param {object} event
     * @returns {void}
     */
    function getFormData(event) {

        event.preventDefault();

        firstName = document.getElementById("firstName");
        lastName = document.getElementById("lastName");
        contactNumber = document.getElementById("contactNumber");
        email = document.getElementById("email");
        yourMessage = document.getElementById("yourMessage");

        displaFormData();

        contactForm.reset();
    }

    function displaFormData() {

        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Contact Number: " + contactNumber.value);
        console.log("Your Message: " + yourMessage.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++");


    }


    window.addEventListener("load", InitialFunction);
})();

