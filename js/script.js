// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * This function calculates area of a trapezoid
 */
function calculateAreaClicked() {
  // taking the values for the calculations
  let longBase = parseInt(document.getElementById('long-base').value);
  let shortBase = parseInt(document.getElementById('short-base').value);
  let height = parseInt(document.getElementById('height').value);

  //wow calculations
  let area = (longBase * shortBase) / 2 * height;

  // output dropper :)
  document.getElementById('area').innerHTML = 'the area of the trapezoid is ' + area.toFixed(2) + 'cm <sup>2</sup>';
}