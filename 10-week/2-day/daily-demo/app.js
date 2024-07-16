const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('\n----------NEW REQUEST ALERT----------\n');
    next();
});

// const mid1 = (req, res, next) => {
//     console.log("Hey I'm mid1!");
//     next();
// };

// const mid2 = (req, res, next) => {
//     console.log("Hey I'm mid2!!");
//     next();
// };

// app.get(
//     '/',
//     (req, res, next) => {
//         console.log("Hey I'm mid2!!");
//         next();
//     },
//     (req, res, next) => {
//         console.log("Hey I'm mid2!!");
//         next();
//     },
//     (req, res, next) => {
//         console.log("Hey I'm mid1!");
//         next();
//     },
//     (req, res, next) => {
//         console.log("Hey I'm mid2!!");
//         next();
//     },
//     (req, res) => {
//         res.json({
//             id: 1,
//             message: 'We got all the mids',
//         });
//     }
// );

//! --------------------------------------------------------------------
//*                Skipping middleware & double sending
//! --------------------------------------------------------------------

// const myMid = (req, res, next) => {
//     console.log("Hey look I'm printing!");
//     next();
// };

// const missedMid = (req, res, next) => {
//     console.log('I never get to print :(');
//     next();
//     res.send('Uh ohhhh');
// };

// const missedMid = (req, res, next) => {
//     console.log('I never get to print :(');

//     let user;

//     if ('this thing is true') {
//         res.send('user exists!');
//     } else {
//         user = newUserData();
//     }

//     user.id = newId();

//     res.json(user);
// };

// app.get('/', myMid);

// app.get('/hello', missedMid);

// app.get('/', (req, res) => {
//     console.log('I still get to print!');
//     res.send('This is the / response');
// });



app.use((req, res, next) => {
    // // const myError = ReferenceError("Oooo I'm such a baaaddd errorrrr");
    // next('Tweet created successfully!');

    console.log('Look at me!!!');
    throw TypeError("Sorry you're just not my type :(");
    console.log("You'll never see me :()");
});

app.use((err, req, res, next) => {
    console.log("We couldn't find that page :( ");
    // res.json({
    //     code: 404,
    //     message: 'Not found',
    // });
    console.log("What's wrong with meeee");
    console.log(err.message);
    next();
    // next('404');
});

app.use((req, res, next) => {
    console.log("I'm not an error :)");

    next();
});

app.get('/', (req, res) => {
    res.json({
        yay: 'We finally made it!',
    });
});



const port = 3200;
app.listen(port, () => console.log('We are in the mid of middleware'));
