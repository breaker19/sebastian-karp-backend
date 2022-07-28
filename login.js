const express = require("express");
const app = express();

app.get('/login', (req, res) => {
    res.render('login');
  
  }
  )
  
  const login = {
    username: 'admin',
    password: 'admin'
  }
  
  app.get('/login', (req, res) => {
    res.render('login'); }
    )
  app.post('/login', (req, res) => {
    if (login.username === 'admin' && login.password === 'admin') {
      res.redirect('/productos');
      console.log();
    }
    else {
      res.redirect('/');
      console.log('no admin');
    }
  
  }
  )