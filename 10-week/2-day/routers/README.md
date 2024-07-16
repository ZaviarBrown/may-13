# Routers

## Express Router

Express Routers allow us to direct traffic into different parts of our application. This enables us to have a more organized file structure, making it much easier to develop and maintain. Instead of all requests being handled in app.js, we can handle user requests in user.js, dog requests in dog.js, and so on.

Express Router is available through Express, no extra install required. We must remember to export our router and the bottom of the file so we can import it into app.js

```js
// a file that is not app.js
const express = require('express');

const router = express.Router();

/* Routing code goes here */

module.exports = router;
```

Routers are commonly stored in a "routes" folder. Within that folder you create a file to handle your routes. To create a route, do as we normally would with app.methodName(), but use router instead.

```js
// routes/eldenRing.js

// url: localhost:5000/eldenRing
router.get('/', (req, res) => {});

// url: localhost:5000/eldenRing/Greatsword
router.post('/:weapon', (req, res) => {});
```

Finally, in app.js, we import our routers and `app.use()` them. The first argument is the url path the user should type into the browser, the second is the router we've created.

```js
// app.js
const express = require('express');

const eldenRing = require('./routes/eldenRing');

const app = express();

app.use('/eldenRing', eldenRing);
```

The url path Does Not have to match the file we're routing from. It's simply the convention and tends to be easier to work with.

```js
// same app.js

app.use('/bestGameEver', eldenRing);
```
