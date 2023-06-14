////// Étape 1 - Parsing

// CRÉATION DE LA CLASS
class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = parseInt(start)
        this.duration = parseInt(duration)
        this.price = parseInt(price)
        this.end = parseInt(start) + parseInt(duration)
    }

    	isCompatible(trip) {
		if (trip.end <= this.start) {
			return true
		} else {
			return false
		}
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
function parseTrips(trips) {
    let tableau = []
    for (let i=0; i<trips.length; i++) {
        tableau.push((parseTrip(trips[i])))
    }
    return tableau
}

let lesVoyageurs = parseTrips(tripsToParse)

// console.log("etape 2", parseTrips(tripsToParse))
// > Résultat console : [
//   Trip { name: 'Roger', start: '0', duration: '5', price: '10' },
//   Trip { name: 'Pongo', start: '3', duration: '7', price: '14' },
//   Trip { name: 'Perdita', start: '8', duration: '10', price: '8' },
//   Trip { name: 'Anita', start: '16', duration: '3', price: '7' }
// ]


////// Étape 3 - End trip
// ajout de la proprité suivante, directement dans la class :
// this.end = parseInt(start) + parseInt(duration)

// console.log("etape 3", parseTrips(tripsToParse))
// > Résultat console : [
// Trip {
//     name: 'Roger',
//     start: '0',
//     duration: '5',
//     price: '10',
//     end: 5
//   },
//   Trip {
//     name: 'Pongo',
//     start: '3',
//     duration: '7',
//     price: '14',
//     end: 10
//   },
//   Trip {
//     name: 'Perdita',
//     start: '8',
//     duration: '10',
//     price: '8',
//     end: 18
//   },
//   Trip {
//     name: 'Anita',
//     start: '16',
//     duration: '3',
//     price: '7',
//     end: 19
//   }
// ]


////// Étape 4 - Compatibility
// Ajout de 2 instances et test de compatibilité entre ces 2 instances

let voyage1 = parseTrip("Roger 0 5 10")
let voyage2 = parseTrip("Perdita 8 10 8")

// console.log(voyage1.end)
// console.log(voyage2.start)
// console.log(voyage1.isCompatible(voyage2))
// réponse console : False


////// Étape 5 - Possibilities

function findCompatibilities (trips) {
    let checkOK = []
    for (let i=0; i<trips.length; i++) {
        for (let j=0; j<trips.length; j++) {
            if (trips[i]==trips[j]) {
                checkOK.push(trips[i])
            }
            if (trips[i].isCompatible(trips[j]) == true) {
                checkOK.push([trips[i], trips[j]])
            }
        }
    }
    return checkOK
}
console.log(findCompatibilities(lesVoyageurs))
// Réponse console : 
// [
//     Trip { name: 'Roger', start: 0, duration: 5, price: 10, end: 5 },
//     Trip { name: 'Pongo', start: 3, duration: 7, price: 14, end: 10 },
//     [
//       Trip { name: 'Perdita', start: 8, duration: 10, price: 8, end: 18 },
//       Trip { name: 'Roger', start: 0, duration: 5, price: 10, end: 5 }
//     ],
//     Trip { name: 'Perdita', start: 8, duration: 10, price: 8, end: 18 },
//     [
//       Trip { name: 'Anita', start: 16, duration: 3, price: 7, end: 19 },
//       Trip { name: 'Roger', start: 0, duration: 5, price: 10, end: 5 }
//     ],
//     [
//       Trip { name: 'Anita', start: 16, duration: 3, price: 7, end: 19 },
//       Trip { name: 'Pongo', start: 3, duration: 7, price: 14, end: 10 }
//     ],
//     Trip { name: 'Anita', start: 16, duration: 3, price: 7, end: 19 }
//   ]
