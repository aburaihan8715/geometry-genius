// actions for triangle button
const parallelogramBtn = getTextElementById("parallelogram-btn");
parallelogramBtn.addEventListener("click", function () {
  // fetching parallelogram base and height input value
  const parallelogramBaseInputValue = getInputElementValueById("parallelogram-base-input");
  const parallelogramHeightInputValue = getInputElementValueById("parallelogram-height-input");

  // check each input value is not number
  if (isNaN(parallelogramBaseInputValue && parallelogramHeightInputValue)) {
    resetInputValue("parallelogram-base-input");
    resetInputValue("parallelogram-height-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(parallelogramBaseInputValue) || isNaN(parallelogramHeightInputValue)) {
    resetInputValue("parallelogram-base-input");
    resetInputValue("parallelogram-height-input");
    return alert("Please! input valid data.");
  }

  // check each input value negative number
  if (parallelogramBaseInputValue && parallelogramHeightInputValue < 0) {
    resetInputValue("parallelogram-base-input");
    resetInputValue("parallelogram-height-input");
    return alert("Input should not be negative.");
  } else if (parallelogramBaseInputValue < 0 || parallelogramHeightInputValue < 0) {
    resetInputValue("parallelogram-base-input");
    resetInputValue("parallelogram-height-input");
    return alert("Input should not be negative.");
  }

  // check each input value number
  if (typeof parallelogramBaseInputValue && typeof parallelogramHeightInputValue === "number") {
    // updating parallelogram base and height number
    setTextElementDataById("parallelogram-base-number", parallelogramBaseInputValue);
    setTextElementDataById("parallelogram-height-number", parallelogramHeightInputValue);

    // calculation for rectangle area
    const parallelogramAreaData = parallelogramBaseInputValue * parallelogramHeightInputValue;
    const parallelogramAreaDataTwoFloatingPoint = parseFloat(parallelogramAreaData.toFixed(2));

    // update area calculation list
    const listBox = getTextElementById("list-box");
    const listItem = document.createElement("li");
    listItem.classList.add("mb-2");
    listItem.innerHTML = `
        <span>Parallelogram</span>
        <span class="">${parallelogramAreaDataTwoFloatingPoint} <sup>2</sup></span>
        <button class="btn btn-sm bg-blue-500 hover:bg-blue-700 border-none lowercase font-normal">convert m<sup>2</sup></button>
        <button class="btn btn-sm">&times;</button>
    `;
    listBox.appendChild(listItem);
    // resetting triangle base and height input value
    resetInputValue("parallelogram-base-input");
    resetInputValue("parallelogram-height-input");
  }
});

// actions for change background
changeElementBackGroundById("parallelogram-card");
// ==========end==========
