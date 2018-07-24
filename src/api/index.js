const BASE = 'http://localhost:3000'

let getApartments = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apartments') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

export  {
    getApartments
}
