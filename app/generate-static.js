const express = require('express');
const path = require('path');
const fs = require('fs');

// Create Express app
const app = express();
const home = require('./src/routes/home');

// app settings
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.urlencoded({ extended: true }));
app.use("/", home);

// Static generation
const routes = [
  '/',
  '/hanstone', '/homesash', '/flooring', '/login', '/register',
  '/normal', '/balcony', '/system', '/rehau', '/aluminium', '/specialuse',
  '/sheetcolor', '/handle', '/maru', '/sentra7', '/sentra7char', '/sentra6',
  '/sentra6char', '/leum', '/artium2', '/artium2char', '/artium3', '/artium3char',
  '/artium3ex', '/charm', '/charmchar', '/goldstrong', '/goldstrongchar',
  '/myeong20', '/myeong20char', '/myeong22', '/myeong22char', '/sorigium',
  '/sorigiumchar', '/tile', '/carpet', '/carpetchar', '/deluxe', '/deluxechar',
  '/goldregent', '/goldregentchar', '/dongseo', '/dongseochar', '/goldclassic',
  '/goldclassicchar', '/goldmaster', '/goldmasterchar', '/rubber', '/rubberchar',
  '/function', '/conductive', '/conductivechar', '/oa', '/oachar'
];

const server = app.listen(3000, async () => {
  console.log('Generating static files...');
  
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  for (const route of routes) {
    try {
      const response = await fetch(`http://localhost:3000${route}`);
      const html = await response.text();
      
      let filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
      fs.writeFileSync(`dist/${filename}`, html);
      console.log(`Generated: ${filename}`);
    } catch (error) {
      console.error(`Error generating ${route}:`, error.message);
    }
  }
  
  // Copy robots.txt
  if (fs.existsSync('robots.txt')) {
    fs.copyFileSync('robots.txt', 'dist/robots.txt');
    console.log('Copied: robots.txt');
  }
  
  console.log('Static generation complete!');
  server.close();
});
