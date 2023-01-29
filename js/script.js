// Copyright (c) 2023 conor All rights reserved
//
// Created by: conor-otoole
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-07/sw.js", {
    scope: "/ICS2O-Unit-5-07/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  var number = parseFloat(document.getElementById("number-input").value)
  var sum = 0
  var counter = 0
  var loop = 0

  for (let loop = 0; loop < number; ) {
    loop++
    sum = sum + loop
    document.getElementById("hello-world").innerHTML =
      "You get " + sum + ".<br>"
  }
}