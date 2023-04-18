console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Myself Anmol Miglani and I am Computer Programming student at Georgian College.
Being Georgian College's  student number, my student number no. is 200534220.
*/

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
myImmutableArray.push("Anmol", "Annie", "Anna");

console.log(myImmutableArray); //  Answer: ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury", "Anmol", "Annie", "Anna"]



// Step 4: Remove the first array item from the array
myImmutableArray.shift(); 

console.log(myImmutableArray); //  Answer: ["Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"]



// Step 5 Remove the second array item from the array
myImmutableArray.splice(1, 1); 

console.log(myImmutableArray); //   Answer: ["Jared", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"]



// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const filteredArray = myImmutableArray.filter(item => !item.startsWith("J"));

console.log(filteredArray); // Answer: ["Francis", "Amrit", "Sarah", "Gurleen", "Ury"]



// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const callToActionButton = document.getElementById("call-to-action");

callToActionButton.addEventListener("click", () => {alert("Call me now at 555-555-5555");});

