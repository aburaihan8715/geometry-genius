// actions for triangle button
const pentagonBtn = getTextElementById("pentagon-btn");
pentagonBtn.addEventListener("click", function () {
  // fetching pentagon p and b input value
  const pentagonPInputValue = getInputElementValueById("pentagon-p-input");
  const pentagonBInputValue = getInputElementValueById("pentagon-b-input");

  // check each input value is not number
  if (isNaN(pentagonPInputValue && pentagonBInputValue)) {
    resetInputValue("pentagon-p-input");
    resetInputValue("pentagon-b-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(pentagonPInputValue) || isNaN(pentagonBInputValue)) {
    resetInputValue("pentagon-p-input");
    resetInputValue("pentagon-b-input");
    return alert("Please! input valid data.");
  }

  // check each input value negative number
  if (pentagonPInputValue && pentagonBInputValue < 0) {
    resetInputValue("pentagon-p-input");
    resetInputValue("pentagon-b-input");
    return alert("Input should not be negative.");
  } else if (pentagonPInputValue < 0 || pentagonBInputValue < 0) {
    resetInputValue("pentagon-p-input");
    resetInputValue("pentagon-b-input");
    return alert("Input should not be negative.");
  }

  // check each input value number
  if (typeof pentagonPInputValue && typeof pentagonBInputValue === "number") {
    // updating pentagon p and b number
    setTextElementDataById("pentagon-p-input", pentagonPInputValue);
    setTextElementDataById("pentagon-b-input", pentagonBInputValue);

    // calculation for rectangle area
    const pentagonAreaData = 0.5 * pentagonPInputValue * pentagonBInputValue;
    const pentagonAreaDataTwoFloatingPoint = parseFloat(pentagonAreaData.toFixed(2));

    // update area calculation list
    const listBox = getTextElementById("list-box");
    const listItem = document.createElement("li");
    listItem.classList.add("mb-2");
    listItem.innerHTML = `
        <span>Pentagon</span>
        <span class="">${pentagonAreaDataTwoFloatingPoint} <sup>2</sup></span>
        <button class="btn btn-sm bg-blue-500 hover:bg-blue-700 border-none lowercase font-normal">convert m<sup>2</sup></button>
        <button class="btn btn-sm">&times;</button>
    `;
    listBox.appendChild(listItem);
    // resetting triangle base and height input value
    resetInputValue("pentagon-p-input");
    resetInputValue("pentagon-b-input");
  }
});

// actions for change background
changeElementBackGroundById("pentagon-card");
// ==========end==========
