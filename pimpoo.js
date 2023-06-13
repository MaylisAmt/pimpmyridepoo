// Étape 1 - Parsing

class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = start
        this.duration = duration
        this.price = price
    }

}

function parseTrip (trip) {
    let tripToParse = trip.split(" ")
    const newObj = new Trip (tripToParse[0],tripToParse[1],tripToParse[2],tripToParse[3])
    return newObj
}
console.log(parseTrip("Roger 0 5 10"))



