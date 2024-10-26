// © Delta D Coders 2024
// Author: SafwanGanz

const express = require('express');
const { c } = require('compile-run');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/run', async (req, res) => {
    const { sourcecode } = req.body;
    try {
        const result = await c.runSource(sourcecode);
        res.json(result);
    } catch (err) {
        console.error('Error running source code:', err.message); // Log the error
        res.status(500).json({ error: err.message });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; 
