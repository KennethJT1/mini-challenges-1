/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
   let arr=[];

 for(let i=0;i<array.length;i++){
     arr.push([])

     for(let j=0;j<array.length;j++){
         arr[i].push(array[j][i])
     }
 }
 return arr
}
console.log(transpose)
  
module.exports = transpose;
