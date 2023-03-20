// actions for triangle button
const rhombusBtn = getTextElementById("rhombus-btn");
rhombusBtn.addEventListener("click", function () {
  // fetching rhombus d1 and d2 input value
  const rhombusD1InputValue = getInputElementValueById("rhombus-d1-input");
  const rhombusD2InputValue = getInputElementValueById("rhombus-d2-input");

  // check each input value is not number
  if (isNaN(rhombusD1InputValue && rhombusD2InputValue)) {
    resetInputValue("rhombus-d1-input");
    resetInputValue("rhombus-d2-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(rhombusD1InputValue) || isNaN(rhombusD2InputValue)) {
    resetInputValue("rhombus-d1-input");
    resetInputValue("rhombus-d2-input");
    return alert("Please! input valid data.");
  }

  // check each input value negative number
  if (rhombusD1InputValue && rhombusD2InputValue < 0) {
    resetInputValue("rhombus-d1-input");
    resetInputValue("rhombus-d2-input");
    return alert("Input should not be negative.");
  } else if (rhombusD1InputValue < 0 || rhombusD2InputValue < 0) {
    resetInputValue("rhombus-d1-input");
    resetInputValue("rhombus-d2-input");
    return alert("Input should not be negative.");
  }

  // check each input value number
  if (typeof rhombusD1InputValue && typeof rhombusD2InputValue === "number") {
    // updating parallelogram base and height number
    setTextElementDataById("rhombus-d1-number", rhombusD1InputValue);
    setTextElementDataById("rhombus-d2-number", rhombusD2InputValue);

    // calculation for rectangle area
    const rhombusAreaData = 0.5 * rhombusD1InputValue * rhombusD2InputValue;
    const rhombusAreaDataTwoFloatingPoint = parseFloat(rhombusAreaData.toFixed(2));

    // update area calculation list
    const listBox = getTextElementById("list-box");
    const listItem = document.createElement("li");
    listItem.classList.add("mb-2");
    listItem.innerHTML = `
        <span>Rhombus</span>
        <span class="">${rhombusAreaDataTwoFloatingPoint} <sup>2</sup></span>
        <button class="btn btn-sm bg-blue-500 hover:bg-blue-700 border-none lowercase font-normal">convert m<sup>2</sup></button>
        <button class="btn btn-sm">&times;</button>
    `;
    listBox.appendChild(listItem);
    // resetting triangle base and height input value
    resetInputValue("rhombus-d1-input");
    resetInputValue("rhombus-d2-input");
  }
});

// actions for change background
changeElementBackGroundById("rhombus-card");
// ==========end==========
