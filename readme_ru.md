# webpack-typescript-react-redux

Пустой Hello world SPA проект. Используется следующий стек технологий:  
**TypeScript** - собирается в ES5  
**Stylus** - css препроцессор  
**React** **Redux**  
**Webpack** - сборщик  
**Karma** - Запускает юнит тесты  
**Jasmine** - Библиотека для юнит тестов  
**Isparta** - Уровень покрытия кода тестами   
**Typings** - Загружает d.ts файлы из DefinitelyTyped  
**tslint, stylint** - валидация кода TypeScript и Stylus  
**Gulp** для запуска линтеров

Проверено только в node.js 5+
### Установка
```
npm install
```

### Использование
Запуск http сервера и вотчера
```
npm start
```

Открыть в браузере
```
http://localhost:8080/  
http://localhost:8080/webpack-dev-server/ с обновлением на лету
```

Запускает юнит тесты через Карму. Используется PhantomJS.
```
npm test
```

Отладка юнит тестов через Карму. Используется Chrome.
```
npm run test:dev
```

Собирает билд. (папка /build).
```
npm run build
```

Проверка TypeScript и Stylus кода на валидацию через линтер
```
npm run lint
```

### Git
На pre-commit установлен хук для проверки кода в измененных/добавленных файлах линтером.  
На pre-push запускаются unit тесты
