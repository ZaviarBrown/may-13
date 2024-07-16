const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
    const myError = new Error(
        "Sorry, the requested resource couldn't be found"
    );

    // myError.statusCode = 404;

    next(myError);
    // next({ message: "Not found", status: 404}) //! Also okay
});

app.use((err, req, res, next) => {
    //! --------------------------------------------------------------------
    //*                              Option 1
    //! --------------------------------------------------------------------
    // console.log(err);

    // res.status(err.statusCode || 500);
    // res.json({
    //     statusCode: err.statusCode || 500,
    //     message: err.message,
    // });

    //! --------------------------------------------------------------------
    //*                              Option 2
    //! --------------------------------------------------------------------
    console.log(err);

    const statusCode = err.statusCode || 500;
    const { message } = err;

    res.status(statusCode).json({ statusCode, message });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
