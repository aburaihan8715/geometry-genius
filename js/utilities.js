// ============common functions===================

// get text element by id
const getTextElementById = (elementId) => {
  const textElement = document.getElementById(elementId);
  return textElement;
};
// get input element value by id
const getInputElementValueById = (inputId) => {
  const inputElement = document.getElementById(inputId);
  const inputElementValue = parseFloat(inputElement.value);
  return inputElementValue;
};

// set input element value by id
const setInputElementValueById = (inputId, content) => {
  const inputElement = document.getElementById(inputId);
  inputElement.value = content;
};

// set text element data by id where the text element data number
const setTextElementDataById = (elementId, content) => {
  const textElement = document.getElementById(elementId);
  textElement.innerText = content;
};

// reset input value
const resetInputValue=(inputId)=>{
  const inputElement=document.getElementById(inputId);
  return inputElement.value="";

}

// ==============end================
