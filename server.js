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