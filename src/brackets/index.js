/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    let map =  {
        ")": "(",
        "}": "{",
        "[": "]"
    }
    let stack = [];
    for(let i=0; i<str.length; i++) {
        if(str[i] === "(" || str[i] === "[" || str[i] ===  "{") {
            stack.push(str[i]);
        }  else if(stack[stack.length - 1] === map[str[i]]) {
            stack.pop()
        } else return false;
    }
return stack.length? false : true

}
console.log(isValid)

module.exports = isValid;
