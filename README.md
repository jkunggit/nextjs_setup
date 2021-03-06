# nextjs-setup-with-custom-express-server

Quickly and easily start a Next.js with custom express server project.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Jest](https://jestjs.io/)
- [React-Testing-Library](https://testing-library.com)
- [Supertest](https://github.com/visionmedia/supertest#readme)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Standard](https://standardjs.com/)
- [Snazzy](https://github.com/standard/snazzy)
- [Sass](https://github.com/sass/dart-sass)

## File Structure

```
project/
├── package.json
├── .gitignore
├── .babelrc.js
├── .eslintrc.js
├── .nowignore.js
├── jest.config.js
├── next.config.js
├── nodemon.json
├── README.md
├── __mocks__/
├── server/
│   ├── server.js
│   ├── routes
│       ├── index.js
│   ├── __tests__/
│       ├── server.test.js
├── pages/
│   ├── index.js
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   ├── dynamic/
│       ├── [id].js
│   ├── __tests__/
│       ├── index.test.js
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── PostLink.jsx
├── lib/
├── public/
│   ├── images
├── scss
│   ├── style.scss
```

## Usage


- clone the repo
- cd to project directory
- ```npm install``` all the dependencies
- ```npm run dev``` to start the local server

## deployment preview:
https://nextjs-setup.now.sh/

## Recommend Glogal packages 
- [pm2](https://www.npmjs.com/package/pm2)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [now](https://www.npmjs.com/package/now)
