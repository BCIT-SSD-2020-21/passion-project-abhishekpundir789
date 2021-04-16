const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51IgnUaGUcL5OfV5plvTBjfCcAtUIp5CCHilol8FBTIKtOs6YMzBnEhzopLDOd1mP96AYfa0FX3dWW1jNjbsVtZTl00K1znUUIW')

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/e-commerce-821f5/us-central1/api