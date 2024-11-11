const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../pageobjects/login.page.js');

Given('я открываю страницу логина', async () => {
    await loginPage.open();
});

When('я ввожу правильное имя пользователя и пароль', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
});

When('я ввожу неправильное имя пользователя и пароль', async () => {
    await loginPage.login('user', 'qwerty');
});

When('я ввожу пустое имя пользователя и правильный пароль', async () => {
    await loginPage.login('', 'secret_sauce');
});

When('я ввожу правильное имя пользователя и пустой пароль', async () => {
    await loginPage.login('standard_user', '');
});

When('я ввожу пустое имя пользователя и пустой пароль', async () => {
    await loginPage.login('', '');
});

When('я ввожу неправильное имя пользователя и пароль, вижу ошибку и жму на очистку полей', async () => {

    await loginPage.clearInput('user', 'qwerty')
})

Then('я должен быть перенаправлен на страницу с продуктами', async () => {
    const isProductsPageVisible = await loginPage.isProductsPageVisible();
    expect(isProductsPageVisible).toBe(true);
});

Then('я должен увидеть сообщение об ошибке', async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});

Then('я должен увидеть ошибку о необходимости ввести имя пользователя', async () => {
    const errorMessage = await loginPage.getUsernameErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username is required');
});

Then('я должен увидеть ошибку о необходимости ввести пароль', async () => {
    const errorMessage = await loginPage.getPasswordErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Password is required');
});

Then('я должен увидеть ошибки для обоих полей', async () => {
    const usernameError = await loginPage.getUsernameErrorMessage();
    const passwordError = await loginPage.getPasswordErrorMessage();
    expect(usernameError).toContain('Epic sadface: Username is required');
    expect(passwordError).toContain('Epic sadface: Username is required');
});

Then('я должен увидеть отсутствие ошибки', async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('');
});
