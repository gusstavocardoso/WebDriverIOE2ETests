const LoginPage = require('../pages/LoginPage');
const ShoppingCartPage = require('../pages/ShoppingCartPage');
const loginData = require('../data/loginData.json');
const purchaseData = require('../data/purchaseData.json');

describe('Compra', () => {
  it('Deve realizar a compra com sucesso', () => {
    // Realizar o login
    LoginPage.open();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);

    // Verificar se o login foi bem-sucedido e redirecionado para a página de inventário
    expect(browser).toHaveUrlContaining('/inventory.html');

    // Adicionar um produto ao carrinho
    const productToAdd = purchaseData.productToAdd;
    const productElement = $(`[data-test="add-to-cart-${productToAdd}"]`);
    productElement.click();

    // Ir para a página de carrinho
    ShoppingCartPage.open();

    // Verificar se o produto foi adicionado ao carrinho
    expect(browser).toHaveUrlContaining('/cart.html');

    // Finalizar a compra
    ShoppingCartPage.checkoutButton.click();

    // Preencher informações de envio e avançar para a página de resumo
    const { firstName, lastName, zipCode } = purchaseData.userInfo;
    ShoppingCartPage.fillUserInfo(firstName, lastName, zipCode);
    ShoppingCartPage.continueButton.click();

    // Verificar se as informações de envio estão corretas na página de resumo
    expect(ShoppingCartPage.summaryInfo).toHaveTextContaining(firstName);
    expect(ShoppingCartPage.summaryInfo).toHaveTextContaining(lastName);
    expect(ShoppingCartPage.summaryInfo).toHaveTextContaining(zipCode);

    // Finalizar a compra
    ShoppingCartPage.finishButton.click();

    // Verificar se a compra foi finalizada com sucesso
    expect(browser).toHaveUrlContaining('/checkout-complete.html');
    
    const successMessage = $('.complete-header');
    expect(successMessage).toHaveText('THANK YOU FOR YOUR ORDER');
  });
});
