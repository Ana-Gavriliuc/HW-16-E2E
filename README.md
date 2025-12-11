Homework 16

Добавлена библиотека Faker.js
Для генерации случайных логинов и паролей в негативных тестах авторизации.

Реализовано использование переменной окружения APP_URL
URL страницы логина теперь считывается через process.env.APP_URL.
Если переменная не указана, используется дефолтный URL приложения.

Обновлены тесты авторизации Tallinn Delivery

добавлена генерация случайных данных через Faker;

реализованы негативные сценарии 

Настроен CI-pipeline GitHub Actions

передача APP_URL осуществляется через Repository Secret;

CI запускает Playwright-тесты автоматически при push и PR.

Создан Pull Request для проверки домашнего задания

Установка зависимостей:
npm install

Локальный запуск тестов:
npx playwright test

Запуск с переменной окружения:
$env:APP_URL="https://fe-delivery.tallinn-learning.ee/signin"
npx playwright test