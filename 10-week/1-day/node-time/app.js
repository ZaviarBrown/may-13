console.log('Momo be da cutest');

// fetch('https://api.thecatapi.com/v1/images/search')
//     .then((res) => res.json())
//     .then((res) => console.log(res));

fetch('https://www.coolmathgames.com/')
    .then((res) => JSON.parse(res.body))
    .then((res) => console.log(res));
