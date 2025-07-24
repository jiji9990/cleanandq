const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

// Import the actual server app
const app = require('./server');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Start server
const server = app.listen(3001, async () => {
  console.log('Server started on port 3001, generating static files...');
  
  // Copy static assets first
  console.log('Copying static assets...');
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  if (fs.existsSync('src/public')) {
    copyRecursiveSync('src/public', 'dist');
  }

  // Copy robots.txt
  if (fs.existsSync('robots.txt')) {
    fs.copyFileSync('robots.txt', 'dist/robots.txt');
    console.log('Copied: robots.txt');
  }

  // Generate HTML for all routes
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

  for (const route of routes) {
    try {
      console.log(`Fetching ${route}...`);
      const response = await fetch(`http://localhost:3001${route}`);
      if (response.ok) {
        const html = await response.text();
        const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
        fs.writeFileSync(path.join('dist', filename), html);
        console.log(`Generated: ${filename}`);
      } else {
        console.log(`Failed to fetch ${route}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error generating ${route}:`, error.message);
    }
  }
  
  console.log('Static generation complete!');
  server.close();
  process.exit(0);
});
