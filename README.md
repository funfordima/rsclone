<h1 align="center">RS clone 103</h1>

This application is a clone of the International Medical Platform 103 - a project of the ARTOX company specializing in thematic aggregators. ARTOX has been operating since 2007, and since 2012 has been a resident of the High-Tech Park in Belarus.

<h2 align="center"><a href="https://rsclone-103.netlify.app/">Live Demo</a></h2>

---

Technologies stack:
- TypeScript
- React.js
- MonogoDB
- Node.js
- Express.js

---

## Project setup

There ara 2 folders: 
- 103 (Front-end)
- 103.Api (Back-end)

For start of client - open 103 folder and:

Install all dependencies, in repo's root:

```

$ npm install

```
And build development version:

```

$ npm run build

```
The result is available in `build/` folder.

Running demos:

`$ npm run start`

---

If you want to start of back on localhost - open 103.Api folder:

Install all dependencies, in repo's root:

```

$ npm install

```
And build development version:

```

$ npm run build
$ npm run start

```
1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md
2. Screenshot:
 ![](https://cdn1.savepice.ru/uploads/2021/2/3/39ad70333e4ba356958c74375f3f6f54-full.jpg)
3. Deploy: https://rsclone-103.netlify.app/
4. Medium: https://funfordima.medium.com/103-ua-%D0%BA%D0%BB%D0%BE%D0%BD-523c602f195d
5. Video fullversion:
6. Video:
7. Done 03.02.2021 / deadline 03.02.2021
8. Score: 640 /(360 (max 320) баллов за приложение / 160 баллов за статью / 160 баллов за презентацию)

 ## Критерии оценки приложения:
# UI: +50
 - [x] внешний вид приложения соответствует образцу или является его улучшенной версией. +10
 - [x] вёрстка адаптивная. Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 320рх. +10
 - [x] Есть хотя бы один модальный диалог +10
 - [x] Реализован routing (без перезагрузки страницы приложения) +20
 
 # Работа приложения: +110
  - [x] реализован чат-бот в приложении +20
  - [x] реализован алгоритм взаимодействия и обработки данных введенных пользователем +40
     - возможность оставить отзыв на сайте (отзыв регистрируется в MongoDB и затем выводится в приложении) +10
     - возможность зарегистрироваться через "персональный кабинет врача" +10
     - возможность оставить заявку через чат-бота +10
     - реализована загрузка аватара пользователя, смена авторизационных данных +10
  - [x] реализована авторизация через социальные сети +30
     - Google +10
     - Facebook +10
     - GitHub +10
   - [x] проверка данных аутентификации +10
   - [x] проверка заполнения форм для пользовательского ввода и вывод сообщения о результате +10
 
 # Технический стек: +90
 - [x] использован React.js
 - [x] использован webpack +10
 - [x] сохранение и загрузка данных с использованием Local storage (город пользователя, различные id для работы приложения) +10
 - [x] приложение написано на TypeScript +40
 - [x] использовано дополнительное API для получения подсказки по городам +10

# Работа с кодом: +30
- [x] Использован eslint, eslint-config-airbnb-base +10
- [x] Понятный, читаемый код. Имена переменных и функций отражают то что в них содержится/то что они делают. Функция выполняет одно действие. Повторение логики сведено к минимуму. Приложение разбито на переиспользуемые компоненты +10
- [x] приложение написано с использованием react hooks && styled-components +10

# Back-end: +80
- [x] использование TS на бэкенде +30
- [x] deploy бэкенд на Heroku +20
- [x] работа с API Mongo DB (создано 5 апишек, которые отдают данные в приложение) +30

## Для проверки отправленных данных использована почта: 
  # login: rsclonedefault@gmail.com 
  # password: newUser123

# Статья на medium +160
 
