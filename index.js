// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// PseudoCode
// Initialise the count as 0
// Listen for clicks on the increment button
// Increment the count variable when button is clicked
// Change the id=count-el in HTML to reflect the new count
let countEl = document.getElementById("count-el");
let count = 0

function increment() {
    count = count + 1;
    // countEl.innerHTML = count;
    countEl.innerText = count;
    // countEl.textContent = count;
}


