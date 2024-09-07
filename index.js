import express from "express";
import bodyParser from "body-parser";
import Employe from "./Employe.js";
import Tache from "./Tache.js";
import Assignation from "./Assignation.js";


const app = express();
const port = 3040;

app.use(express.json());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/employe", (req, res) => {
  const emp1 = new Employe();
  emp1.createEmploye({
    nom: "Issa",
    prenom: "Sy",
    email: "issa@gmail.com",
    post: "Ingénieur",
    dateEmbauche: new Date(),
    statut: "Actif",
  });

  const emp2 = new Employe();
  emp2.createEmploye({
    nom: "Bankole",
    prenom: "Med",
    email: "med@gmail.com",
    post: "technicien",
    dateEmbauche: new Date(),
    statut: "Inactif",
  });

  const emp3 = new Employe();
  emp3.createEmploye({
    nom: "Sidi",
    prenom: "Med",
    email: "sidi@gmail.com",
    post: "technicien",
    dateEmbauche: new Date(),
    statut: "Inactif",
  });

  const emp4 = new Employe();
  emp4.createEmploye({
    nom: "Abda",
    prenom: "med",
    email: "abda@gmail.com",
    post: "Directeur",
    dateEmbauche: new Date(),
    statut: "Inactif",
  });

  const emp5 = new Employe();
  emp5.createEmploye({
    nom: "Awa",
    prenom: "Ndiaye",
    email: "awa@gmail.com",
    post: "Technicien",
    dateEmbauche: new Date(),
    statut: "Actif",
  });
  // les tâches
  const tache1 = new Tache();
  tache1.createTache({
    nom: "conception app",
    description: "creation une application de e-commerce",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "En cours",
    priorite: "Basse",
  });

  const tache2 = new Tache();
  tache2.createTache({
    nom: "concevoir un site",
    description: "Améliorer le UI, rendre responsive, ajouter une espace de connexion",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "En cours",
    priorite: "Haute",
  });

  const tache3 = new Tache();
  tache3.createTache({
    nom: "conception app",
    description: "creation une application de e-commerce",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: " A Faire",
    priorite: "Haute",
  });




  console.log("**************")
  
  Assignation.assign({employe: emp1.getEmploye(), tache: tache3.getTache(), dateAssignation: new Date()})
  Assignation.assign({employe: emp2.getEmp(), tache: tache2.getTache(), dateAssignation: new Date()})

  const assignation = Assignation.getTab()
  const resulFiltre = Assignation.getEmpAssign(emp1.getEmpoye());

  const newAssignation = Assignation.getTab()

  Assignation.assign({employe: emp1.getEmploye(), tache: tache2.getTache(), dateAssignation: new Date()})

  const testEcrase = Assignation.getTab()
  
  res.status(200).json({newAssignation, testEcrase, resulFiltre});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
