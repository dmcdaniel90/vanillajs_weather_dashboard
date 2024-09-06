/**
 * Converts temperature from Celcius to Farenheit
 * @param {number} tempInCelcius
 * @returns {number} tempInFarenheit
 * @example
 * convertToCelcius(32)
 * // 0
 * convertToCelcius(0)
 * // 32
 * convertToCelcius(-40)
 * // -40
 * convertToCelcius(100)
 * // 37
 */

export default function convertToCelcius(tempInCelcius) {
  return (tempInCelcius * 9) / 5 + 32;
}
