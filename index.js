function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);

function countDuplicates(arr) {
  return arr.reduce((countMap, element) => {
    countMap[element] = (countMap[element] || 0) + 1;
    return countMap;
  }, {});
}

const duplicatesCount = countDuplicates(array);
console.log(duplicatesCount);

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const wordLength = currentWord.length;

    if (wordLength > maxLength) {
      longestWord = currentWord;
      maxLength = wordLength;
    }
  }

  return longestWord;
}

const sentence = "Hello my name is George i am 25 years old";
const longest = findLongestWord(sentence);
console.log(`The longest word is: ${longest}`);

function rotate(arr, steps) {
  if (arr.length === 0) {
    return arr;
  }

  const actualSteps = steps % arr.length;

  for (let i = 0; i < actualSteps; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
}

const steps = 2;
const rotated = rotate(array, steps);
console.log(rotated);

function countWords(sentence) {
  let wordCount = 0;
  let isWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (!isWord) {
        wordCount++;
        isWord = true;
      }
    } else {
      isWord = false;
    }
  }

  return wordCount;
}

const wordCount = countWords(sentence);
console.log(`The sentence contains ${wordCount} words.`);

function reverseString(sentence) {
  let reversed = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence[i];
  }

  return reversed;
}

const reversed = reverseString(sentence);
console.log(reversed);
