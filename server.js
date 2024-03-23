// Unit: SIT323 Cloud Native Application Development
// Task: 4.1P
// Date: 20/03/2024
// Student Name: Nicolas Andress Tomas (221351413)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Message for root path 
app.get('/', (req, res) => {
    res.send(
        `<strong>Calculator Microservice</strong><br><br>` +
        `Arithmetic Instructions:<br>` +
        `- Addition: Add two numbers with <code>/add?num1={number}&amp;num2={number}</code><br>` +
        `- Subtraction: Subtract two numbers with <code>/subtract?num1={number}&amp;num2={number}</code><br>` +
        `- Multiplication: Multiply two numbers with <code>/multiply?num1={number}&amp;num2={number}</code><br>` +
        `- Division: Divide two numbers with <code>/divide?num1={number}&amp;num2={number}</code><br><br>` +
        `- Square Root: Find the square root of a number with <code>/sqrt?num1={number}</code><br>` +
        `- Exponentiation: Raise a number to the power of another with <code>/power?num1={number}&amp;num2={power}</code><br>` +
        `- Modulo: Find the remainder of division with <code>/modulo?num1={number}&amp;num2={number}</code><br><br>` +
        `NOTE: Just replace <code>{number}</code> with your actual numbers. For example, try visiting:<br>` +
        `<a href="http://localhost:${port}/add?num1=10&num2=5">http://localhost:${port}/add?num1=10&num2=5</a><br>`
    );
});

// Function to validate numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return true;
};

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).send('Cannot divide by zero.');
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Exponentiation
app.get('/power', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = Math.pow(parseFloat(num1), parseFloat(num2));
    res.send(`Result: ${result}`);
});

// Square Root
app.get('/sqrt', (req, res) => {
    const { num1 } = req.query;
    if (!validateNumbers(num1, 0)) { 
        return res.status(400).send('Invalid input. Please ensure num1 is a number.');
    }
    if (parseFloat(num1) < 0) {
        return res.status(400).send('Invalid input. num1 must be non-negative.');
    }
    const result = Math.sqrt(parseFloat(num1));
    res.send(`Result: ${result}`);
});

//Modulo
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) % parseFloat(num2);
    res.send(`Result: ${result}`);
});

//Creates server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

