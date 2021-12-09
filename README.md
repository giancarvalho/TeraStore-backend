## TeraStore

TeraStore is a fictional brazilian ecommerce where you can find the best deals for computers, keyboards, printers and other tech products. 

The project was made using React and Express/Nodejs. The backend includes authentication, stock control, integration tests and more. 

### See the project live [here](https://tera-store-frontend-ten.vercel.app).

![HomeDesktop](https://i.imgur.com/OwnJQHO.png)

<p align="center">
  <img src="https://i.imgur.com/sC3C5AY.png" />
</p>

This is a full stack project. You are in the backend repository, you can see the [frontend here](https://github.com/giancarvalho/TeraStore-frontend)

## Technologies

### Production
- express
- pg 
- cors
- dotenv
- jest 
- babel-jest
- joi

### Dev
- eslint (airbnb base)
- husky
- nodemon
- faker


## Requirements

- npm
- git
- postgres

## How to use

The easiest way to use the API is to send requests to the following URL: https://terastore.herokuapp.com

### Running it locally

1- Clone this repository using ```git clone https://github.com/giancarvalho/TeraStore-backend.git```

2 - Run ```npm install``` 

3 - Use the dump.sql to [create your postgres database](https://www.postgresql.org/docs/9.4/backup-dump.html).

4 - Add your .env files (follow the [env.example](https://github.com/giancarvalho/TeraStore-backend/blob/9a7ba8c6f73b3eedcc4308618a9eca07bd02c54e/.env.example) file)

5 - Run ```npm run start:dev```

There are three built-in scripts:

    "start": "NODE_ENV=prod node src/server.js",
    "start:dev": "NODE_ENV=dev nodemon src/server.js",
    "test": "NODE_ENV=test npx jest"

---
This is the 16th project of Driven's Full-stack Web Dev Course. 
