const url = "https://rickandmortyapi.com/api/character/";
const random = document.getElementById('btn');

random.addEventListener('click', () => {
    function randomSearch(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    randomNumber = randomSearch(19);
    
    fetch(url)
     .then(response => response.json())
     .then(data => {
    
        let element = document.getElementById('elem')
        element.innerHTML = `<p>${data.results[randomNumber].name}</p>
        <img src="${data.results[randomNumber].image}" alt="">
        `
    
         console.log(data)
     })
     .catch(err => console.log(err));
    })




