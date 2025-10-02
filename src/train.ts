
//TaskZG 

function xammasiAlohidaBolishiKerak(str: string): string {
  return str
    .trim()                  
    .toLowerCase()           
    .replace(/\s+/g, '_');   
}

const result: string = xammasiAlohidaBolishiKerak(' xammasi Alohida Bolishi Kerak ');
console.log(result); // 'name_should_be_a_string'




// function qiyinBolganidandir(str: string): string {
//   return str
//     .split(' ')
//     .map(word => {
//       if (word.length <= 2) return word;
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(' ');
// }

// // Test
// console.log(qiyinBolganidandir('name should be a string')); 
// console.log(qiyinBolganidandir('an example of a small and big words')); 



//task ZE

// function removeDuplicate(str: string): string {
//   return [...new Set(str)].join('');
// }

// // Test
// console.log(removeDuplicate("programming"));  // progamin
// console.log(removeDuplicate("aabbcc"));       // abc
// console.log(removeDuplicate("typescript"));   // typescri




// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
 
//   const newArr = [...arr];  


//   if (index >= 0 && index < newArr.length) {
//     newArr[index] = newValue;
//   }

//   return newArr;
// }


// console.log(changeNumberInArray(1, [2, 3, 4, 7], 2)); 





//Task ZC
// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9 / 5) + 32;
// }


// console.log(celsiusToFahrenheit(0));   
// console.log(celsiusToFahrenheit(20));  
// console.log(celsiusToFahrenheit(43));  



//Task ZA

// type Person = {
//   age: number;
// };

// function sortByAge(arr: Person[]): Person[] {
//   return arr.sort((a, b) => a.age - b.age);
// }


// const result = sortByAge([{ age: 73 }, { age: 51 }, { age: 33 }]);
// console.log(result);










//Task  Z
// function sumEvens(arr: number[]): number {
//   return arr
//     .filter(num => num % 2 === 0) // faqat juftlarni qoldiramiz
//     .reduce((sum, num) => sum + num, 0); // yig'indisini olamiz
// }

// console.log(sumEvens([8, 8, 6]));      
// console.log(sumEvens([1, 2, 7, 2]));   
// console.log(sumEvens([5, 7, 11]));     
// console.log(sumEvens([2, 4, 6, 8]));   





//Task V
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value, index) => 
//     arr2.includes(value) && arr1.indexOf(value) === index
//   );
// }

// // Test
// console.log(findIntersection([8, 7, 6], [6, 7, 0])); 



//Task X

// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) {
//       count++;
//     }
//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: "Ravon", steer: { model: "CharmMCHJ", size: 25 } },
//     "model"
//   )
// ); 



//task W
// function chunkArray(arr: any[], size: number): any[][] {
//   const result: any[][] = [];
  
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
  
//   return result;
// }


// console.log(chunkArray([12, 22, 32, 42, 52, 62, 72, 84, 91, 10], 3));




//Task V
// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (const char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log(countChars("Assalomu alaykum")); 




//task U

// function sumOdds(n: number): number {
//   let count = 0;
//   for (let i = 1; i < n; i += 2) {
//     count++;
//   }
//   return count;
// }

// console.log(sumOdds(15));   
// console.log(sumOdds(11));  
// console.log(sumOdds(14));   
// console.log(sumOdds(20));   




//task T
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const merged = [...arr1, ...arr2]; // ikkala arrayni birlashtiramiz
//   return merged.sort((a, b) => a - b); // raqam bo‘yicha o‘sish tartibida saralaymiz
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));




//Task S
// function missingNumber(nums: number[]): number {
//   const n: number = nums.length;
//   const expectedSum: number = (n * (n + 1)) / 2;
//   const actualSum: number = nums.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }


// missingNumber([3, 0, 1]); 
// missingNumber([0, 1, 4, 5]);    
// missingNumber([9,6,4,2,3,5,7,0,1]); // ➞ 8








//Task - R
// function calculate(expression: string): 
// number {
//   const parts = expression.split("+").map(part => parseInt(part.trim(), 10));
//   return parts[0] + parts[1];
// }

// console.log(calculate("78 + 2"));
// console.log(calculate("1 + 89"));
// console.log(calculate("89 + 89 "));

// .split("+") → stringni '+' belgisiga qarab bo‘lib oladi.

// .trim() →  bo‘sh joylarni olib tashlaydi.

// parseInt(..., 10) → stringni numberga aylantiradi (10-tizimda).

// So‘ng ikkala sonni qo‘shadi.







//Task Q

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }
// console.log(hasProperty({ name: "Mersedes", model: "Maybach" }, "model")); // true
// console.log(hasProperty({ name: "Mersedes", model: "Maybach" }, "year"));  // false






// //Task P nested array bu array ichidagi array [[]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   const result: [string, any][] = [];
//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(objectToArray({ a: 23, b: 12, c: 53 }));






// //Task O
// // 
// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;

//     for (const item of arr) {
//         if (typeof item === 'number') {
//             sum += item;
//         }
//     }

//     return sum;
// };

// console.log(calculateSumOfNumbers([16, "17", {son: 80}, true, 85]));
















// //Task N
// function palindromCheck(str: string): boolean {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }


// console.log(palindromCheck("ALLA")); 
// console.log(palindromCheck("Susambil")); 
// console.log(palindromCheck("level")); 












// // Task M

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   return arr.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }


// const result = getSquareNumbers([3, 2, 4]);
// console.log(result);



// // Task L
// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")               
//     .map(word => word.split("").reverse().join("")) // Har bir so'zni teskari o'giramiz
//     .join(" ");               // So'zlarni yana bo'sh joy bilan birlashtiramiz
// }


// //split sozni bolish uchun
// console.log(reverseSentence(" Oson emas o'qish!")); 




















// function countVowels(str: string): number { //str nomer qaytaradi
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (const char of str.toLowerCase()) { //toLowerCase harflarni kichkina qiladi
//     if (vowels.includes(char)) {
//       count++;      //bu yerda nechta unli bosa countga 1 qo'shadi
//     }
//   }

//   return count;
// }

// console.log(countVowels("ambassador")); 
// console.log(countVowels("Uzbekistan")); 





//Task J 

// function findLongestWord(sentence: string): string {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }
// console.log(findLongestWord("I Live in Busan but going to move to Seoulcity")); 





//Task I

// function majorityElement(arr: number[]): number {

//   const countMap: Record<number, number> = {};

//   for (const num of arr) {
//     if (countMap[num]) {
//       countMap[num] += 1;
//     } else {
//       countMap[num] = 1;
//     }
//   }

  
//   let maxCount = 0;
//   let mostFrequent = arr[0]; 

//   for (const num in countMap) {
//     const count = countMap[+num]; 
//     if (count > maxCount) {
//       maxCount = count;
//       mostFrequent = +num;
//     }
//   }

//   return mostFrequent;
// }


// console.log(majorityElement([8, 7, 3, 4, 5, 7, 3, 7])); 
// console.log(majorityElement([1, 1, 1, 2, 8]));          
// console.log(majorityElement([5, 5, 3, 5, 1]));          




















/* Project Standarts:

-Logging standarts:

-Naming standarts:
  Functions, method, variables=> camelCase             Gohome
  Class=> PascalCase                                   MemberService
  folders, file => kebab-case
  Css=> Snake case                                      button_style

- Error handling


*/

/*
Traditional API 
REST API
GRAPHQL API
*/
































//H2-TASK: 

// function getDigits(str: string): string {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             result += str[i];
//         }
//     }
//     return result;
// }


// console.log(getDigits("m14i1t")); // "141"





//Task H


// function getPositive(arr: number[]): string {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i]; // musbat sonni stringga qo‘shamiz
//     }
//   }

//   return result;
// }

// console.log(getPositive([7, -4, 9]));     //79
// console.log(getPositive([-8, 0, 5, 7]));  //57
// console.log(getPositive([-1, -9, -3]));   //0













// function getHighestIndex(arr: number[]): number {
//   let max = arr[0];
//   let index = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }

//   return index;
// }

// console.log(getHighestIndex([9, 251, 712, 121, 88])); // ➜ 2
  