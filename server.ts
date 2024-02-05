import { checkPermissions } from "./middlwarePermission";
import { Request, Response } from "express";

const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const getDataPatient = (req: Request, res: Response) => {
    res.status(200).send('Données du patient : Jean-Patrick 67 ans :D');
};


app.get('/patient/:userId', checkPermissions(['read:patientData']), getDataPatient);
app.listen(port, console.log("Server has started at port " + port));
