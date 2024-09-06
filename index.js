import express from "express";
import bodyParser from "body-parser";
import Employe from "./Employe.js";
import Tache from "./Task.js";
import Assignation from "./Assignation.js";
const app = express();
const port = 3050;

app.use(express.json());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/employe", (req, res) => {
  const emp1 = new Employe();
  emp1.createEmploye({
    nom: "Mangassouba",
    prenom: "Hama",
    email: "hamalahmanga@gmail.com",
    post: "Ingénieur",
    dateEmbauche: new Date(),
    statut: "valide",
  });

  const emp2 = new Employe();
  emp2.createEmploye({
    nom: "Bankole",
    prenom: "med",
    email: "med@gmail.com",
    post: "technicien",
    dateEmbauche: new Date(),
    statut: "valide",
  });
  // res.send(`Un nouveu employer a été crée `)
  const tache1 = new Tache();
  tache1.createTache({
    nom: "conception app",
    description: "creation une application de e-commerce",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "en cours",
    priorite: "haut",
  });

  const assigne = new Assignation();
  assigne.createAssignation({
    employe: emp1,
    tache: tache1,
    dateAssignation: new Date(),
  });

  tache1.editTache({
    nom: "conception app",
    description: "creation une application de gestion de etudiant",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "en cours",
    priorite: "haut",
  });

  tache1.getTache();
  // tache1.destroyeTache();

  emp1.editEmploye({
    nom: "Manga",
    prenom: "Hamallah",
    email: "manga@gmail.com",
    post: "reseau",
    dateEmbauche: new Date(),
    statut: "valide",
  });

  const get = emp1.getEmpoye();
  console.log(get);

  //  const delet = emp1.destroyEmploye()
  //  console.log(delet);
  res.json({ emp1, tache1, assigne });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
