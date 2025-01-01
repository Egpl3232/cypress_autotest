describe('Тесты для сайта с логином', function () {

     it('Позитив авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Восстановления пароля:', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form').should('be.visible');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio12222');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неправильный эмейл', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#mail').type('german@dolnikov1.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Эмейл без собаки', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Написание логина строчными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

    it('end-2-end pokemons', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('.login__content').should('be.visible');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();
        cy.get('.header__container > .header__id').should('be.visible').click();
        cy.get('[href="/shop"]').should('be.visible').click();
        cy.get('.shop__list > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .shop__button').should('be.visible').click();
        cy.get('.pay__payform-v2').should('be.visible');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible').type('GERMAN DOLNIKOV');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').should('be.visible');
        cy.get('#cardnumber').should('be.visible').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
 }) 