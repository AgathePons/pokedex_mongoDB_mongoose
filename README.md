# NoSQL

Ca vous évoque quoi ?

- pas de sql
- lent et lourd
- sql sans requetes
- enormes bdd : big data
- poupée matryoshka de la db
  
en vrai :

- pas de sql
- pas relationnel au sens strict : on peut quand même créé des associations, mais on ne peut pas créer de tables
- c'est très rapide uniquement en lecture / écriture de masse, pas en édition
- parfois pas structure (modèle orienté document / graphe), mais parfois ça l'est (orienté colonne / hiérarchique)

## MongoDB

C'est un système de gestion de base de donnée NoSQL. Il en existe d'autres qui n'ont rien à voir avec Mongo.

**Système orienté document :** les données n'ont pas de structure. Elles n'ont donc pas besoin d'avoir chacune les même propriétés.

|SQL|MongoDB|
|:---:|:---:|
|Tables|Collections|
|Champs|Propriétés des documents|
|Enregistrements|Documents|

### Commandes 

Ouvrir le shell de Mongo : `mongo`  
Fermer le shell de Mongo : `exit`  
Créer ou se déplacer sur une BDD : `use <nom bdd>`  
Afficher la bdd actuelle : `db`  
Afficher les bases de données disponibles : `show dbs`  
Afficher les collections de la base de donnée actuelle : `show collections`  
Renommer une collection : `db.nomCollection.renameCollection('nouveauNom')`  
Supprimer une collection : `db.nomCollection.drop()`  
Insérer une nouvelle collection : `db.createCollection('nomCollection)`  
Afficher les documents d'une collection : `db.nomCollection.find({filtre}, {projection})`  
Afficher un document d'une collection : `db.nomCollection.findOne({"propriete":"valeur"})`  
Insérer un nouveau document : `db.nomCollection.insertOne({"propriete":"valeur", ...})`  
Insérer plusieurs documents : `db.nomCollection.insertMany([{document1}, {document2}, ...])`  
Supprimer un document : `db.nomCollection.deleteOne({filtre})`  
Supprimer plusieurs documents : `db.nomCollection.deleteMany({filtre})`  
Mettre à jour un document : `db.nomCollection.updateOne({filtre}, {$set:{"propriete":"valeur", ...}})`  
Mettre à jour plusieurs documents : `db.nomCollection.updateMany({filtre}, {$set:{"propriete":"valeur", ...}})`

## Déployer une bdd mongodb via un fichier .bson

dans le dossier du projet : `mongorestore -d nomDeLaBaseACreer chemin/`  

## Autres commandes

pour afficher des résultats de façon lisible : `db.mabase.find().pretty()`  
pour ordonner les résultats `1` pour ascendant, `-1` pour descendant : `db.pokedex.find().sort({"id":-1})`  
pour compter : `db.pokedex.find().count()`  
pour filtrer **et** compter : `db.pokedex.find({"type":"Water"}).count()`  
avoir les trois dernier de type Normal : `db.pokedex.find({"type":"Normal"}).sort({"id":-1}).limit(3)`

## infos

On peut utiliser un ODM (Object Document Model) pour gérer mongodb (comme ORM mais pour du noSQL)