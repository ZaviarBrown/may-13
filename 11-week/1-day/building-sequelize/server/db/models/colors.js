const Color = {
    findAll: () => 'SELECT * FROM colors;',
    // findAll: (db) => (req, res, next) => {
    //     const sql = 'SELECT * FROM colors;'
    //     const params = []

    //     db.all(sql, params, (err, rows) => {
    //         res.json(rows)
    //     })
    // },
    findOne: (id) => `SELECT * FROM colors WHERE id = ${id};`,
    create: (colorData) => {
        const { name, hue } = colorData;

        const sql = `INSERT INTO colors (name, hue) VALUES (?, ?)`;
        const params = [name, hue];
        
        return [sql, params]
        // return [`INSERT INTO colors (name, hue) VALUES (?, ?)`, [name, hue]];
    },
};

module.exports = Color;
