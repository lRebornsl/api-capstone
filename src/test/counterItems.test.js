import { describe, expect } from "@jest/globals";
import counterItems from "../modules/counterItems.js";

describe('Test items counter', () => {
  test('Should return 0 when there are not cards', () => {
    const result = counterItems();
    expect(result).toBe(0);
  });

  test('Should return the number of cards created', () => {
    for(let i = 0; i < 3; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      document.body.appendChild(card);
    }
    const result = counterItems();
    expect(result).toBe(3);
  });
})