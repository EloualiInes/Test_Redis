"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlwarePermission_1 = require("./middlwarePermission");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const getDataPatient = (req, res) => {
    res.status(200).send('Données du patient : Jean-Patrick 67 ans :D');
};
app.get('/patient/:userId', (0, middlwarePermission_1.checkPermissions)(['read:patientData']), getDataPatient);
app.listen(port, console.log("Server has started at port " + port));
