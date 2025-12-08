import { test, it, expect } from "vitest";
import {
  calculateTotal,
  quantity,
  price,
  itemName,
  hasDiscount,
discount,
} from "./calculate";

test("Cas de démarrage #1 - Mettre une quantité valide", () => {
  expect(calculateTotal(itemName, price, quantity, hasDiscount, discount)).toBeTypeOf(
    "number"
  );
});
