// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let waitingTime;

  // `'Pure Strawberry Joy'` takes 0.5 minutes, `'Energizer'` and `'Green Garden'` take 1.5 minutes each, `'Tropical Island'` takes 3 minutes and `'All or Nothing'` takes 5 minutes.

  switch (name) {
    case "Pure Strawberry Joy": 
        waitingTime = 0.5
        break;
    case "Energizer":
        waitingTime = 1.5
        break;
    case "Green Garden":
        waitingTime = 1.5
        break;
    case "Tropical Island":
        waitingTime = 3
        break;
    case "All or Nothing": 
        waitingTime = 5
        break;
    default:
        waitingTime = 2.5
        break;
  }

  return waitingTime;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  let amountOfLimes = 0;
  let wedgesThatCanBeCut = 0;

while (wedgesThatCanBeCut < wedgesNeeded && amountOfLimes < limes.length) {

  switch (limes[amountOfLimes]) {

    case "small": wedgesThatCanBeCut+= 6
    break;
    case "medium": wedgesThatCanBeCut+= 8
    break;
    case "large": wedgesThatCanBeCut+= 10
    break;
  }
amountOfLimes++
}

return(amountOfLimes);



}

/**
 * Determines which juices still need to be prepared after the end of the shift();.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  let  i = 0;
  let leftOrders = [];

do {

  timeLeft-= timeToMixJuice(orders[i]);

  i++


} while (timeLeft > 0 &&  i < orders.length)
  leftOrders = orders.slice(i)

  return(leftOrders)


} 

