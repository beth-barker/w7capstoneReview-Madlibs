const baseURL = 'http://localhost:6789'

console.log('It works!')

// Grab HTML element
let templatBtn = document.querySelector('#templateButton')
let inputFields = document.querySelector('#inputSection')
let submitAnswers =document.querySelector('#submitButton')
let final = document.querySelector('#finalMadlib')



// WRITE FUNCTIONS

//function that creates p tags and input boxes for the get functions and puts it on the page
const getTemplate = () => {
    axios.get(`${baseURL}/template`)
.then((res) => {
    //When button is clicked, it will clear and show new inputs
    inputFields.innerHTML = ''

    console.log(res.data)
    //loop over res.data
    //create p tag
    //create input tag
    //add text content of res.data[i]
    //ad innerHTML of input field
    //append p tag to body

    for(let i = 0; i < res.data.length; i++){
        let pTag = document.createElement('p')

        pTag.innerHTML = `
        ${res.data[i]}: <input type="text">
        `
        inputFields.appendChild(pTag)
    }
}).catch((err) => console.log(err))
}


const getMadLib = () => {
    // select all inputs
    // loop over input array
    // add value of current input to answers array
    // send array as a bodyObj in axios request

    let inputArray = document.querySelectorAll('input')


    let values = []

    for(let i = 0; i < inputArray.length; i++){
        console.log(inputArray[i].value)
        values.push(inputArray[i].value)
    }

    let bodyObj = {
        answers: [...values]
    }

    axios.post(`${baseURL}/madLib`, bodyObj)
    .then((res) => {
        console.log(res.data)
        final.textContent = res.data
    }).catch((err) => {console.log(err)})
}


//ADD EVENT LISTENERS
submitAnswers.addEventListener('click', getMadLib)
templatBtn.addEventListener('click', getTemplate)