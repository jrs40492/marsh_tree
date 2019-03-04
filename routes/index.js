const express = require('express');

const router = express.Router();

let data;

router.get('/', async (req, res) => {
  res.render('index', {
    node_env: process.env.NODE_ENV,
    title: 'Home',
    link: ''
  });
});

router.get('/about', async (req, res) => {
  res.render('about', {
    node_env: process.env.NODE_ENV,
    title: 'About Us',
    link: 'about'
  });
});

router.get('/tree_services', async (req, res) => {
  res.render('tree_services', {
    node_env: process.env.NODE_ENV,
    title: 'Tree Services',
    link: 'tree'
  });
});

router.get('/snow_services', async (req, res) => {
  res.render('snow_services', {
    node_env: process.env.NODE_ENV,
    title: 'Snow Services',
    link: 'snow'
  });
});

router.get('/contact', async (req, res) => {
  res.render('contact', {
    node_env: process.env.NODE_ENV,
    title: 'Contact',
    link: 'contact'
  });
});

module.exports = router;
