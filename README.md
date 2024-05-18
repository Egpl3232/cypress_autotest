<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Реализованы проверки:
:white_check_mark: Авторизация с верным паролем и верным логином
:white_check_mark: Авторизация c верным логином и неверным паролем
:white_check_mark: Проверка работы валиадации на наличие @ в логине
:white_check_mark: Проверка флоу восстановления пароля

## Локальный запуск тестов (из терминала)
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://raw.githubusercontent.com/German-D/tg_credit_cards/main/bot_menu.png)


## Запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://raw.githubusercontent.com/German-D/tg_credit_cards/main/visa_card.png)


## Автор

Дольников Герман (Телеграм @dolnikov)
