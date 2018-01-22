const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {
  const options = {
    url: 'https://www.copart.com/lotSearchResults/?free=true&query=chevy%20tahoe&page=1',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    },
  };
  request(options, (err, res, html) => {
    if (!err) {
      const $ = cheerio.load(html);
      let price, year, model;
      let json = {
        price: '',
        year: '',
        model: '',
      };
      // $('#serverSideDataTable').filter(() => {
      //   const data = $(this);

      //   model = data.children();
      //   console.log(model);
      //   console.log(data);
      // });
      console.log(html);
    }
  });
});

app.listen('8081');

console.log('Ready to scrape the web');

exports = module.exports = app;
