// # Kata - Javascript

// - **KATA 1** : Types et Variables – "Panier d'achat”
    
//     **Objectif pédagogique :**
//     Comprendre les types de base (string, number, boolean) et manipuler des variables pour modéliser un contexte réel simple.
    
//     **Énoncé :**
//     Tu développes une fonction pour un panier e-commerce. Tu dois créer des variables représentant un article (nom, prix unitaire, quantité) et calculer le prix total avec une remise éventuelle.
    
//     **Critères de réussite :**
    
//     - Les types de variables sont explicites (string, number, boolean)
//     - La remise est correctement appliquée si elle est true (20% de réduction)
//     - Le résultat est retourné sous forme de nombre
//     - Le code est lisible et sans erreurs de calcul
    
//     **Version Starter – Niveau 1 ️**
    
//     ```jsx
//     function calculateTotal(itemName, price, quantity, hasDiscount) {
//       // À compléter : crée les variables nécessaires
//       // et retourne le prix total
    
//       // TODO: implement
//     }
//     ```

let itemName = "calculatrcice";
let price = 30.5;
let quantity = 6;
let hasDiscount = true;

function calculateTotal(itemName, price, quantity, hasDiscount) {
    let discount = 20 / 100;

    if (hasDiscount) {
         let priceAfterDiscount = price * discount;
         console.log(`Cette ${itemName} coute : ${price}€, à pour quantité ${quantity} et à une remise de ${discount} alors ces calculatrices coûtent ${Number.parseFloat((price - priceAfterDiscount) * quantity).toFixed(2)} euros après remise`);
    } else {
        console.log(price * quantity);
    } 
    
}
calculateTotal(itemName, price, quantity, hasDiscount);
    
//     **Version Starter – Niveau 2**
    
//     ```jsx
//     function calculateTotal(itemName, price, quantity, hasDiscount) {
//       // À compléter : gère les cas limites
//       // Qu'advient-il si la quantité est 0 ou négative ?
//       // Qu'advient-il si le prix est 0 ou négatif ?
    
//       // TODO: implement
//     }
//     ```
    
//     **Version Starter – Niveau 3**
    
//     ```jsx
//     function calculateTotal(itemName, price, quantity, hasDiscount, discountRate = 20) {
//       // À compléter : améliore la flexibilité
//       // Le taux de remise est maintenant paramétrable
//       // Valide les entrées et retourne un objet détaillé :
//       // { item: "...", originalPrice: ..., discountedPrice: ..., finalTotal: ... }
    
//       // TODO: implement
//     }
//     ```