const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {});

app.listen('8080');

console.log('Ready to scrape the web');

exports = module.exports = app;
