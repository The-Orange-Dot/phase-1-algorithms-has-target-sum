function hasTargetSum(array, target) {
  let num;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      num = target - array[i];
      for (let j = 2; j < array.length; j++) {
        let search = array[j] === num;
        if (search === true) {
          return true;
        }
      }
    }
  }
  return false;
}

/* 
O[n^2] Since this has 2 nested loops inside. 
*/

/* 
  ================================
  TO-DO
  ================================

  - Iterate through the array.
  - "target" will be subtracted by the first iteration with the answer of X
  - Search through the Array for X
  - If found, returns TRUE
  - If FALSE, keeps going through until the end
*/

/*
-The hasTargetSum() function takes in the array and target properties and first creates an empty container "num". 
-During the first iteration, the function checks if the first number (lets call it "i") is lower than the target. 
-If not, it moves to the next number right away.
-If it passes the check, the target is subtracted by i and stored in the num variable. 
-The function then checks to see if there are any numbers equal to num (Adding num to i would result in the sum of target).
-If there are, the code stops and returns TRUE. If not, it will move on to the next number and continue until 
it reaches the end then returning FALSE.
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 2, 5, 8, 2, 1, 3, 2, 5], 4));
}

module.exports = hasTargetSum;
