/*
 * Starter file 
 */

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

function handleClick(){
  console.log("Button Clicked!");
  document.getElementById("result").innerHTML = shiftCipher(2);
}

function shiftCipher(n){
  //This does not concider for "." or numerics
  var str = document.getElementById("input-text").value;
  var charcode = 0;
  var result = '';
  var regex = /[a-zA-Z]/;
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'z'){
      result += 'a';
    }
    else if(regex.test(str[i]) == true){
      charcode = (str[i].charCodeAt()) + n;
      result += String.fromCharCode(charcode);
    }
    else{
      result += str[i];
    }
  }
  console.log(result)
  return result;
}