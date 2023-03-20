// actions for triangle button
const triangleBtn = getTextElementById("triangle-btn");
triangleBtn.addEventListener("click", function () {
  // fetching triangle base and height input value

  const triangleBaseInputValue = getInputElementValueById("triangle-base-input");
  const triangleHeightInputValue = getInputElementValueById("triangle-height-input");

  // check each input value is not number
  if (isNaN(triangleBaseInputValue && triangleHeightInputValue)) {
    resetInputValue("triangle-base-input");
    resetInputValue("triangle-height-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(triangleBaseInputValue) || isNaN(triangleHeightInputValue)) {
    resetInputValue("triangle-base-input");
    resetInputValue("triangle-height-input");
    return alert("Please! input valid data.");
  }

  // check each input value number
  if (typeof triangleBaseInputValue && typeof triangleHeightInputValue === "number") {
    // updating triangle base and height input value
    setTextElementDataById("triangle-base-number", triangleBaseInputValue);
    setTextElementDataById("triangle-height-number", triangleHeightInputValue);

    // calculation for triangle area
    const triangleAreaData = 0.5 * triangleBaseInputValue * triangleHeightInputValue;
    const triangleAreaDataTwoFloatingPoint = parseFloat(triangleAreaData.toFixed(2));

    // update area calculation list area calculation headings
    const listBox = getTextElementById("list-box");
    listBox.innerHTML = `
  <li class="mb-2">
    <span>Triangle</span>
    <span class="">${triangleAreaDataTwoFloatingPoint}cm <sup>2</sup></span>
    <button class="btn btn-sm bg-blue-500 hover:bg-blue-700 border-none lowercase font-normal">convert m<sup>2</sup></button>
    <button class="btn btn-sm">&times;</button>
  </li>
  `;

    // resetting triangle base and height input value
    resetInputValue("triangle-base-input");
    resetInputValue("triangle-height-input");
  }
});




// actions for change background
changeElementBackGroundById("triangle-card");


// calculation for rectangle
// calculation for parallelogram
// calculation for rhombus
// calculation for pentagon
// calculation for ellipse
