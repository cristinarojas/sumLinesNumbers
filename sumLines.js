// You have a text file with proper English sentences. Print the sum of each line's numbers.
// Assume round positive numbers only and proper punctuation.

// Example file contents...
// Today was warm with the temperature of 85 degrees. Four days ago the temperature was also warm.
// Tomorrow should be colder at 70.
// The won't be any rain in the next few days.
// Over the weekend we should expect 70 and 75, while Monday will be cold at 55.
// Next week's weather is expected to be 70, 65, 78, and then 70 the rest of the week.

// Output...
// Line 1: 85
// Line 2: 70
// Line 3: 0
// Line 4: 200
// Line 5: 283

// Exception cases to watch out for...
// - Number followed by . or , or ! or ? so just splitting words by spaces won't work
// - Lines that don't have any numbers must show zero


const string = "Today was warm with the temperature of 85 degrees. Four days ago the temperature was also warm.\n \
Tomorrow should be colder at 70. \n \
The won't be any rain in the next few days. \n \
Over the weekend we should expect 70 and 75, while Monday will be cold at 55.\n \
Next week's weather is expected to be 70, 65, 78, and then 70 the rest of the week.";


const cleanString = string.replace(/\.|\,/g, "");
const chunks = cleanString.split("\n");

chunks.forEach((line, index)=> {
  let words = line.split(' ');

  let numbers = words.filter(number => number.length > 0 && Number(number)); // filter the string numbers (convert the string to numbers only in this context)

  let sum = numbers.length > 0 ? numbers.reduce((a, b) => Number(a) + Number(b)) : 0;

  console.log(sum)
});
