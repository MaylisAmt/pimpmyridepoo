////// Étape 1 - Parsing

// CRÉATION DE LA CLASS
class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = start
        this.duration = duration
        this.price = price
    }
}

// FONCTION QUI TRANSFORME LES DONNÉES D'UN CLIENT EN 1 INSTANCE DE "Trip"
function parseTrip (trip) {
    let tripToParse = trip.split(" ")
    const newObj = new Trip (tripToParse[0],tripToParse[1],tripToParse[2],tripToParse[3])
    return newObj
}
// console.log("etape 1", parseTrip("Roger 0 5 10"))
// > Résultat console : Trip { name: 'Roger', start: '0', duration: '5', price: '10' }


////// Etape 2 - Loop Parsing

// Liste des premiers clients
let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]


// FONCTION QUI TRANSFORME LES DONNÉES DE PLUSIEURS CLIENTS EN PLUSIEURS INSTANCES DE "Trip"
function parseTrips (trips) {
    let tableau = []
    for (let i=0; i<trips.length; i++) {
        tableau.push((parseTrip(trips[i])))
    }
    return tableau
}

// console.log("etape 2", parseTrips(tripsToParse))
// > Résultat console : [
//   Trip { name: 'Roger', start: '0', duration: '5', price: '10' },
//   Trip { name: 'Pongo', start: '3', duration: '7', price: '14' },
//   Trip { name: 'Perdita', start: '8', duration: '10', price: '8' },
//   Trip { name: 'Anita', start: '16', duration: '3', price: '7' }
// ]


////// Étape 3 - End trip
