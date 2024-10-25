// © Delta D Coders 2024
// Author: SafwanGanz

const express = require('express');
const { c } = require('compile-run');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/run', async (req, res) => {
    const { sourcecode } = req.body;
    try {
        const result = await c.runSource(sourcecode);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
