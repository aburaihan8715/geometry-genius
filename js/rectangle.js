// actions for triangle button
const rectangleBtn = getTextElementById("rectangle-btn");
rectangleBtn.addEventListener("click", function () {
  // fetching rectangle width and length input value
  const rectangleWidthInputValue = getInputElementValueById("rectangle-width-input");
  const rectangleLengthInputValue = getInputElementValueById("rectangle-length-input");

  // check each input value is not number
  if (isNaN(rectangleWidthInputValue && rectangleLengthInputValue)) {
    resetInputValue("rectangle-width-input");
    resetInputValue("rectangle-length-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(rectangleWidthInputValue) || isNaN(rectangleLengthInputValue)) {
    resetInputValue("rectangle-width-input");
    resetInputValue("rectangle-length-input");
    return alert("Please! input valid data.");
  }


  // check each input value negative number
  if (rectangleWidthInputValue && rectangleLengthInputValue < 0) {
    resetInputValue("triangle-base-input");
    resetInputValue("triangle-height-input");
    return alert("Input should not be negative.");
  } else if (rectangleWidthInputValue < 0 || rectangleLengthInputValue < 0) {
    resetInputValue("triangle-base-input");
    resetInputValue("triangle-height-input");
    return alert("Input should not be negative.");
  }

  // check each input value number
  if (typeof rectangleWidthInputValue && typeof rectangleLengthInputValue === "number") {
    // updating rectangle width and length input value
    setTextElementDataById("rectangle-width-number", rectangleWidthInputValue);
    setTextElementDataById("rectangle-length-number", rectangleLengthInputValue);

    // calculation for rectangle area
    const rectangleAreaData =rectangleWidthInputValue * rectangleLengthInputValue;
    const rectangleAreaDataTwoFloatingPoint = parseFloat(rectangleAreaData.toFixed(2));

    // update area calculation list area calculation headings
    const listBox = getTextElementById("list-box");
    const listItem=document.createElement("li");
    listItem.classList.add("mb-2");
    listItem.innerHTML=`
        <span>Rectangle</span>
        <span class="">${rectangleAreaDataTwoFloatingPoint} <sup>2</sup></span>
        <button class="btn btn-sm bg-blue-500 hover:bg-blue-700 border-none lowercase font-normal">convert m<sup>2</sup></button>
        <button class="btn btn-sm">&times;</button>
    `
    listBox.appendChild(listItem);
    // resetting triangle base and height input value
    resetInputValue("rectangle-width-input");
    resetInputValue("rectangle-length-input");
  }
});

// actions for change background
changeElementBackGroundById("rectangle-card");
// ==========end==========
