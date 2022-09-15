/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    let translations = new Map()

    translations.set("I", 1);
    translations.set("V", 5);
    translations.set("X", 10);
    translations.set("L", 50);
    translations.set("C", 100);
    translations.set("D", 500);
    translations.set("M", 1000);

    let number = 0;
    roman = roman.replace("IV", "IIII").replace("IX", "VIIII");
    roman = roman.replace("XL", "XXXX").replace("XC", "LXXXX");
    roman = roman.replace("CD", "CCCC").replace("CM", "DCCCC");

    for(let char of roman) {
        number += translations.get(char);
    }
    return number;
}

//console.log(roman);

console.log(romanToDecimal);
module.exports = romanToDecimal;
