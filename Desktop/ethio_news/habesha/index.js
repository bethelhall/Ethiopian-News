var express = require('express');
var router = express.Router();
var path = __dirname + '/views/';
const  cheerio = require('cheerio');
var  url = require('url');
const request = require('request');

var page_url = 'https://www.bbc.com/amharic';
var result = [];


/* GET home page. */
router.get('/', function (req, res, next) {
 
  res.render(path + 'index');
  
})
router.get('/post', function (req, res, next) {

  //this scraps only a static website
  
  request('https://www.bbc.com/amharic', (error, Response, html) => {
    if(!error && Response.statusCode ==200){
    const $ = cheerio.load('html');

    const siteHeading = $('.title-link_title');

    const output = siteHeading.find('h3').text();
    console.log(output);
    }
})
  res.render(path + 'about');
  
})

module.exports = router;
