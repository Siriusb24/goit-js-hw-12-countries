# Сборка Parcel 1.12.5

Простенькая сборка Parcel 1.12.5 c функцией деплоя на GitHub

## Для установки сборки:

1. Копируем этот репозиторий себе.

2. Открываем в VSCode и запускаем в консоли команду `npm ci` чтобы установить загрузчики и плагины из перечня
   "package-lock.json".

3. Меняем под себя значения ключей в файле "package.json":

   1. `"name": "parcel-1.12.5-lite"` на `"name": "имя_вашего_проекта"` или просто `"name": ""`;

   2. `"homepage": "https://Eduard-Konovka.github.io/parcel-1.12.5-lite"` на
      `"homepage": "https://ваше_имя_на_ГитХабе.github.io/имя_вашего_проекта"`;

   3. В параметрах "scripts" - `"build": "parcel build src/index.html --public-url /parcel-1.12.5-lite/"` на
      `"build": "parcel build src/index.html --public-url /имя_вашего_проекта/"`;

   4. В параметрах "repository" - `"url": "git+https://github.com/Eduard-Konovka/parcel-1.12.5-lite.git"` на
      `"url": "git+https://github.com/ваше_имя_на_ГитХабе/имя_вашего_проекта.git"`;

   5. В параметрах "bugs" - `"url": "https://github.com/Eduard-Konovka/parcel-1.12.5-lite.git/issues"` на
      `"url": "https://github.com/ваше_имя_на_ГитХабе/имя_вашего_проекта.git/issues"`;

   6. `"author": "Eduard Konovka <ed098ua@gmail.com>"` на `"author": "Ваше_имя <ваш_e-mail>"` или просто `"author": ""`.

## Команды скриптов в консоли bash:

1. `npm run dev` - для запуска разработки и создания в папке build файлов разработки (index.html, main.css, main.js,
   изображения и др.). Во вкладке браузера перейти по адресу [http://localhost:1234](http://localhost:1234).

2. `npm run build` - для запуска продакшена и создания в папке build минифицированных файлов продакшена (index.html,
   main.css, main.js, изображения и др.).

3. `npm run deploy` - для деплоя файлов разработки на ГитХаб. На всякий случай стоит зайти в настройки репозитория
   `Settings` > `Pages` и убедиться что продакшен версии файлов раздаются из папки `/root` ветки `gh-pages`.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик просто копирует используемые
  изображения чтобы не нагружать систему оптимизацией картинок, так как на слабых компьютерах это может занять много
  времени.
