// Copyright (c) 2023 conor All rights reserved
//
// Created by: conor-otoole
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-07/sw.js", {
    scope: "/ICS2O-Unit-5-07/",
  })
}

/**
 * This function runs an algorithm
 */
function adding() {
  //variables
  let numberOne = parseFloat(document.getElementById("numberOne").value)
  let sum = null
  //restart in number is negative
  if (numberOne < 0) {
    document.getElementById("restart").innerHTML =
      "Number is negative. Please reload the page."
  }
  //Factorial adding function
  else {
    while (numberOne > 0) {
      sum = sum + numberOne
      numberOne = numberOne - 1
    }
  }
  //output
  document.getElementById("output").innerHTML = sum
}