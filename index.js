const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {
  url = 'https://www.copart.com/lotSearchResults/?free=true&query=chevy%20tahoe&page=1';
  request(url, (err, res, html) => {
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
      //need to spoof user agent
      console.log(html);
    }
  });
});

app.listen('8081');

console.log('Ready to scrape the web');

exports = module.exports = app;
