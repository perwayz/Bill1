const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

let bills = [];

app.get('/api/bills', (req, res) => {
    res.json(bills);
});

app.post('/api/bills', (req, res) => {
    const bill = req.body;
    bills.push(bill);
    res.status(201).json(bill);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});