
//! Création des constantes
const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");

//! On importe le fichier json pour l'exploiter
const articles = require(__dirname+"/data/articles.json");

//! Configuration EJS
app.use(express.static("public")); //* on informe leprogramme que tous nos fichiers seront dans le dossier public
app.set("views", "./views"); //* on insère toutes nos vues dans le dossier views
app.set("view engine","ejs");

//! Mon router
app.set(router);


app.listen(port,()=> {
    console.log(`Listening @ http://localhost:${port}`);
})
