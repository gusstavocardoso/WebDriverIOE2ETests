const LoginPage = require('../pages/LoginPage');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

describe('Login', () => {
  it('Deve realizar o login com sucesso', () => {
    LoginPage.open();
    LoginPage.login(username, password);

    // Aguarda redirecionamento para a página de inventário após o login
    expect(browser).toHaveUrlContaining('/inventory.html');

    // Verifica se o elemento da página de inventário está visível
    const inventoryContainer = $('.inventory_container');
    expect(inventoryContainer).toBeDisplayed();
  });
});
