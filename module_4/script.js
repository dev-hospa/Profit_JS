/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
  document.getElementById("text-output").innerText = document.getElementById("text-input").value;
  }

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
  // if (change) {
  //   elem.setAttribute("class", "italic");
  // } else {

  // }
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
  elem.classList.toggle("active");
  let textFormat = document.getElementById("text-output").classList;
  if (textFormat.contains("underline")) {
    textFormat.remove("underline");
  } else {
    textFormat.add("underline");
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  elem.classList.toggle("active");
  let style = alignType;
  let buttons = document.getElementsByClassName("align");
  let text = document.getElementById("text-output");
  testSwitch(style, buttons, text);
}

function testSwitch(style, buttons, text){
  switch(style){
    case("left"):
      console.log("left");
      buttons[1].classList.remove("active");
      buttons[2].classList.remove("active");
      if(isActive(buttons[0])){
        text.style.textAlign = style;
      } else {
        text.style.textAlign = null;
      }
      break;
    case("center"):
      buttons[0].classList.remove("active");
      buttons[2].classList.remove("active");
      if(isActive(buttons[1])){
        text.style.textAlign = style;
      } else {
        text.style.textAlign = null;
      }
      break;
    case("right"):
      buttons[0].classList.remove("active");
      buttons[1].classList.remove("active");
      if(isActive(buttons[2])){
        text.style.textAlign = style;
      } else {
        text.style.textAlign = null;
      }
      break;
  }
}

function isActive(elem){
  return elem.classList.contains("active");
}

