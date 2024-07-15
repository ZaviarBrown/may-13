const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(res);
    res.send('Server is alive');
});

app.get('/hello', (req, res) => {
    res.send('Hello, my friend!');
});

app.get('/goodbye/until/forever', (req, res) => {
    res.send('So long. Farewell. Have a great life!');
});

app.get('/goodbye/until/:time', (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get(['/goodbye', '/goodbye/*'], (req, res) => {
    res.send('Goodbye, my friend!');
});

//! --------------------------------------------------------------------
//*                              Extra nonsense                                       
//! --------------------------------------------------------------------
// app.get('/asdf/*/:test/:whatever/*', (req, res) => res.send("What's up", 400));

// app.get('/goodbye/:until/:time/*/:timeAgain', (req, res) => {
//     res.send(
//         `Goodbye. See you ${req.params.time} and ${req.params.timeAgain}.`
//     );
// });

// app.get(['/turnip', '/goodbye', '/goodbye/*'], (req, res) => {
//     res.send('Goodbye, my friend!');
// });

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
