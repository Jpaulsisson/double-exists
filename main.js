/////The challenge is to check an entire array of integers to see if any////////
/////element in the array, shares the array with the double of itself///////////

//////Input: arr = [10,2,5,3]//////////////////////////
////////Output: true////////////////////////////////////
//////////Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]///////

////first attempt//////

function areThereDoubles(arr) {
  let answer = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {                    /////WORKS GREAT UNLESS THERE ARE TWO ZEROES LOL
            if (arr[i] !== 0 && arr[i] * 2 === arr[j]) {
                answer = true;
            }
        }
    } return answer;
};

// console.log(areThereDoubles([10, 2, 5, 3]));
// console.log(areThereDoubles([3, 1, 7, 11]));
// console.log(areThereDoubles([-2,0,10,-19,4,6,-8]));

function iCanHasDoubles(arr) {
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && arr.includes(arr[i] * 2)) {                     //////THIS SOLVES IT FOR GOOD WITH HIGH EFFICIENCY
      answer = true;                                                      
    } else if (arr[i] === 0 && arr.includes(0, i + 1)) {
      answer = true;
    }
  }
    return answer;
}

console.log(iCanHasDoubles([10, 2, 5, 3]));
console.log(iCanHasDoubles([3, 1, 7, 11]));
console.log(iCanHasDoubles([-2,0,10,-19,4,6,-8]));