import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-algorithms',
  templateUrl: './javascript-algorithms.component.html',
  styleUrls: ['./javascript-algorithms.component.css']
})
export class JavascriptAlgorithmsComponent implements OnInit {

  constructor() { }

  javascript_fibonacci = `
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

  javascript_palindrome = `
  function palindrome(str){
    let regx = /[\W_]/g;
    let lowerRegStr = str.toLowerCase().replace(regx, '');
    let reverseStr = lowerRegStr.split('').reverse().join('');
    return reverseStr === lowerRegStr ? "Palindrome!" : "Not a Palindrome!";
  }
  console.info(palindrome("Madam In Eden, I’m Adam"));  
  `;

  javascript_bubblesort = `
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

  javascript_diamatrix = `
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

  javascript_missing_number = `
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

  javascript_duplicates = `
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

  javascript_prime_number = `
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

  javascript_odd_number = `
  function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }  
  `;

  javascript_even_number = `
  function printEven(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }  
  `;

  javascript_sum_of_two_arrays = `
  function sum(arr1,arr2){
    var total = [];
    var len = 0;
    arr1.length > arr2.length ? len = arr1.length : len = arr2.length;
    for(var i=0; i<len; i++){
       if(arr1[i] === undefined) arr1[i] = 0;
       if(arr2[i] === undefined) arr2[i] = 0;
      
        total.push(arr1[i] + arr2[i])
    }
    return total;
  }
   
  console.log(sum([2,6,3,4,6,8],[1,3,2,4,1,2,1,2])); 
  `;

  ngOnInit(): void {
  }

}
