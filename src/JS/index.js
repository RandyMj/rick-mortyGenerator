const random = document.getElementById('btn');

random.addEventListener('click', () => {
    function randomSearch(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    randomNumber = randomSearch(19);

    function randomPage(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    randomPageNumber = randomPage(34);

    const url = `https://rickandmortyapi.com/api/character/?page=${randomPageNumber}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let element = document.getElementById('elem')
            element.innerHTML = `<p>${data.results[randomNumber].name}</p>
        <img src="${data.results[randomNumber].image}" alt="">
        `;

            let description = document.getElementById('description')
            description.innerHTML = `<p>Gender: ${data.results[randomNumber].gender}</p>
        <p>Species: ${data.results[randomNumber].species}</p>
        <p>Origin: ${data.results[randomNumber].origin.name}</p>
        <p>Location: ${data.results[randomNumber].location.name}</p>
        <p>Status: ${data.results[randomNumber].status}</p>
        `
        })
        .catch(err => console.log(err));
});