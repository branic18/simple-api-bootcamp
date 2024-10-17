/*https://github.com/Resilient-Labs/simple-api-bootcamp > Get data from API and display in some way. This is open-ended. This should be an app that has a function or use case; something people can utilize.

Used this API: https://binaryjazz.us/genrenator-api/?ref=freepublicapis.com 
*/

document.querySelector('button').addEventListener('click', changeGenre)

function changeGenre() {

    const url = `https://binaryjazz.us/wp-json/genrenator/v1/genre/3/`

    fetch(url) // connect to API
    .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
    .then(data => { // Outputting a series of things
        console.log(data)
        console.log(data[0])
        console.log(data[1])
        console.log(data[2])
        
        document.getElementById('music_genre1').innerText = data[0]
        document.getElementById('music_genre2').innerText = data[1]
        document.getElementById('music_genre3').innerText = data[2]

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}