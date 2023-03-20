// actions for triangle button
const ellipseBtn = getTextElementById("ellipse-btn");
ellipseBtn.addEventListener("click", function () {
  // fetching pentagon p and b input value
  const ellipseAInputValue = getInputElementValueById("ellipse-a-input");
  const ellipseBInputValue = getInputElementValueById("ellipse-b-input");

  // check each input value is not number
  if (isNaN(ellipseAInputValue && ellipseBInputValue)) {
    resetInputValue("ellipse-a-input");
    resetInputValue("ellipse-b-input");
    return alert("Please! input valid data.");
  }

  // check one input value number and other not a number
  if (isNaN(ellipseAInputValue) || isNaN(ellipseBInputValue)) {
    resetInputValue("ellipse-a-input");
    resetInputValue("ellipse-b-input");
    return alert("Please! input valid data.");
  }

  // check each input value negative number
  if (ellipseAInputValue && ellipseBInputValue < 0) {
    resetInputValue("ellipse-a-input");
    resetInputValue("ellipse-b-input");
    return alert("Input should not be negative.");
  } else if (ellipseAInputValue < 0 || ellipseBInputValue < 0) {
    resetInputValue("ellipse-a-input");
    resetInputValue("ellipse-b-input");
    return alert("Input should not be negative.");
  }

  // check each input value number
  if (typeof ellipseAInputValue && typeof ellipseBInputValue === "number") {
    // updating ellipse a and b number
    setTextElementDataById("ellipse-a-input", ellipseAInputValue);
    setTextElementDataById("ellipse-b-input", ellipseBInputValue);

    // calculation for rectangle area
    const ellipseAreaData = 3.1 * ellipseAInputValue * ellipseBInputValue;
    const ellipseAreaDataTwoFloatingPoint = parseFloat(ellipseAreaData.toFixed(2));

    // update area calculation list
    const listBox = getTextElementById("list-box");
    const listItem = document.createElement("li");
    listItem.classList.add("mb-2");
    listItem.innerHTML = `
        <span>Ellipse</span>
        <span class="">${ellipseAreaDataTwoFloatingPoint} <sup>2</sup></span>
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
changeElementBackGroundById("ellipse-card");
// ==========end==========
