// Function that Counts down

function countDown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log("🏁 GO! 🏁")
}

countDown()

// Function that Adds / logs out the sum of all the lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapSum() {
    lapTotal = lap1 + lap2 + lap3
    console.log(lapTotal)
}

lapSum()

// Create a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0

function incrementLapsCompleted () {
    lapsCompleted = lapsCompleted+1
}

incrementLapsCompleted()
incrementLapsCompleted()
incrementLapsCompleted()

console.log(lapsCompleted)