import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript-algorithms',
  imports: [],
  templateUrl: './javascript-algorithms.html',
  styleUrl: './javascript-algorithms.scss',
})
export class JavascriptAlgorithms {
  protected readonly javascript_fibonacci = `
  let fibGen = function(n){
    if(n === 1){
      return [0,1];
    } else {
      let fibArray = fibGen(n - 1);
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
      return fibArray;
    }
  }

  console.log(fibGen(8));
  `;

  protected readonly javascript_palindrome = `
  function palindrome(str){
    let regx = /[\\W_]/g;
    let lowerRegStr = str.toLowerCase().replace(regx, '');
    let reverseStr = lowerRegStr.split('').reverse().join('');
    return reverseStr === lowerRegStr ? "Palindrome!" : "Not a Palindrome!";
  }
  console.info(palindrome("Madam In Eden, I’m Adam"));
  `;

  protected readonly javascript_bubblesort = `
  function bubbleSort(arr){
    for(let i=arr.length; i>0; i--){
      for(let j=0; j<i;j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp
        }
      }
     }
     return arr;
    }

    console.log(bubbleSort([16,12,35,45,21]));
  `;

  protected readonly javascript_diamatrix = `
  function diagonalSums(matrix) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
  }

  diagonalSums([[20, 10, 40], [10, 30, 60], [10, 10, 10]]);

  `;

  protected readonly javascript_missing_number = `
  let arr = [1,2,3,4,5,6,7,8,10];

  const findMissingNum = (arr) => {
    for(var i = 0; i < arr.length - 1; i++) {
      if(arr[i] + 1 != arr[i+1] ) {
        return arr[i] + 1;
      }
    }

    return false;
  }

  console.log(findMissingNum(arr)); // Returns 9, the missing number
  `;

  protected readonly javascript_duplicates = `
  const arr = [1,2,3,4,5,6,7,7,8,6,10];

  const findDupes = (arr) => {
   const observed = {};
  for(let i = 0; i < arr.length; i++) {
     if(observed[arr[i]]) {
       return arr[i]
     } else {
       observed[arr[i]] = arr[i];
     }
   }
   return false;
  }
  console.log(findDupes(arr)); // Returns 7
  `;

  protected readonly javascript_prime_number = `
  let c = 0;

  function isPrime(num){
    for(let i=0; i<=num; i++){
      if((num%i) === 0){
        c = c+1;
      }
    }
    if(c === 2){
      return console.log(num + " is a prime number");
    } else {
      return console.log(num + " is not a prime number");
    }
  }

  isPrime(2);
  `;
}
