const express = require('express');

const router = express.Router();

let data;

router.get('/', async (req, res) => {
  res.render('index', {
    node_env: process.env.NODE_ENV
  });
});

router.get('/about', async (req, res) => {
  res.render('about', {
    node_env: process.env.NODE_ENV,
  });
});

router.get('/tree_services', async (req, res) => {
  res.render('tree_services', {
    node_env: process.env.NODE_ENV,
  });
});

router.get('/snow_services', async (req, res) => {
  res.render('snow_services', {
    node_env: process.env.NODE_ENV,
  });
});

router.get('/contact', async (req, res) => {
  res.render('contact', {
    node_env: process.env.NODE_ENV,
  });
});

module.exports = router;
