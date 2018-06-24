Задание
Хранить информацию о том, находиться ли фильм в избранном, в объекте фильма. Создать для этой информации отдельное поле (булевого типа) в объекте фильма. Нескольким фильмам должно быть заранее проставлено информацию, что фильм в избранном.
Добавить в toolbar приложения input-поле, с помощью которого можно будет осуществлять поиск по имени фильма. Ограничить длину строки для запроса не менее чем в три символа. Данные при поиске должны поступать с сервиса. Если результаты поиска есть — отображаете их, если нет — поставить “заглушку”, о том что фильмы не найдены.
Отдавать с сервиса только часть (например половину) данных при первом обращении. Внизу карточек с фильмами поместить по центру кнопку “Загрузить еще”, при нажатии на которою погрузиться новая “порция” данных с сервиса. Если данных на сервисе больше нет, сделать кнопку “Загрузить еще” неактивной. Желательно учесть при получении новых данных порядок сортировки в нашем текущем отображении.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
