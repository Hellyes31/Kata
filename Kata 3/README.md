# 🖊️ Crayon ASCII - drawMyPen()

## Énoncé
Crée une fonction `drawMyPen(){:js}` qui retourne l'état de ton **crayon en ASCII Art** en fonction du temps passé en cours.  
Le crayon se compose :
- d’une **pointe** (la partie du haut, en forme de triangle),
- d’un **corps** (un certain nombre d’étages `||||` qui représentent la longueur restante du crayon),
- d’une **gomme** en bas du crayon.

Le nombre d’étages dépend du mois en cours :  

```js
const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};
````
## 👉 Subtilité :

- de septembre à février, la gomme a deux étages (|__|, | |, |__|)

- à partir de mars, la gomme n’a plus qu’un seul étage (|__|)

## Exemple d'éxécution :  

 drawMyPen("septembre")
 ```bash
  /\
 /__\
 ||||
 ||||
 ||||
 ||||
 ||||
 ||||
 ||||
 ||||
 ||||
 ||||
 |__|
 |  |
 |__|
````
drawMyPen("mars")
 ```bash

  /\
 /__\
 ||||
 ||||
 ||||
 ||||
 |__|
 |__|
```

## 🚀 Installation & Utilisation

### Cloner le projet
```js
git clone <url-du-repo>
cd <nom-du-repo>
```

### Exécuter avec Node.js
Assure-toi d’avoir Node.js
 installé.
Dans VSCode (ou ton terminal) lance :
```js
node script.js
```

### Modifier le mois testé
Dans script.js, change l’appel à la fonction par le mois voulu :
```js
drawMyPen("septembre");
drawMyPen("mars");
```
