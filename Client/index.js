const baseURL = 'http://localhost:6789'

console.log('It works!')

// Grab HTML element
let templatBtn = document.querySelector('#templateButton')



// Write a function

const getTemplate = () => {
    axios.get(`${baseURL}/template`)
.then((res) => {
    console.log(res.data)
}).catch((err) => console.log(err))
}


//Add event listener
templatBtn.addEventListener('click', getTemplate)