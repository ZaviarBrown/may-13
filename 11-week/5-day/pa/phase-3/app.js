require('express-async-errors');
require('dotenv').config();
const { WarehouseItem } = require('./db/models');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/items', async (req, res) => {
    const newItems = await WarehouseItem.findAll({ where: { isUsed: false } });

    return res.json(newItems);
});

app.get('/items/:name', async (req, res) => {
    const { name } = req.params;

    const namedItem = await WarehouseItem.findOne({ where: { name } });

    if (!namedItem) {
        return res.status(404).json({
            message: 'Warehouse Item not found',
        });
    }

    return res.json(namedItem);
});

app.put('/items/:id', async (req, res) => {
    const { id } = req.params;

    const itemToEdit = await WarehouseItem.findByPk(id);

    if (!itemToEdit) {
        return res.status(404).json({
            message: 'Warehouse Item not found',
        });
    }

    itemToEdit.update(req.body);

    return res.json(itemToEdit);
});

app.delete('/items/:id', async (req, res) => {
    const itemToObliterate = await WarehouseItem.findByPk(req.params.id);

    if (!itemToObliterate) {
        return res.status(404).json({
            message: 'Warehouse Item not found',
        });
    }

    await itemToObliterate.destroy();

    return res.json({
        message: 'Successfully deleted',
    });
});

if (require.main === module) {
    const port = 8003;
    app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
    module.exports = app;
}

// //! More verbose
// app.get('/items/:name', async (req, res) => {
//     const theItemsName = req.params.name;

//     const namedItem = await WarehouseItem.findOne({
//         where: {
//             name: theItemsName,
//         },
//     });

//     if (namedItem === null) {
//         res.status(404);
//         return res.json({
//             message: 'Warehouse Item not found',
//         });
//     }

//     return res.json(namedItem);
// });
