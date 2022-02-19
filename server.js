// Import dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

// Initialize express app
const noteApp = express();
const PORT = process.env.PORT || 3001;

// Configures app to handle data parsing
noteApp.use(express.urlencoded({ extended: true }));
noteApp.use(express.json());

// Route handling for HTML pages
// Serves index.html
noteApp.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// Serves CSS file for Notes page
noteApp.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, "/public/assets/css/styles.css")));

// Serves index.js file for Notes page
noteApp.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, "/public/assets/js/index.js")));

// Serves notes.html
noteApp.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));