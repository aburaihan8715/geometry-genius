// calculation triangle area




// calculation for triangle
const triangleBtn=getTextElementById("triangle-btn");
triangleBtn.addEventListener("click",function(){

  // fetching triangle base and height input value
  const triangleBaseInputValue=getInputElementValueById("triangle-base-input");
  const triangleHeightInputValue=getInputElementValueById("triangle-height-input");

  // updating triangle base and height input value
  setTextElementDataById("triangle-base-number",triangleBaseInputValue);
  setTextElementDataById("triangle-height-number",triangleHeightInputValue);

  // calculation for triangle area
  const triangleAreaData= 0.5 * triangleBaseInputValue * triangleHeightInputValue;
  const triangleAreaDataTwoFloatingPoint=parseFloat(  triangleAreaData.toFixed(2));

  console.log(triangleAreaDataTwoFloatingPoint);

  // resetting triangle base and height input value
  resetInputValue("triangle-base-input");
  resetInputValue("triangle-height-input");




  // console.log(triangleBaseValue,triangleHeightValue);

})





// calculation for rectangle
// calculation for parallelogram
// calculation for rhombus
// calculation for pentagon
// calculation for ellipse