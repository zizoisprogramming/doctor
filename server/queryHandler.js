// server.js
const express = require('express');
const app = express();
const userQueries = require('./queries/PatientQueries');

app.get('/Patients', async (req, res) => {
  try {
    const users = await userQueries.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/Patients/:id', async (req, res) => {
  try {
    const user = await userQueries.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});