const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy static assets
console.log('Copying static assets...');
if (fs.existsSync('src/public')) {
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
  copyRecursiveSync('src/public', 'dist');
}

// Copy robots.txt
if (fs.existsSync('robots.txt')) {
  fs.copyFileSync('robots.txt', 'dist/robots.txt');
  console.log('Copied: robots.txt');
}

// Generate HTML pages
const generatePages = async () => {
  const routes = {
    '/': 'main.ejs',
    '/hanstone': 'hanstone.ejs',
    '/homesash': 'homesash.ejs',
    '/login': 'login.ejs',
    '/register': 'register.ejs'
  };

  for (const [route, template] of Object.entries(routes)) {
    try {
      const templatePath = path.join('src/views/home', template);
      if (fs.existsSync(templatePath)) {
        const html = await ejs.renderFile(templatePath, {});
        const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
        fs.writeFileSync(path.join('dist', filename), html);
        console.log(`Generated: ${filename}`);
      }
    } catch (error) {
      console.error(`Error generating ${route}:`, error.message);
    }
  }
  
  console.log('Static generation complete!');
};

generatePages();
