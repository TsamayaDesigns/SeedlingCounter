
// Variables
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;

// Increment & display the count
function increment() {
    count += 1;
    countEl.textContent = count;
}

// Save function to log out the count
function save() {
    
    // Variable to contain the count and the dash separator, i.e. "12 - "
    let countStr = count + " - ";

    // Display the variable in the saveEl
    saveEl.textContent += countStr;

    // Calculate & Display the total number of seedlings
    total += count;
    totalEl.innerText = total;

    // Reset counter after Save
    count = 0;
    countEl.textContent = 0;
}

// Reset function to reset everything
function reset() {
    count = 0;
    countEl.textContent = 0;
    saveEl.textContent = 0;
    totalEl.textContent = "";
    total = 0;
    saveEl.innerHTML = "Previous entries:  ";
}
