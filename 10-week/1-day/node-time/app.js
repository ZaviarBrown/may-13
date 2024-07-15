// console.log('Momo be da cutest');

// fetch('https://api.thecatapi.com/v1/images/search')
//     .then((res) => res.json())
//     .then((res) => console.log(res));

// fetch('https://www.coolmathgames.com/')
//     .then((res) => JSON.parse(res.body))
//     .then((res) => console.log(res));

// if (req.method === "GET" && req.url === '/cats') {
//     // do whatever
// }

//! --------------------------------------------------------------------
//*                       We can do any method technically
//! --------------------------------------------------------------------

// fetch('/whatever', {
//     method: 'GITGUD',
//     body: {
//         level: 10,
//     },
// });

// if (req.method === 'GITGUD' && req.url === '/whatever') {
//     // do whatever
// }

//! --------------------------------------------------------------------
//*                             All methods
//! --------------------------------------------------------------------

// app.get();

// app.post();

// app.put();

// app.patch();

// app.delete();

// app.receive(); //! Not a thing, but could be!

//! --------------------------------------------------------------------
//*                        Express & RESTful routes
//! --------------------------------------------------------------------

const express = require('express');

const app = express();

app.use(express.json());

app.get('/my-first-route', (request, response) => {
    console.log('heyoooooo');
    console.log('and gooooddbyyyyeeee moonman');
    console.log('and one more for good measure hi:) ');
    console.log('momo');
    // a comment!
    // response.status(200);
    // response.send('Good job on your first route :)');
    response.status(400).send('Good job on your first route :)');
});

//! --------------------------------------------------------------------
//*                            req.params
//! --------------------------------------------------------------------

app.get('/twitter/my-tweets/:id/:name', (req, res) => {
    console.log("We're in Twitter");
    console.log(req.params.id);
    console.log(req.params.name);

    res.send("This is a list of your tweets: Hi I'm tweeting.");
});

//! --------------------------------------------------------------------
//*                        req.params w/ destructuring
//! --------------------------------------------------------------------

app.get('/cats/:cat1/:cat2/:cat3', (req, res) => {
    const { cat1 } = req.params;

    console.log(req.params);

    // const cat1 = req.params.cat1;
    // const cat2 = req.params.cat2;
    // const cat3 = req.params.cat3;

    res.send(`These are all your cats: ${cat1}`);
    // res.send(`These are all your cats: ${cat1}, ${cat2}, ${cat3}`);
});

//! --------------------------------------------------------------------
//*                              req.query
//! --------------------------------------------------------------------

// app.get('/books?title=ABook&genre=fantasy', (req, res) => { //! DON'T DO THIS EVAAAHHH!!!!
app.get('/books', (req, res) => {
    const { title, genre } = req.query;
    res.send(`I love this book called ${title}, it's a ${genre} book!`);
});

//! --------------------------------------------------------------------
//*                           w/ JSON
//! --------------------------------------------------------------------

app.get('/last-example', (req, res) => {
    res.json({
        anyKey: 'Any values',
    });
});

app.listen(5000, () => console.log('Yeah we out here expressin'));
