let templates = require('./db.json')

let currentIndex = 0

module.exports = {
    getTemplate: (req, res) => {

        // get a random index for item in templates array

        let index = Math.floor(Math.random() * templates.length)

        currentIndex = index

        // get the cap version of that index
        let capString = templates[index].capsString

        // split into an array called capArray
        let capArray = capString.split(' ')

        // set up blank lexicalArray to be send to front end
        let lexicalArray = []

        // loop over capArray, pushing cap values to lexicalArray
        for(let i = 0; i < capArray.length; i++){
            if(capArray[i] === 'NAME' || capArray[i] === "ADJ" || capArray[i] === 'NOUN' || capArray[i] === 'PLACE' || capArray[i] === 'OBJ' || capArray[i] === 'PROFESSION'){
                lexicalArray.push(capArray[i])
              }
        }

        // send lexical array to front end
        res.status(200).send(lexicalArray)
    },

    editTemplate: (req, res) => {

        //get array of answers from front end
        const {answers} = req.body

        //get starString from our current index, and save to variable starTemp
        let starTemp = templates[currentIndex].starString

        //loop over answer array, and replace *** with the current index of each loop
        for(let i = 0; i < answers.length; i++){
            starTemp = starTemp.replace('***', answers[i])
        }

        //send our starTemp back to the front end

        res.status(200).send(starTemp)
    }
}