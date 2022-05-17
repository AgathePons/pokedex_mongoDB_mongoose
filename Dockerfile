# On part d'une image existante trouvée sur docker hub
FROM node:current-alpine3.15

# Créer un dossier pour notre app (ici dossier app à la racine)
WORKDIR /app

# Méthode plus fine on copie package et package-lock pour installer proprement le node_modules
# on utilise * : tout ce qui commence par package et finit par .json
COPY ./package*.json ./
# on exécute (une fois, donc RUN) la commande
RUN npm i

# si il y a du contenu déjà présent, il ne le copie pas, donc node_modules n'est pas copié
COPY . .

# facultatif, ça montre qu'on expose le :3000 du container
EXPOSE 3000

# on exécute (à chaque fois qu'on lance, donc CMD) la commande
CMD ["npm", "start"]