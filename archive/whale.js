const input = 'I love your smile when you laugh';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
//make the input all lowercase
let userInput = input.toLowerCase();
//get all the characters and their position in the array

for (let i = 0; i < userInput.length; i++){
  for (let v = 0; v < vowels.length; v++){
    if (vowels[v] === userInput[i]){
      if (vowels[v]=== 'a'){
        resultArray.push(vowels[v]);
      } else if(vowels[v]=== 'e'){
          console.log('pushing ee to resultArray ' + i);
          resultArray.push(vowels[v]);
          resultArray.push(vowels[v]);
      } else if (vowels[v]=== 'i'){
        console.log('pushing i to resultArray ' + i);
        resultArray.push(vowels[v]);
      } else if (vowels[v]=== 'o'){
        console.log('pushing o to resultArray ' + i);
        resultArray.push(vowels[v]);
      }else if (vowels[v]=== 'u'){
        console.log('pushing uu to resultArray ' + i);
        resultArray.push(vowels[v]);
        resultArray.push(vowels[v]);
      }
      }
    }
  }

resultArray = resultArray.join('')
resultArray = resultArray.toUpperCase();
console.log("'" + input + "' translated to Whale Language is ''" + resultArray + "'");