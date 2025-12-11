let itemName = "calculatrcice";
let price = 25.5;
let quantity = 2;
let hasDiscount = true;
let discount = 20 / 100;

function calculateTotal(itemName, price, quantity, hasDiscount, discount) {
  if (quantity <= 0 || price <= 0) {
    console.log(
      "Le prix ou la quantité ne peut pas être négatif ou égal à zéro."
    );
  }

  if (hasDiscount) {
    let priceAfterDiscount = price * discount;
    let totalPrice = (price - priceAfterDiscount) * quantity;
    console.log(
      `Cette ${itemName} coute : ${price}€, à pour quantité ${quantity} et à une remise de ${discount} alors ces calculatrices coûtent ${totalPrice} euros après remises`
    );
    return totalPrice;
  } else {
    console.log(price * quantity);
  }
}
calculateTotal(itemName, price, quantity, hasDiscount, discount);

export { itemName, price, quantity, hasDiscount, discount, calculateTotal };
