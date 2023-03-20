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
const resetInputValue = (inputId) => {
  const inputElement = document.getElementById(inputId);
  return (inputElement.value = "");
};

// actions for blogs button
const blogsBtn = getTextElementById("blogs-btn");
blogsBtn.addEventListener("click", function () {
  location.href = "blogs.html";
});

// actions for generating random six digit data
const randomNumberGenerator = () => {
  const randomNumber = Math.round(Math.random() * 1000000);
  return randomNumber;
};
const getSixDigitRandomNumber = () => {
  const randomNumber = randomNumberGenerator();
  const randomNumberString = randomNumber + "";

  if (randomNumberString.length === 6) {
    return randomNumber;
  } else {
    return randomNumberGenerator();
  }
};

// function for changing background by id
const changeElementBackGroundById = (elementId) => {
  const element = document.getElementById(elementId);
  element.addEventListener("mouseover", function () {
    const sixDigitNumber = getSixDigitRandomNumber();
    element.style.backgroundColor = `#${sixDigitNumber}`;
  });
};
// ==============end================
