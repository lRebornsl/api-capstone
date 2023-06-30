import counterModule from '../modules/counterComm.js';

describe('Test comment counter', () => {
  test('Should return 0 when recibe message "whitout comments"', () => {
    const message = 'whitout comments';
    const result = counterModule(message);
    expect(result).toBe(0);
  });

  test('Shoul return the quantity of elements with class "userCom"', () => {
    document.body.innerHTML = `
      <div class="userCom">Comment 1</div>
      <div class="userCom">Comment 2</div>
      <div class="userCom">Comment 3</div>
    `;

    const message = 'Andy';
    const result = counterModule(message);
    expect(result).toBe(3);
  });
});