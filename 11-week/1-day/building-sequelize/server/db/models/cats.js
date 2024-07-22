const Cat = {
    findAll: () => 'SELECT * FROM cats;',
    findOne: (id) => `SELECT * FROM cats WHERE id = ${id};`,
    create: (catData) => {
        const { name, pattern } = catData;

        const sql = `INSERT INTO cats (name, pattern) VALUES (?, ?)`;
        const params = [name, pattern];
        
        return [sql, params]
        // return [`INSERT INTO cats (name, pattern) VALUES (?, ?)`, [name, pattern]];
    },
};

module.exports = Cat;
