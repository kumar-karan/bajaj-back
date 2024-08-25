const express = require('express');
const app = express();
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    let numbers = [];
    let alphabets = [];
    let highestLowercase = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (item.toLowerCase() !== item.toUpperCase()) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "karan_kumar_04082002",
        email: "karan.kumar2021@vitstudent.ac.in",
        roll_number: "21BCI0024",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET endpoint for the operation code
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
